import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        value:[]
    },
    reducers:{
        addToCart(state,action){
            // console.log(state.value);
            // console.log(action.payload.product.id);
            const itemindex=state.value.findIndex((i)=>action.payload.product.id===i.product.id)
            // let existed_item=state.value.find((i)=>console.log(current(i)))
            // console.log(itemindex);
            if(itemindex>=0){
                state.value[itemindex].quantity+=1
            }
            else{
                state.value.push(action.payload)
            }
        }
    }
})
export const {addToCart} =cartSlice.actions
export default cartSlice.reducer