import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link  } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const data = useContext(UserContext);
    const {loggedInUser}=data;
    const [btnName,setbtnName]=useState("Login")
    const onlineStatus=useOnlineStatus();
    //subscribing to the store using Selector
    const cartItems=useSelector((store)=>{
        return store.cart.items;
        //this cartItems will get the data cart.items;
    })
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
                <li ><Link to="/cart">cart({cartItems.length})</Link></li>
                {console.log(cartItems)}
                <li><button className="btncss p-[15px] flex justify-center items-center"
                onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }}>{btnName}</button>
                </li>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
)};

export default Header;