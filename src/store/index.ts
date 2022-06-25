import { configureStore } from "@reduxjs/toolkit";

import uncategorizedReducer from "./slices/uncategorizedSlice";
import categoriesReducer from "./slices/categoriesSlice";
import orderReducer from "./slices/orderSlice";
import selectedItemsReducer from "./slices/selectedItemsSlice";
import checkedItemsReducer from "./slices/checkedItemsSlice";

const store = configureStore({
    reducer: {
        uncategorized: uncategorizedReducer,
        categories: categoriesReducer,
        order: orderReducer,
        selectedItems: selectedItemsReducer,
        checkedItems: checkedItemsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;