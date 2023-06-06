import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:ProductSlice
    }
})

export default store