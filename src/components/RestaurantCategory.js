import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    // const {data}=props;
    // console.log(data)
    // const {title}=data;
    // const [showItems,setShowItems]=useState(false);
    // const [arrowk,setArrowk]=useState("⌄")
    const handleClick=()=>{
        setShowIndex();
    //     showItems?setShowItems(false):setShowItems(true);
    //     showItems?setArrowk("⌄"):setArrowk("˄");
    //     //or
    //     //setShowItems(!showItems);
    }
    return (
        <div>
            {/* Accordian Header */}
            <div className=" shadow-lg p-4 rounded-lg cursor-pointer" >
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="text-black font-bold text-lg">{data?.title}({data?.itemCards.length})</span>
                    <span className="font-bold text-lg">⌄</span>
                </div>
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>
            {/* Accordian Body */}
            <div>
                
            </div>
        </div>
    )
}

export default RestaurantCategory;