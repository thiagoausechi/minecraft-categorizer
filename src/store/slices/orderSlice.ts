import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface OrderState
{
    value: string[]
}

export const NAME = "order";

const initialState: OrderState =
{
    // TODO Place this in another location
    value: JSON.parse(localStorage.getItem(NAME) || "null") || []
}

export const orderSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload: { id, addLast } }: PayloadAction<{ id: string, addLast: boolean }>) =>
        { state.value = setItem(NAME, addLast ? [...state.value, id] : [id, ...state.value]) },

        remove: (state, { payload }: PayloadAction<string>) =>
        { state.value = setItem(NAME, state.value.filter(i => i !== payload)) },

        arrange: (state, { payload: { from, to } }: PayloadAction<{ from: number, to: number }>) =>
        {
            const value = [...state.value];
            const item = value.splice(from, 1);
            value.splice(to, 0, item[0]);
            state.value = setItem(NAME, value);
        },

        update: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = setItem(NAME, payload) }
    }
});

// TODO Place this in another location
const setItem = (key: string, data: any) =>
{
    localStorage.setItem(key, JSON.stringify(data));
    return data;
}

export const { add, remove, arrange, update } = orderSlice.actions
export const selectOrder = (state: RootState) => state.order.value
export default orderSlice.reducer