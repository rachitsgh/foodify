import Restaurant from "./Restaurant";
// import reslist from "../../utils/Mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

    //State variable - super powerfull variable
    const [listrestraun,setlistrestraun/* this is funcn*/ ]=useState([]);
    const [filteredrestraun,setfilteredrestraun]=useState([]);

    const [searchtext,setsearchtext]=useState("");
/* 
    const arr = useState(reslist)
      
    const[listrestraun,setlistrestraun]=arr;
                                OR

    const listrestraun=arr[0];
    const setlistrestraun=arr[1];

*/

/* 
useEffect callled everytime our component renders 

If there is an empty dependency array = []  -> useEffect is called on intial render only (just once)


What if put something in dependency array -> then it will only called when depemdency changes
for example :- [btnaractname],,,every =time btnnamereact updates/changes my useEffect called

useState hooks can be called inside fumctional component
useState is used to create local state variable inside ur function 


try to call this hook on the top mean so when funcn start,,to ignore inconcistency

never use useState inside if-else condition  --> it'll create inconcistency
*/


useEffect(()=>{
    /* 
        this call back functn will be called jus after rendering done
    */
   fetchdata();
},[])

// whenever state variable updates,,react triggers Reconcialation cycles(re-renders the componenent)

const fetchdata = async ()=>{
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    console.log(json);
    setlistrestraun(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredrestraun(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
    return  listrestraun.length ==0 ?(<Shimmer/>) : (
    <div className="Body">
        <div className="filter">
            <div className="search">
                <div className="inputBox_container ">
                    <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
                    </svg>
                    <input className="inputBox search-box" 
                    id="inputBox" type="text" placeholder="Search For Restaurant" 
                    value={searchtext} onChange={(e)=>{
                    setsearchtext(e.target.value)
                    console.log(searchtext)
                    const filtererestaurant=listrestraun.filter((res)=>
                        res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase()) 
                    )
                    setfilteredrestraun(filtererestaurant);
                    setsearchtext(e.target.value)
                } }
                    />
                </div>
                <button className="Search-btn btncss" onClick={
                    ()=>{
                        const filtererestaurant=listrestraun.filter((res)=>
                            res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase()) 
                        )
                        setfilteredrestraun(filtererestaurant);
                    }
    
                }>Search</button>
            </div>
            <button className="filter-btn btncss" onClick={()=>{
            //filter logic here
            console.log("fg")
            const filteredlistrestraun=listrestraun.filter((res)=>res?.info?.avgRating>=4);
            setfilteredrestraun(filteredlistrestraun);


        }}>Top Rated Restraun..</button>
        </div>
        <div className="restcontainer" /*style={style} */ >
            {/* <Restaurant resdata={resobj[0]}/>
            <Restaurant resdata={resobj[1]}/> */
            filteredrestraun.map((restaurant,index)=>(<Restaurant key={restaurant?.info?.id} resdata={restaurant}/>))
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