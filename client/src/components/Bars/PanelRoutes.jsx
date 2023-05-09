import React, { Component } from "react";
import { Route,Routes} from "react-router-dom";
import Home from '../First/First'
import SecondPage from "../Second/Second";
import ThirdPage from '../Third/Third'
import LogIn from "./Login";
import Register from "./Register";
import axios from "axios";
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

class PanelRoutes extends Component {
  render() {
    return (
      <div className="contents">
        <Toaster position="bottom-right" toastOptions={{duration:2000}} />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/oppur" element={<SecondPage/>}/>
            <Route path="/about" element={<ThirdPage/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    );
  }
}

export default PanelRoutes;