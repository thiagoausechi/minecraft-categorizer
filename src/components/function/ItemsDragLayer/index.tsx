import { useDragLayer } from "react-dnd";

import { consolidate } from "../../../lib/MinecraftItems";
import { DragItemType } from "../../containers/ItemSlot/type";

import Overlay from "./Overlay";
import StackPreview from "./StackPreview";
import ItemPreview from "./ItemPreview";
import ItemIcon from "../../layout/ItemIcon";
import StackSize from "./StackSize";

const ItemsDragLayer: React.FC = () => 
{
    const { itemType, item, currentOffset } = useDragLayer(monitor => ({
        item: (monitor.getItem() as DragItemType),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    }));

    return itemType !== "ITEM" ? null :
        <Overlay>
            <StackPreview currentOffset={currentOffset}>
                {
                    consolidate(item.dragStack.slice(0, 3).map(i => i.id)).map((i, index) =>
                    (
                        <ItemPreview key={i.id} index={item.dragStack.length - index} position={index}>
                            <ItemIcon texture={i.texture} name={i.name} />
                        </ItemPreview>
                    ))
                }
                {item.dragStack.length < 4 ? null :
                    renderStackSize(item.dragStack.length)
                }
            </StackPreview>
        </Overlay>
}

const renderStackSize = (size: number) => <StackSize index={size + 1}>+{size - 3}</StackSize>;

export default ItemsDragLayer;