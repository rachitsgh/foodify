import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Itemcard from "./Itemcard";
import { useParams } from "react-router-dom";
import { MENU_API, restcloudinary_URL } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
    const Restaurantmenu = ()=>{
        const {resId}=useParams();
        const [showIndex,setShowIndex]=useState(0);

        // const [resinfo,setresinfo]=useState(null);

        const resinfo =useRestaurantMenu(resId);
        const categories=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        console.log(categories);

    //     useEffect(()=>{
    //         fetchMenu();
    //     },[])
    //     const {resId}=useParams();
    //     console.log(resId)
    // const fetchMenu=async ()=>{
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     setresinfo(json.data);
    //     console.log(resinfo?.cards[0]?.card?.card?.info?.name);
    // }
    if(resinfo===null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating,slaString}=resinfo?.cards[0]?.card?.card?.info;

    const {itemCards}=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemcards)

    return(
        <div className="w-[100%] flex justify-center flex-wrap ">
            <div className="restherosection shadow-2xl bg-[rgb(123,68,225)] w-[100%] text-white h-64 ">
                <div className="flex justify-around items-center ">
                    <img className=" w-28 my-11 " src={restcloudinary_URL+cloudinaryImageId}></img>
                    <ul>
                        <li>{name}</li>
                        <li>{cuisines.join(",")}</li>
                        <ul>
                            <li>{avgRating}</li>
                            <li>{slaString}</li>
                            <li>{costForTwoMessage}</li>
                        </ul>
                    </ul>
                </div>
            </div>
            {/* Categories Accordion */}
            <div className="w-[70%] my-2">
                {/* controlled component ==>Restaurant category*/}
                {categories.map((category,index)=>(<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
                showItems={index==showIndex ? true : false}
                setShowIndex={()=>setShowIndex(index)}/>))}
                
            </div>
        </div>
    )
}

export default Restaurantmenu;