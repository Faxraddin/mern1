import React,{useState,useEffect} from "react";
import {NavLink,useNavigate} from "react-router-dom"
import axios from "axios";

export default function Register(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if user is logged in
        const res = await axios.get("/api/protected");
        setUser(res.data);
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      setUser(res.data);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      setUser(res.data);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/logout");
      setUser(null);
      setLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Auth-form-container" style={{display: 'flex',justifyContent: 'center',alignItems:'center',width: '100%',height: '100vh',backgroundSize: '100% 100%',zIndex: '3',position: 'absolute'}} >
      <form className="Auth-form" style={{width: '42vw',boxShadow:'rgb(0 0 0 / 16%) 1px 1px 10px',paddingTop: '4.2vw',paddingBottom:'4vw',borderRadius: '8px',backgroundColor: 'white'}} >
        <div className="Auth-form-content" style={{paddingLeft: '12%',paddingRight: '12%'}}>
          <h3 className="Auth-form-title" style={{textAlign: 'center',marginBottom: '1em',fontSize: '2vw',color: 'rgb(34, 34, 34)',fontWeight: '800'}}>Sign Up</h3>
          <div className="text-center" style={{marginBottom:'1vw',fontSize:'1.3vw',}}>
            Already registered?{" "}
            <NavLink to={'/login'} className="link-primary"  style={{cursor:'pointer',}}>
              Sign In
            </NavLink>
          </div>
          <form onSubmit={handleRegister}>
            <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Full Name</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                name='firstName'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group mt-3"style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Email address</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Password</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
        </form>
        
          <div className="d-grid gap-2 mt-3" style={{display:'flex',justifyContent:'center',}}>
            <button type="submit" className="btn btn-primary" style={{padding:'.7vw 1vw .7vw 1vw',background:'none',width:'30%',fontSize:'.9vw',border:'solid thin lightgrey',boxShadow:' rgb(0 0 0 / 16%) 1px 1px 10px',cursor:'pointer',}}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}