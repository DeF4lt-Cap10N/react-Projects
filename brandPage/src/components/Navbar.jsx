import React from "react"
import logo from "../assets/brand_logo.png"

const Navbar = () => {

   return (
      <>
         <div style={{ width:"1440px", height:"72px",display: 'flex', justifyContent: 'space-between', padding:'5px 35px' }}>
            <img src={logo} />
            <div style={{
               width:"333px",
               height:"24px",
               display: "flex",
               listStyle: "none",
               gap: "20px",
               fontWeight: "bold",
            }}>
               <p>MENU</p>
               <p>LOCATION</p>
               <p>ABOUT</p>
               <p>CONTACT</p>
            </div>
            <button style={{height:"31px",width:"75px" , fontWeight:'bold', backgroundColor:"red", color:'white', outline:'none', border:"none" }}>Login</button>
         </div>
      </>
   )
}

export default Navbar

