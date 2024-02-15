import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart=()=>{
    // it will only re render or update whenever store.cart.items got mutate
    const cartItems=useSelector((store)=>store.cart.items)
/*
    const store=useSelector((store)=>store);
    const cartItems=store.cart.items;
    it's less efficient bcz basically the store variable is subscribe to redux store,,whenever there is any change anywhere in the redux sture,will trigger re rendering of our cart component,

    better thing is to subscribe to the specific portion of store

*/ 

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center w-[100%]">
            <h1 className="bg-[rgb(123,68,225)] shadow-xl shadow-black w-[100%] text-white text-2xl font-bold h-20 " >Cart</h1>
            {cartItems.length===0?<h1 className="m-10"> your cart is empty,,don't u r hungry rn?</h1>:
            (<div className="w-6/12 m-auto">
                <button className="btncss m-10 text-center" onClick={handleClearCart}>Clear Cart</button>
                <ItemList items={cartItems}/>
            </div>)}
        </div>
    )
}

export default Cart;