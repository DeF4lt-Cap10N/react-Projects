import React, { useState } from "react"
import '../index.css'


export default function Toggle() {

    const [theme , setTheme] = useState("light");


    const changeTheme  =  () => {
        if(theme==="light"){
            setTheme("dark")
        }
        else {
            setTheme("light");
        }
        console.log(theme);

    }


    return (
        <div className={`lightdark-container-${theme.toLocaleLowerCase()}`}>
            <div className="container">
                <p>change light to dark or vice versa</p>
                <br />
                <button onClick={changeTheme}>{theme}</button>

            </div>
        </div>
    )
}