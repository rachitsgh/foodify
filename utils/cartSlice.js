import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    sliceName:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
//          this will modify the state on the basis of action
            state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0; //[]
            // state.items=[]  ---> this Will not work
        }
    },
});

//this createSlice functn return obj  ->
// {
//     actions;{
//         action
//     },
//     reducer
// }



//react-redux n reduxtoolkit gave us this syntax
export const {addItems,removeItems,clearCart}=cartSlice.actions;

export default cartSlice.reducer;