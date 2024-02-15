import { useState } from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import { Link, Outlet } from "react-router-dom";
import { ABOUT_IMG_URL } from "../../utils/constants";

const About = ()=>{
    const [show,setshow]=useState(false);
    return(
        <div>
            <div className="about-user-container">
                {show?(
                    <div>
                        <Link to={"/about"}>
                            <button className="btncss" onClick={()=>{
                                return setshow(false)
                            }}>Hide profile</button>
                        </Link>
                        {/* const name="Rachit"; */}
                        <Outlet context={["Rachit"]} />
                    </div>
                ):(
                    <div>
                        <Link to={"profile"}>
                            <button className="btncss" onClick={()=>
                                setshow(true)
                            }>Show profile</button>
                        </Link>
                    </div>
                )}
            </div>
            <div className="about-container">
                <div className="about-text">
                    <h1>Welcome to the World of</h1>
                    <h1 className="orange btncss">Tasty & Fresh Food</h1>
                    <h3>"Better you will feel if you eat a Bite<span className="purpletxt">Swift</span> healthy meal"</h3>
                </div>
                <div className="about-img">
                            <img className="aboutimginside" src={ABOUT_IMG_URL}></img>
                </div>
            </div>
        </div>
    );
};

export default About;