import React from "react";

export default function First1(){
    return(
        <>
            <div className="container" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'lightgray'}}>
                <div style={{width:'75%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'4vw 0 4vw 0'}}>

                    <div style={{color:'white'}}>
                        <h2 style={{fontSize:'4vw'}}>Lorem ipsum <br></br> dolor sit amet <br></br> consectutar <br></br> adipsing elit</h2>
                        <button style={{width:'7vw',background:'purple',fontSize:'1vw',padding:'.5vw 1.4vw .5vw 1.4vw',borderRadius:'25%',border:'thin solid',color:'white'}}>Start</button>
                    </div>
                    <div style={{position:'relative',top:'6vw',right:'5vw'}}>
                        <input style={{borderRadius:'15%',border:'solid thin',padding:'1vw 1.3vw 1vw 1.3vw',width:'20vw'}} placeholder="Start"/>
                    </div>

                </div>
            </div>
        </>
    )
}