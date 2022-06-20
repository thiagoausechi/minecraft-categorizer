import { MouseEvent, useEffect, useState } from "react";
import { isMacOs } from "react-device-detect";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";

import { clear } from "../../../store/slices/selectedItemsSlice";
import { removeItems as removeItemsFrom } from "../../../store/slices/categoriesSlice";
import { remove as refund } from "../../../store/slices/uncategorizedSlice";

import { TypedObj } from "../../../lib/global.type";
import { DragItemType, DragStackType, ItemSlotProps } from "./type";

import Control from "./Control";
import Tooltiped from "../../layout/Tooltip/Tooltiped";
import ItemTooltip from "../../layout/Tooltip/ItemTooltip";
import ItemIcon from "../../layout/ItemIcon";
import Slot from "../../layout/Slot";

const ItemSlot: React.FC<ItemSlotProps> = ({ item, index, context, selectItem }) => 
{
    const dispatch = useAppDispatch();
    const selectedItems = useAppSelector(state => state.selectedItems.list);

    const [{ active, x, y }, setTooltip] = useState({ active: false, x: 0, y: 0 });

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

            const removed = {
                categories: {} as TypedObj<string[]>,
                uncategorized: [] as string[]
            };

            dragStack.forEach(({ context, id }) => context.reference ?
                (removed.categories[context.reference] ?
                    removed.categories[context.reference].push(id) : removed.categories[context.reference] = [id]) :
                (removed.uncategorized.push(id)))

            Object.keys(removed.categories).forEach(key =>
                dispatch(removeItemsFrom({ category: key, items: removed.categories[key] })));
            dispatch(refund(removed.uncategorized));
            dispatch(clear());

            (monitor.getDropResult() as { addItems: (item: string[]) => void })
                .addItems(dragStack.map(i => i.id));
        }
    }), [selectedItems]);

    const handleClick = (e: MouseEvent) => selectItem(index, isMacOs ? e.metaKey : e.ctrlKey, e.shiftKey);

    useEffect(() => 
    {
        preview(getEmptyImage(), {
            captureDraggingState: true
        })
    }, [preview]);

    return (
        <Tooltiped setTooltip={setTooltip}>
            <Control ref={dragRef} onClick={handleClick} >

                <div style={{ opacity: isDragging ? 0 : 1 }}>
                    <ItemIcon texture={item.texture} name={item.name} />
                    <ItemTooltip item={item} active={active} x={x} y={y} />
                </div>

                <Slot selected={!!selectedItems.find(i => i.id === item.id)} />
            </Control>
        </Tooltiped>
    );
}

export default ItemSlot;