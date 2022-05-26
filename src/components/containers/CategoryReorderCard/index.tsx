import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier } from "dnd-core";

import { Category } from "../../../lib/Categories.type";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { getItemById } from "../../../lib/MinecraftItems";
import { arrange } from "../../../store/slices/orderSlice";

import Clickable from "../../layout/Clickable";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import Wrapper from "./Wrapper";
import ItemsCount from "./ItemsCount";

interface Props
{
    category: Category
    index: number
    openEditModal: (c: Category) => void
}

const CategoryReorderCard: React.FC<Props> = (props) => 
{
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const { index, category: { id, name, icon, items }, openEditModal } = props;

    const [{ handlerId }, drop] = useDrop<
        { index: number, id: string, type: string },
        void,
        { handlerId: Identifier | null }
    >({
        accept: "CATEGORY",
        collect: (monitor) => ({ handlerId: monitor.getHandlerId() }),
        hover: (item) => 
        {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;

            dispatch(arrange({ from: dragIndex, to: hoverIndex }));
            item.index = hoverIndex;
        }
    });

    const [, drag] = useDrag({
        type: "CATEGORY",
        item: () => ({ id, index })
    });

    drag(drop(ref));

    return (
        <GuiPanel fullWidth>
            <Wrapper ref={ref} data-handler-id={handlerId}>
                <Clickable onClick={() => openEditModal(props.category)}>
                    <GuiPanel>
                        <ItemIcon texture={getItemById(icon).texture} name={name} size={30} inSlot={false} />
                    </GuiPanel>
                </Clickable>

                <h3>{name}</h3>
                <ItemsCount>
                    <h3>{items.length} Items</h3>
                </ItemsCount>
            </Wrapper>
        </GuiPanel>
    );
}

export default CategoryReorderCard;