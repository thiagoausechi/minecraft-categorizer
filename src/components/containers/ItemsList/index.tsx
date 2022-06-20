import { useDrop } from "react-dnd";

import { ItemsListProps } from "./type";
import { DragItemType } from "../ItemSlot/type";

import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { update as updateSelectedItems } from "../../../store/slices/selectedItemsSlice";

import { consolidate } from "../../../lib/MinecraftItems";
import { filterItem } from "../../../lib/search";

import List from "./List";
import ItemSlot from "../ItemSlot";
import Slot from "../../layout/Slot";

const ItemsList: React.FC<ItemsListProps> = ({ list, context, addItems, search }) =>
{
    const dispatch = useAppDispatch();

    const [, dropRef] = useDrop<DragItemType, unknown, unknown>(() =>
    ({
        accept: "ITEM",
        canDrop: (item) => item.dragStack.findIndex(i => i.context === context) === -1,
        drop: () => ({ addItems })
    }));

    const filtered = consolidate(list).filter((e) =>
    {
        if (!search || search === "") return e;
        return filterItem(e, search) ? e : null;
    });

    const handleItemSelection = (index: number, cmdkey: boolean, shiftKey: boolean) => 
    {
        dispatch(updateSelectedItems({
            context,
            list: filtered,
            index,
            cmdkey, shiftKey
        }));
    }

    return (
        <List ref={dropRef}>
            {filtered.map((item, index) =>
                <ItemSlot
                    key={item.id}
                    item={item}
                    index={index}
                    context={context}
                    selectItem={handleItemSelection}
                />)}
            {(search && search !== "") && filtered.length === 0 ? <NotFound /> : null}
            {list.length !== 0 ? null : (search && search !== "") ? null : <Slot />}
        </List>
    );
}

const NotFound = () => <h4>No items were found.</h4>;

export default ItemsList;