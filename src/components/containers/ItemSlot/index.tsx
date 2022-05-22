import { useState } from "react";

import { Item } from "../../../lib/MinecraftItems";

import Control from "./Control";
import Tooltiped from "../../layout/Tooltip/Tooltiped";
import ItemTooltip from "../../layout/Tooltip/ItemTooltip";
import ItemIcon from "../../layout/ItemIcon";
import Slot from "../../layout/Slot";
import { DragPreviewImage, useDrag } from "react-dnd";

interface Props
{
    item: Item
    context: string
    removeItem: (id: string) => void
};

const ItemSlot: React.FC<Props> = ({ item, context, removeItem }) => 
{
    const [{ isDragging }, dragRef, preview] = useDrag<{ id: string, context: string }, unknown, { isDragging: boolean }>(() => ({
        type: "ITEM",
        item: { id: item.id, context: context },
        end: ({ id }, monitor) => monitor.didDrop() ? removeItem(id) : null,
        collect:
            (monitor) =>
            ({
                isDragging: monitor.isDragging()
            })
    }));

    const [{ active, x, y }, setTooltip] = useState({ active: false, x: 0, y: 0 });

    return (<>
        <Tooltiped setTooltip={setTooltip}>
            <Control ref={dragRef} >
                {isDragging ? null : <ItemIcon texture={item.texture} name={item.name} />}
                {isDragging ? null : <ItemTooltip item={item} active={active} x={x} y={y} />}
                <DragPreviewImage connect={preview} src={item.texture} />
                <Slot />
            </Control>
        </Tooltiped>

    </>
    );
}

export default ItemSlot;