import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    const [onlineStatus,setonlineStatus]=useState(true);
    // check if online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setonlineStatus(true);
        })
    },[]);
    // Boolean value
    return onlineStatus;
}

export default useOnlineStatus;