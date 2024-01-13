import Restaurant from "./Restaurant";
import reslist from "../../utils/Mockdata";
import { useState,useEffect } from "react";



const Body=()=>{

    //State variable - super powerfull variable
    const [listrestraun,setlistrestraun/* this is funcn*/ ]=useState(reslist);
/* 
    const arr = useState(reslist)
      
    const[listrestraun,setlistrestraun]=arr;
                                OR

    const listrestraun=arr[0];
    const setlistrestraun=arr[1];

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
    return (<div className="Body">
        <div className="search">search</div>
        <button className="filter-btn" onClick={()=>{
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