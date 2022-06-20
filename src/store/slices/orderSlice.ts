import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { read, write } from "../local";

interface OrderState
{
    value: string[]
}

export const NAME = "order";

const initialState: OrderState =
{
    value: read(NAME, [])
}

export const orderSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        add: (state, { payload: { id, addLast } }: PayloadAction<{ id: string, addLast: boolean }>) =>
        { state.value = write(NAME, addLast ? [...state.value, id] : [id, ...state.value]) },

        remove: (state, { payload }: PayloadAction<string>) =>
        { state.value = write(NAME, state.value.filter(i => i !== payload)) },

        arrange: (state, { payload: { from, to } }: PayloadAction<{ from: number, to: number }>) =>
        {
            const value = [...state.value];
            const item = value.splice(from, 1);
            value.splice(to, 0, item[0]);
            state.value = write(NAME, value);
        },

        update: (state, { payload }: PayloadAction<string[]>) =>
        { state.value = write(NAME, payload) }
    }
});

export const { add, remove, arrange, update } = orderSlice.actions
export const selectOrder = (state: RootState) => state.order.value
export default orderSlice.reducer