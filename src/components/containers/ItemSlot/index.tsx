import { MouseEvent, useEffect } from "react";
import { isMacOs } from "react-device-detect";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";

import { clear, removeItemsFromContext } from "../../../store/slices/selectedItemsSlice";

import { DragItemType, DragStackType, ItemSlotProps } from "./type";

import Control from "./Control";
import Tooltiped from "../../layout/Tooltip/Tooltiped";
import ItemTooltip from "../../layout/Tooltip/ItemTooltip";
import ItemIcon from "../../layout/ItemIcon";
import Slot from "../../layout/Slot";
import useTooltip from "../../../lib/hooks/useTooltip.hook";

const ItemSlot: React.FC<ItemSlotProps> = ({ item, index, context, selectItem }) => 
{
    const [{ active, x, y }, setTooltip] = useTooltip();

    const dispatch = useAppDispatch();
    const selectedItems = useAppSelector(state => state.selectedItems.list);
    const checkedItems = useAppSelector(state => state.checkedItems.value);

    const [{ isDragging }, dragRef, preview] = useDrag<DragItemType, unknown, { isDragging: boolean }>(() => ({
        type: "ITEM",
        item: () =>
        {
            const draggedItem = item.id;
            let preSelectedItems: DragStackType[];

            if (selectedItems.find(i => i.id === draggedItem)) preSelectedItems = selectedItems;
            else { preSelectedItems = [{ id: draggedItem, context }]; dispatch(clear()); }

            const otherItems = preSelectedItems.concat();
            otherItems.splice(preSelectedItems.findIndex(i => i.id === draggedItem), 1);

            return { draggedItem, dragStack: preSelectedItems }
        },
        isDragging: (monitor) => !!monitor.getItem().dragStack.find(i => i.id === item.id),
        collect: (monitor) => ({ isDragging: monitor.isDragging() }),
        end: ({ dragStack }, monitor) =>
        {
            if (!monitor.didDrop()) return;

            removeItemsFromContext(dragStack, dispatch);
            (monitor.getDropResult() as { addItems: (item: string[]) => void })
                .addItems(dragStack.map(i => i.id));
        }
    }), [selectedItems]);

    const handleClick = (e: MouseEvent) => 
    {
        selectItem(index, e.type, isMacOs ? e.metaKey : e.ctrlKey, e.shiftKey);
    }

    useEffect(() => 
    {
        preview(getEmptyImage(), {
            captureDraggingState: true
        })
    }, [preview]);

    const isSelected = !!selectedItems.find(i => i.id === item.id);

    return (
        <Tooltiped setTooltip={setTooltip}>
            <Control ref={dragRef} onClick={handleClick} onContextMenu={handleClick} >
                <div style={{ opacity: isDragging ? 0 : 1 }}>
                    <ItemIcon texture={item.texture} name={item.name} />
                    <ItemTooltip item={item} active={active} x={x} y={y} />
                </div>

                <Slot selected={isSelected} checked={checkedItems.includes(item.id)} empty={isSelected && isDragging} />
            </Control>
        </Tooltiped>
    );
}

export default ItemSlot;