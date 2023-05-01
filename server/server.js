const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./user");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dotenv = require("dotenv");

dotenv.config( {path:'./config.env'});

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to database");
});

const secretKey = "mysecretkey";

// Register endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).send("Invalid email or password");
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ id: user.id }, secretKey);
        res.cookie("token", token, { httpOnly: true });
        res.send(user);
      } else {
        res.status(401).send("Invalid email or password");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Logout endpoint
app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Logged out successfully");
});

// Protected route
app.get("/api/protected", async (req, res) => {
  try {
    const token = req.cookies.token;
    const payload = jwt.verify(token, secretKey);
    const user = await User.findById(payload.id).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized");
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));