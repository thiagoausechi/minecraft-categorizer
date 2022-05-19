import { consolidate } from "../../../lib/MinecraftItems";
import ItemSlot from "../ItemSlot";
import List from "./List";

interface Props
{
    list: string[]
};

const ItemsList: React.FC<Props> = ({ list }) =>
{
    return (
        <List>
            {consolidate(list).map(item => <ItemSlot key={item.id} item={item} />)}
        </List>
    );
}

export default ItemsList;