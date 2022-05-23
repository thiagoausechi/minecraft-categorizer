import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Category } from "../../lib/Categories.type";
import { getAllIDs, sortById } from "../../lib/MinecraftItems";
import { NAME as CATEGORIES } from "./categoriesSlice";

interface UncategorizedState
{
    value: string[]
    version: string
}

export const NAME = "uncategorized";

const initialState: UncategorizedState =
{
    // TODO Place this in another location
    value: JSON.parse(localStorage.getItem(NAME) || "null") || [],
    version: JSON.parse(localStorage.getItem('mc-version') || "null") || "1.18"
}

export const uncategorizedSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload }: PayloadAction<string | string[]>) =>
        { state.value = setItem(NAME, sortById([...state.value, ...payload])) },

        remove: (state, { payload }: PayloadAction<string>) =>
        { state.value = setItem(NAME, state.value.filter(i => i !== payload)) },

        update: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = setItem(NAME, sortById(payload)) },

        fill: (state) =>
        {
            const categories: { [key: string]: Category } = JSON.parse(localStorage.getItem(CATEGORIES) || "{}");
            const categorized: string[] = [];

            Object.keys(categories).forEach(key => categories[key].items.forEach(item => categorized.push(item)));

            state.value = setItem(NAME, sortById(getAllIDs().filter(i => !categorized.includes(i))))
        }
    }
});

// TODO Place this in another location
const setItem = (key: string, data: any) =>
{
    localStorage.setItem(key, JSON.stringify(data));
    return data;
}

export const { add, remove, update, fill } = uncategorizedSlice.actions
export const selectUncategorized = (state: RootState) => state.uncategorized.value
export default uncategorizedSlice.reducer
