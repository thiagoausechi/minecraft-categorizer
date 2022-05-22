import { useDrop } from "react-dnd";
import { consolidate } from "../../../lib/MinecraftItems";
import { filterItem } from "../../../lib/search";
import Slot from "../../layout/Slot";
import ItemSlot from "../ItemSlot";
import List from "./List";

interface Props
{
    list: string[]
    context: string
    updateList: (list: string[]) => void
    addItem: (item: string) => void
    search: string
};

const ItemsList: React.FC<Props> = ({ list, context, updateList, addItem, search }) =>
{
    const [, dropRef] = useDrop<{ id: string, context: string }, unknown, unknown>(() =>
    ({
        accept: "ITEM",
        canDrop: (item, monitor) => item.context !== context,
        drop: ({ id }: { id: string }) => addItem(id)

    }));

    const removeItemFromList = (id: string) => updateList(list.filter(i => i !== id));

    const filtered = consolidate(list).filter((e) =>
    {
        if (!search || search === "") return e;
        return filterItem(e, search) ? e : null;
    })

    return (
        <List ref={dropRef}>
            {filtered.map(item => <ItemSlot key={item.id} item={item} context={context} removeItem={removeItemFromList} />)}
            {list.length !== 0 ? null : <Slot />}
        </List>
    );
}

export default ItemsList;