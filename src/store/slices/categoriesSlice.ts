import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { TypedObj } from "../../lib/global.type";
import { CategoryType } from "../../lib/Categories.type";
import { sortById } from "../../lib/MinecraftItems";
import { read, write } from "../local";

export const NAME = "categories";

export interface CategoriesState
{
    value: TypedObj<CategoryType>;
}

const initialState: CategoriesState =
{
    value: read(NAME, {})
}

export const categoriesSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload }: PayloadAction<CategoryType>) =>
        { state.value[payload.id] = payload; write(NAME, state.value); },

        remove: (state, { payload }: PayloadAction<CategoryType>) =>
        { const { [payload.id]: removed, ...newList } = state.value; state.value = newList; write(NAME, state.value); },

        update: (state, { payload }: PayloadAction<CategoryType>) =>
        { state.value[payload.id] = payload; write(NAME, state.value); },

        set: (state, { payload }: PayloadAction<TypedObj<CategoryType>>) =>
        { state.value = write(NAME, payload); },

        addItems: (state, { payload: { category, items } }: PayloadAction<{ category: string, items: string[] }>) =>
        {
            const newItems: string[] = [];
            items.forEach(item => !state.value[category].items.includes(item) ? newItems.push(item) : null);
            state.value[category].items = write(NAME, sortById([...state.value[category].items, ...newItems]));
        },

        removeItems: (state, { payload: { category, items } }: PayloadAction<{ category: string, items: string[] }>) =>
        { state.value[category].items = state.value[category].items.filter(i => !items.includes(i)); write(NAME, state.value); },

        updateItems: (state, { payload: { category, items } }: PayloadAction<{ category: CategoryType, items: string[] }>) =>
        { state.value[category.id].items = sortById(items); write(NAME, state.value); },
    }
});

export const { add, remove, update, set, addItems, removeItems, updateItems } = categoriesSlice.actions
export const selectCategories = (state: RootState) => state.categories.value
export default categoriesSlice.reducer