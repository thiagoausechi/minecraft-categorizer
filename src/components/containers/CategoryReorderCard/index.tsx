import styled from "styled-components";

import { Category } from "../../../lib/Categories.type";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";
import { getItemById } from "../../../lib/MinecraftItems";
import { arrange } from "../../../store/slices/orderSlice";
import Button from "../../layout/Button";
import Clickable from "../../layout/Clickable";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import Wrapper from "./Wrapper";

interface Props
{
    category: Category
    index: number
    openEditModal: (c: Category) => void
}

const CategoryReorderCard: React.FC<Props> = (props) => 
{
    const dispatch = useAppDispatch();
    const order = useAppSelector(state => state.order.value)
    const { index, category: { name, icon, items }, openEditModal } = props;

    const editCategory = () => openEditModal(props.category);

    const moveUp = () => dispatch(arrange({ from: index, to: index - 1 }));
    const moveDown = () => dispatch(arrange({ from: index, to: index + 1 }));

    return (
        <GuiPanel fullWidth>
            <Wrapper>
                <ArrowsWrapper>
                    <UpArrow>
                        {index === 0 ? null :
                            <Button title="🔼" onClick={moveUp} />
                        }
                    </UpArrow>
                    <DownArrow>
                        {index === order.length - 1 ? null :
                            <Button title="🔽" onClick={moveDown} />
                        }
                    </DownArrow>
                </ArrowsWrapper>

                <Clickable onClick={editCategory}>
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

const ArrowsWrapper = styled.div``

const UpArrow = styled.div``

const DownArrow = styled.div``

const ItemsCount = styled.div`
    flex-grow: 1;
    text-align: end;

    @media screen and (max-width: 600px)
    {
        display: none;
    }
`

export default CategoryReorderCard;