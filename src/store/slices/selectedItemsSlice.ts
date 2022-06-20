import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

import { ContextType, DragStackType } from "../../components/containers/ItemSlot/type";
import { ItemType } from "../../lib/MinecraftItems";

export const NAME = "selected_items";

export interface SelectedItemsState
{
    list: DragStackType[]
    lastContext: {
        origin: string
        reference?: string
    }
    lastIndex: number
}

export interface UpdatePayload
{
    context: ContextType
    list: ItemType[]
    index: number
    cmdkey: boolean
    shiftKey: boolean
}

const initialState: SelectedItemsState =
{
    list: [],
    lastContext: { origin: "" },
    lastIndex: -1
}

export const selectedItemsSlice = createSlice({
    name: NAME,
    initialState,
    reducers:
    {
        clear: (state) =>
        {
            state.list = initialState.list;
            state.lastContext = initialState.lastContext;
            state.lastIndex = initialState.lastIndex;
        },

        update: (state, { payload: { context, list, index, cmdkey, shiftKey } }: PayloadAction<UpdatePayload>) =>
        {
            const { list: selectedItems, lastIndex, lastContext } = current(state);
            let newSelectedList = selectedItems.concat();
            const selected = index < 0 ? { id: "null", context: { origin: "" } as ContextType } : { id: list[index].id, context };

            if (!cmdkey && !shiftKey)
            {
                newSelectedList = [selected];
                if (selectedItems.length === 1 && selectedItems.find(i => i.id === selected.id)) newSelectedList = [];
            }

            else if (cmdkey)
            {
                if (!!selectedItems.find(i => i.id === selected.id))
                    newSelectedList = selectedItems.concat().filter(i => i.id !== selected.id);
                else newSelectedList.push(selected);
            }

            else if (lastContext === context && shiftKey)
            {
                const concat = (a: number, b: number) =>
                    ([] as { id: string; context: ContextType }[]).concat
                        .apply(selectedItems, list.slice(a, b).map(i => ({ id: i.id, context })));

                if (lastIndex >= index) newSelectedList = concat(index, lastIndex);
                else newSelectedList = concat(lastIndex + 1, index + 1);
            }

            state.list = newSelectedList;
            state.lastContext = context;
            state.lastIndex = index;
        }
    }
});

export const { clear, update } = selectedItemsSlice.actions
export const selectSelectedItems = (state: RootState) => state.selectedItems
export default selectedItemsSlice.reducer