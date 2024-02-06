import { CDN_URL } from "../../utils/constants";

// above import is called named import


const Restaurant=(props) /*/or (resname,cuisine) known as destructuring of props*/=>{
    const {resdata}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resdata?.info;
    console.log(props);
    return(
    /* or
        const {resname,cuisine}=props;
        this is jus an js,not some react magic,LOL :)    
    */
//    console.log(props);
    <div className="restcard">
        <img className="rest-logo"
        alt="Res-logo"
        src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{resdata?.info?.}</h4> */}
    </div>
)};

// Higher order restaurant

//input->RestaurantCard,output->RestaurantCardPromoted

export const withPromotedLabel=(props)=>{
    return ()=>{
        return(
            <div>
                <label className="absolute bg-black rounded-lg m-2 p-2 ">promoted</label>
                <Restaurant {...props}/>
            </div>
        );
    };
}

export default Restaurant;