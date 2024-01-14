import Restaurant from "./Restaurant";
import reslist from "../../utils/Mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

    //State variable - super powerfull variable
    const [listrestraun,setlistrestraun/* this is funcn*/ ]=useState([]);
/* 
    const arr = useState(reslist)
      
    const[listrestraun,setlistrestraun]=arr;
                                OR

    const listrestraun=arr[0];
    const setlistrestraun=arr[1];

*/

useEffect(()=>{
    /* 
        this call back functn will be called jus after rendering done
    */
   fetchdata();
},[])

const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.4765796&lng=76.5905317&carousel=true&third_party_vendor=1");
    const json = await data.json();

    console.log(json);
    setlistrestraun(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
// Conditional rendering :- rendering on the basis of condition is known as conditional rendering
/*
if(listrestraun.length == 0){
    return (<Shimmer/>)
}
*/
    //Normal js variable
    // let listrestraunjs =[ {
    //     "info": {
    //         "id": "101547",
    //         "name": "Burger King",
    //         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //         "locality": "Eagle Motel",
    //         "areaName": "Rajpura",
    //         "costForTwo": "₹400 for two",
    //         "cuisines": [
    //         "Burgers",
    //         "American"
    //         ],
    //         "avgRating": 4,
    //         "parentId": "166",
    //         "avgRatingString": "4.0",
    //         "totalRatingsString": "1K+",
    //         },
    //     },{
    //         "info": {
    //             "id": "101546",
    //             "name": "dominoes",
    //             "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //             "locality": "Eagle Motel",
    //             "areaName": "Rajpura",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //             "Burgers",
    //             "American"
    //             ],
    //             "avgRating": 3.9,
    //             "parentId": "166",
    //             "avgRatingString": "4.0",
    //             "totalRatingsString": "1K+",
    //             },
    //         },{
    //             "info": {
    //                 "id": "101548",
    //                 "name": "kfc",
    //                 "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    //                 "locality": "Eagle Motel",
    //                 "areaName": "Rajpura",
    //                 "costForTwo": "₹400 for two",
    //                 "cuisines": [
    //                 "Burgers",
    //                 "American"
    //                 ],
    //                 "avgRating": 4.2,
    //                 "parentId": "166",
    //                 "avgRatingString": "4.2",
    //                 "totalRatingsString": "1K+",
    //                 },
    //             }];
    return listrestraun.length==0?<Shimmer/> : (<div className="Body">
        <div className="search">search</div>
        <button className="filter-btn btncss" onClick={()=>{
            //filter logic here
            console.log("fg")
            const filteredlistrestraun=listrestraun.filter((res)=>res?.info?.avgRating>=4);
            setlistrestraun(filteredlistrestraun);


        }}>Top Rated Restraun..</button>
        <div className="restcontainer" /*style={style} */ >
            {/* <Restaurant resdata={resobj[0]}/>
            <Restaurant resdata={resobj[1]}/> */
            listrestraun.map((restaurant,index)=>(<Restaurant key={restaurant?.info?.id} resdata={restaurant}/>))
            }
            {/* we use index as key also

            React officially says that :- never use index as a key (it's an bad practice) 
            index as a key is anti-pattern
            (it won't complain,but not recommended)

            Not usingkeys(not acceptable)<<<<<<<<<index as a key<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<unique id(best practice) 

            The reconciliation algorithm compares each React Elements basing on its type.

            */}
            
        </div>
    </div>
)};

export default Body;