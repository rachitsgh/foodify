import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link  } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = ()=>{

    const [btnName,setbtnName]=useState("Login")
    const onlineStatus=useOnlineStatus();
return (
    <div className="header  flex mb-[100px] justify-evenly">
        <div className="LogoContainer">
            <img className="Logo w-[200px]" src={LOGO_URL}></img>
        </div>
        <div className="NavItems ">
            <ul className="text-sm flex items-baseline p-4 ">
                <li>
                    Online Status: {onlineStatus ? "🟢" :"🔴"}
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li >cart</li>
                <li><button className="btncss p-[15px] flex justify-center items-center"
                onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }}>{btnName}</button>
                </li>
            </ul>
        </div>
    </div>
)};

export default Header;