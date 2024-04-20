import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice.jsx"
import productReducer from "./Productslice.jsx"

const store=configureStore({
    reducer:{
          cart:cartReducer,
          product:productReducer,
}
})

export default store;