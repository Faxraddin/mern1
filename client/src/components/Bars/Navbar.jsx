import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div className="container" style={{display:'flex',justifyContent:'center',backgroundColor:'lightgrey'}}>
                <div style={{width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center',}}>

                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <h2 style={{fontSize:'1.4vw'}}>Logo</h2>
                        <div>
                            <ul style={{display:'flex',listStyle:'none',gap:'3vw',alignItems:'center',fontSize:'1.3vw'}}>
                                <NavLink style={{textDecoration:'none'}} to={'/'}>Home Page</NavLink>
                                <NavLink style={{textDecoration:'none'}} to={'/oppur'}>Opportunities</NavLink>
                                <NavLink style={{textDecoration:'none'}} to={'/about'}>About</NavLink>
                            </ul>
                        </div>
                    </div>
                    <NavLink to={'/login'} style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25%',width:'8vw',background:'none',border:'solid thin purple',padding:'.5vw .8vw .5vw .8vw',fontSize:'1vw'}}>Sign Up</NavLink>

                </div>
            </div>
        </>
    )
}

