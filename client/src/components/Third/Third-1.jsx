import React from "react";

export default function Third1(){
    return(
        <>
            <div className="container" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'whitesmoke'}}>

                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:'10vw',gap:'1vw',backgroundColor:'white'}}>

                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'90%',position:'relative',top:'-3vw'}}>
                        <div style={{display:'flex',gap:'1vw',alignItems:'center'}}>
                            <div style={{display:'flex',backgroundColor:'grey',borderRadius:'50%',height:'10vw',width:'10vw'}}></div>
                            <h1 >Ad/Soyad</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',backgroundColor:'grey',borderRadius:'50%',height:'3vw',width:'3vw'}}></div>
                    </div>

                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'90%',gap:'1vw',position:'relative',top:'-5vw'}}>
                        <button style={{padding:'.5vw 1vw .5vw 1vw',border:'solid purple thin',fontSize:'1vw',background:'none',color:'purple',borderRadius:'29%'}}>Mesaj yaz</button>
                        <button style={{padding:'.5vw 1vw .5vw 1vw',border:'solid purple thin',fontSize:'1vw',background:'none',color:'purple',borderRadius:'29%'}}>Contact</button>
                    </div>

                    <div style={{width:'80%',paddingBottom:'3vw',display:'flex',justifyContent:'space-between'}}>
                        <div style={{fontSize:'1vw',listStyle:'none',background:'whitesmoke',padding:'1.5vw',borderRadius:'10%',width:'25%',height:'9vw'}}>
                            <li>Yas</li>
                            <li>Region : Quba</li>
                            <li>is : IT</li>
                            <li>Maraglar : Sport</li>
                        </div>
                        <div style={{fontSize:'1vw',listStyle:'none',background:'whitesmoke',padding:'1.5vw',borderRadius:'5%',width:'50%',height:'100%',wordBreak:'break-word'}}>
                            <h3>About</h3>
                            <p>JNKoaiufjoiejfpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfcofpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfcofpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfcofpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfcofpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfcofpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfcofpa0eiofjaoeriulgjnfdoiaunjgaepronuvodafjvbpeaouiçvjnoiaefujvmadfuihjverfiovnjdfconapfuohivjpdfuiojvpareivjaiefvjpuhvjdfpiovjareijv</p>
                        </div>
                    </div>

                </div>
            
            </div>
        </>
    )
}