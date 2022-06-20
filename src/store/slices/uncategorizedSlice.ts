import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CategoryType } from "../../lib/Categories.type";
import { TypedObj } from "../../lib/global.type";
import { getAllIDs, sortById } from "../../lib/MinecraftItems";
import { read, write } from "../local";
import { NAME as CATEGORIES } from "./categoriesSlice";

interface UncategorizedState
{
    value: string[]
    version: string
}

export const NAME = "uncategorized";

const initialState: UncategorizedState =
{
    value: read(NAME, []),
    version: read("mc-version", "")
}

export const uncategorizedSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload }: PayloadAction<string[]>) =>
        {
            const newItems: string[] = [];
            payload.forEach(item => !state.value.includes(item) ? newItems.push(item) : null);
            state.value = write(NAME, sortById([...state.value, ...newItems]))
        },

        remove: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = write(NAME, state.value.filter(i => !payload.includes(i))) },

        update: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = write(NAME, sortById(payload)) },

        fill: (state) =>
        {
            const categories: TypedObj<CategoryType> = JSON.parse(localStorage.getItem(CATEGORIES) || "{}");
            const categorized: string[] = [];

            Object.keys(categories).forEach(key => categories[key].items.forEach(item => categorized.push(item)));

            state.value = write(NAME, sortById(getAllIDs().filter(i => !categorized.includes(i))))
        },

        setVersion: (state, { payload }: PayloadAction<string>) =>
        { state.version = write("mc-version", payload) }
    }
});

export const { add, remove, update, fill, setVersion } = uncategorizedSlice.actions
export const selectUncategorized = (state: RootState) => state.uncategorized.value
export default uncategorizedSlice.reducer
