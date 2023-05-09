import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogIn( ){

  const [data, setData] = useState({
    email:'',
    password:''
  });
  

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    axios.get('/')
  }

  return (
      <div className="Auth-form-container" style={{display: 'flex',justifyContent: 'center',alignItems:'center',width: '100%',height: '100vh',backgroundSize: '100% 100%',zIndex: '3',position: 'absolute'}}>  
          <form className="Auth-form" style={{width: '42vw',boxShadow:'rgb(0 0 0 / 16%) 1px 1px 10px',paddingTop: '4.2vw',paddingBottom:'4vw',borderRadius: '8px',backgroundColor: 'white'}}>
            <div className="Auth-form-content" style={{paddingLeft: '12%',paddingRight: '12%'}}>
              <h3 className="Auth-form-title" style={{textAlign: 'center',marginBottom: '1em',fontSize: '2vw',color: 'rgb(34, 34, 34)',fontWeight: '800'}}>Sign In</h3>
              <div className="text-center" style={{marginBottom:'1vw',fontSize:'1.3vw',}}>
                Not registered yet?{" "}
                <NavLink to={'/register'} className="link-primary"  style={{cursor:'pointer',}}>
                  Sign Up
                </NavLink>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                  <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                    value={data.email}
                    onChange={(e) => setData({...data,email:e.target.value})}
                  
                  />
                </div>
                <div className="form-group mt-3" style={{display:'flex',alignItems:'center',marginBottom:'.7vw',}}>
                  <label style={{width:'6.6vw',fontSize: '1vw',fontWeight: '600',color: 'rgb(34, 34, 34)'}}>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    style={{width:'80%',fontSize:'1vw',padding:'.7vw 1vw .7vw 1vw',}}
                    value={data.password}
                    onChange={(e) => setData({...data,password:e.target.value})}
                  />
                </div>
              </form>
              
              <NavLink className="text-center mt-2" style={{fontSize:'1.1vw',}}>
                Forgot <a >password?</a>
              </NavLink>
              <div className="d-grid gap-2 mt-3" style={{display:'flex',justifyContent:'center',}}>
                <button type="submit"  onClick={(e) => handleSubmit(e)} className="btn btn-primary" style={{padding:'.7vw 1vw .7vw 1vw',background:'none',width:'30%',fontSize:'.9vw',border:'solid thin lightgrey',boxShadow:' rgb(0 0 0 / 16%) 1px 1px 10px',cursor:'pointer',}}>
                  Submit
                </button>
              </div>
              
            </div>
          </form>
        </div>
    )
}