import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = ()=>{

    const [btnName,setbtnName]=useState("Login")
return (
    <div className="header">
        <div className="LogoContainer">
            <img className="Logo" src={LOGO_URL }></img>
        </div>
        <div className="NavItems">
            <ul>
                <li>Home</li>
                <li>contact</li>
                <li>About</li>
                <li >cart</li>
                <button className="btncss"
                onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
)};

export default Header;