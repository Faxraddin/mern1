import React from "react";

export default function Box(){
    return(
        <>
            <div className="container" style={{display:'flex',flexDirection:'column',width:'15vw',height:'100%',justifyContent:'center',border:'solid grey thin',alignItems:'center',padding:'.9vw',borderRadius:'10%',gap:'.5vw',float:'left',marginRight:'1.5vw',marginTop:'1.5vw'}}>
                <div style={{width:'100%',height:'9vw',backgroundColor:'grey',borderRadius:'10%'}}></div>
                <span style={{position:'relative',left:'0'}}>Qiymet /ay</span>
                <span>1 yataq</span>
                <span>Adres</span>
                <button style={{width:'100%',height:'3vw',borderRadius:'10%',border:'none',background:'purple',fontSize:'1vw',color:'white'}}>Look</button>
            </div>
        </>
    )
}