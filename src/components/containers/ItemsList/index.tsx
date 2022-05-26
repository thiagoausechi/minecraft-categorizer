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
    addItem: (item: string) => void
    removeItem: (item: string) => void
    search: string
};

const ItemsList: React.FC<Props> = ({ list, context, addItem, removeItem, search }) =>
{
    const [, dropRef] = useDrop<{ id: string, context: string }, unknown, unknown>(() =>
    ({
        accept: "ITEM",
        canDrop: (item) => item.context !== context,
        drop: ({ id }: { id: string }) => addItem(id)
    }));

    const filtered = consolidate(list).filter((e) =>
    {
        if (!search || search === "") return e;
        return filterItem(e, search) ? e : null;
    })

    return (
        <List ref={dropRef}>
            {filtered.map(item => <ItemSlot key={item.id} item={item} context={context} removeItem={removeItem} />)}
            {(search && search !== "") && filtered.length === 0 ? <NotFound /> : null}
            {list.length !== 0 ? null : (search && search !== "") ? null : <Slot />}
        </List>
    );
}

const NotFound = () => <h4>No items were found.</h4>;

export default ItemsList;