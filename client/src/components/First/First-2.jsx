import React from "react";
import Box from "./Box";

export default function First2(){
    return(
        <>
            <div className="container" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{width:'75%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'4vw 0 4vw 0',flexDirection:'column',gap:'3vw'}}>

                    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                        <ui style={{display:'flex',listStyle:'none',gap:'4vw',alignItems:'center',fontSize:'1vw',color:'white'}}>
                            <li style={{display:'flex',backgroundColor:'black',borderRadius:'25%',width:'6vw',height:'2vw',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 .7vw 0vw .7vw'}}>All</li>
                            <li style={{display:'flex',backgroundColor:'grey',borderRadius:'25%',width:'6vw',height:'2vw',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 .7vw 0vw .7vw'}}>Building</li>
                            <li style={{display:'flex',backgroundColor:'grey',borderRadius:'25%',width:'6vw',height:'2vw',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 .7vw 0vw .7vw'}}>With Garden</li>
                        </ui>
                        <button style={{fontSize:'1vw',borderRadius:'25%',background:'none',border:'solid thin',padding:'.7vw 1vw .7vw 1vw',width:'15vw'}}>Search</button>
                    </div>
                    <div style={{width:'100%',gap:'10%'}}>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                        <Box/>
                    </div>
                        <ul style={{display:'flex',listStyle:'none',gap:'1vw'}}>
                            <li style={{display:'flex',color:'white',backgroundColor:'black',width:'2.5vw',height:'2.5vw',borderRadius:'25%',alignItems:'center',justifyContent:'center'}}>1</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'25%',alignItems:'center',justifyContent:'center'}}>2</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'25%',alignItems:'center',justifyContent:'center'}}>3</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'25%',alignItems:'center',justifyContent:'center'}}>4</li>
                            <li style={{display:'flex',color:'white',backgroundColor:'grey',width:'2.5vw',height:'2.5vw',borderRadius:'25%',alignItems:'center',justifyContent:'center'}}>5</li>
                        </ul>
                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}