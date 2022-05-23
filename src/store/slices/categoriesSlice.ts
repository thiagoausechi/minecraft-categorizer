import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Category } from "../../lib/Categories.type";
import { sortById } from "../../lib/MinecraftItems";

interface CategoriesState
{
    value: { [key: string]: Category };
}

export const NAME = "categories";

const initialState: CategoriesState =
{
    // TODO Place this in another location
    value: JSON.parse(localStorage.getItem(NAME) || "null") || {}
}

export const categoriesSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload }: PayloadAction<Category>) =>
        { state.value[payload.id] = payload; setItem(NAME, state.value); },

        remove: (state, { payload }: PayloadAction<Category>) =>
        { const { [payload.id]: removed, ...newList } = state.value; state.value = newList; setItem(NAME, state.value); },

        update: (state, { payload }: PayloadAction<Category>) =>
        { state.value[payload.id] = payload; setItem(NAME, state.value); },

        set: (state, { payload }: PayloadAction<{ [key: string]: Category }>) =>
        { state.value = setItem(NAME, payload); },

        addItem: (state, { payload: { category, item } }: PayloadAction<{ category: Category, item: string }>) =>
        { state.value[category.id].items = sortById([...state.value[category.id].items, item]); setItem(NAME, state.value); },

        removeItem: (state, { payload: { category, item } }: PayloadAction<{ category: Category, item: string }>) =>
        { state.value[category.id].items = state.value[category.id].items.filter(i => i !== item); setItem(NAME, state.value); },

        updateItems: (state, { payload: { category, items } }: PayloadAction<{ category: Category, items: string[] }>) =>
        { state.value[category.id].items = sortById(items); setItem(NAME, state.value); },
    }
});

// TODO Place this in another location
const setItem = (key: string, data: any) =>
{
    localStorage.setItem(key, JSON.stringify(data));
    return data;
}

export const { add, remove, update, set, addItem, removeItem, updateItems } = categoriesSlice.actions
export const selectCategories = (state: RootState) => state.categories.value
export default categoriesSlice.reducer