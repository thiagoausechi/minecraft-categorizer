import { ItemType } from "../../../lib/MinecraftItems";

import ItemFrameButton from "../../layout/ItemFrameButton";
import ItemIcon from "../../layout/ItemIcon";

const ItemButton: React.FC<{ item: ItemType, setIcon: Function }> = ({ item, setIcon }) => 
{
    return (
        <ItemFrameButton onClick={() => setIcon(item)}>
            <ItemIcon texture={item.texture} name={item.name} size={30} inSlot={false} />
        </ItemFrameButton>
    );
}

export default ItemButton;