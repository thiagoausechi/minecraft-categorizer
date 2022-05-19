import { Item } from "../../../lib/MinecraftItems";
import ItemIcon from "../../layout/ItemIcon";
import Slot from "../../layout/Slot";
import Control from "./Control";

interface Props
{
    item?: Item | null
};

const ItemSlot: React.FC<Props> = ({ item }) => 
{
    return (
        <Control>
            {!item ? null : <ItemIcon texture={item.texture} name={item.name} />}
            <Slot />
        </Control>
    );
}

export default ItemSlot;