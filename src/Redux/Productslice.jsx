import { createSlice } from "@reduxjs/toolkit";

export const STATUSES=Object.freeze({
    SUCCESS:'SUCCESS',
       ERROR:'error',
       Loading :'LOADING'
})


const productSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.SUCCESS,
        },
    reducers:{
        setProducts(state , action){
            state.data=action.payload;

        },

        setStatus(state , action){
            state.status=action.payload;
        }
    }
})

export const{setProducts , setStatus}=productSlice.actions;
export default  productSlice.reducer;



export function fetchProducts(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading));

        try { const res=await fetch("https://api.escuelajs.co/api/v1/products");
        const data=await res.json();
        console.log(data)
          dispatch(setProducts(data));
          dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}