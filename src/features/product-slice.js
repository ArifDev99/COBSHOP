import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts=createAsyncThunk('products/fetchAll',async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    return await response.json();
})
// async function getAllProducts(){
//     const response= await fetch('https://fakestoreapi.com/products')
//     const result= await response.json()
//     setProducts(result)
// }; 
const productsSlice=createSlice({
    name:"products",
    initialState:{
        value:[],
        loading:false
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.value=action.payload
            state.loading=false
        })
    }
})

export default productsSlice.reducer