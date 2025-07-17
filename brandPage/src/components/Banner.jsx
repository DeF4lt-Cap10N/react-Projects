import React from 'react'
import amzonIcon from "../assets/amazon.png"
import flipkartIcon from "../assets/flipkart.png"
import shoes from "../assets/shoe_image.png"

const Banner = () => {
   return (
      <div style={{height:"617px", display:"flex", justifyContent:"center", alignItems:"center"}}>
         {/* first box*/}
         <div style={{width:"595px", height:"617px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <h1  style={{width:"595px", height:"306px", fontFamily:"sans-serif", fontSize:"90px", fontWeight:"800", marginBottom:'0px', lineHeight:"1"}}>
               YOUR FEET DESERVE THE BEST 
            </h1>
            <p style={{width:"404px", height:"95px", fontFamily:"sans-serif", fontSize:"18px"}}>
               YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div style={{width:"331px", height:"41px", }}>
               <button style={{width:"151px",height:"41px",  marginRight:"10px", backgroundColor:"red", outline:'none', border:"none", color:"white", fontFamily:"sans-serif", fontSize:"18px"}}>Shop Now</button>
               <button style={{width:"151px",height:"41px",  marginRight:"10px", outline:'none',fontFamily:"sans-serif", fontSize:"18px"  }}>Category</button>
            </div>
            
            <div style={{width:"131px", height:"67px",fontFamily:"sans-serif", fontSize:"15px"}}>
               <p >Also Available on </p>
               <div style={{width:"88px", height:"32px", display:"flex",gap:"9px", verticalAlign:"middle"}}>
                    <img src={amzonIcon} alt="" />
               <img src={flipkartIcon} alt="" />
               </div>
             
            </div>
            
         </div>
         {/* second box: image */}
         <div style={{ width: "530px", height: "465px", display: "flex", alignItems: "center" }}>
      <img src={shoes} alt="" />
   </div>
      </div>
   )
}

export default Banner