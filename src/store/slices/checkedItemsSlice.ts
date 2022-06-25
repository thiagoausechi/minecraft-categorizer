import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { read, write } from "../local";

interface CheckedItemsState
{
    value: string[]
}

export const NAME = "checked_items";

const initialState: CheckedItemsState =
{
    value: read(NAME, [])
}

export const checkedItemsSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload }: PayloadAction<string[]>) =>
        {
            const uncategorized = read("uncategorized", [] as string[]);
            const newItems: string[] = [];

            payload.forEach(item => !state.value.includes(item) && !uncategorized.includes(item) ? newItems.push(item) : null);
            state.value = write(NAME, [...state.value, ...newItems])
        },

        remove: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = write(NAME, state.value.filter(i => !payload.includes(i))) },

        update: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = write(NAME, payload) },

        clear: (state) =>
        { state.value = write(NAME, []) }
    }
});

export const { add, remove, update, clear } = checkedItemsSlice.actions
export const selectCheckedItems = (state: RootState) => state.checkedItems.value
export default checkedItemsSlice.reducer