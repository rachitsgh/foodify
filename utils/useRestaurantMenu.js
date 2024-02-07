import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resinfo,setResInfo]=useState(null);
    //fetch data
    
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async()=>{
        const data = await fetch(MENU_API+resId);
        const json=await data.json();
        setResInfo(json?.data);
    }
    return resinfo;
}

export default useRestaurantMenu;