import { configureStore } from "@reduxjs/toolkit";

import uncategorizedReducer from "./slices/uncategorizedSlice";
import categoriesReducer from "./slices/categoriesSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        uncategorized: uncategorizedReducer,
        categories: categoriesReducer,
        order: orderReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;