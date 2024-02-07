import { FOOD_IMG_URL } from "../../utils/constants";

const ItemList=({items})=>{
    // console.log(items);
    return(
        <div>
            <ul>
                {items.map((item)=>(
                    <div key={item?.card?.info?.id} className="p-2 m-4 border-gray-200 border-b-2 shadow-xl flex justify-between ">
                        <div className="flex-row items-center justify-between">
                            <div className="flex-wrap justify-between">
                                <span className=" font-bold ">{item?.card?.info?.name}</span><br/>
                                <span>{item?.card?.info?.price 
                                ?item?.card?.info?.Price/100
                                :item?.card?.info?.defaultPrice/100}Rs</span>
                            </div>
                            <p className="text-xs">{(item?.card?.info?.description)}</p>
                        </div>
                        <div className="">
                            <img className=" w-32 "src={FOOD_IMG_URL+item?.card?.info?.imageId}></img>
                            <div className="">
                                <button className=" btncss p-2 bg-[rgb(123,68,225)] shadow-lg text-white rounded-md mx-16">Add+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;