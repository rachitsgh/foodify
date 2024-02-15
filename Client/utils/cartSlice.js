import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{

        // Redux is external library (keep in mind plz)
        // vanilla(older) redux --> DO NOT MUTATE THE STATE,,returning was kinda mandatory

        //Redux toolkit
        //We have to mutate the state---> returning is not mandatory  -> Redux take care of itself
        //either mutate the sxisting state or return the new state
        addItems:(state,action)=>{
//          this will modify the state on the basis of action
            state.items.push(action.payload)

            /* 
            how we used to do earlier
            Redux is still doing this behind the scene,,not asking developer to do it
            Redux uses immer library to do this
             const newState=[...state];
             newState.items.push(action.payload);
             return newState
            */
        },
        removeItems:(state,action)=>{
            state.items.pop();
        },
        //originalstate={items:["Pizza"]}
        clearCart:(state,action)=>{
            /*
            console.log(current(state));
            
            */



            state.items.length=0; //[],,originalstate=[]
            //or
            // return {items:[]}; --> this new [] will be replaced inside  originaState={items:[]}
            // state.items={items:[]} ---> this Will not work  -> bcz of immer --> bcz we are not mutating the state but adding the refrenceto it
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