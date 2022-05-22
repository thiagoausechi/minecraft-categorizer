import styled from "styled-components";

import { Category } from "../../../lib/Categories.type";
import { getItemById } from "../../../lib/MinecraftItems";
import Button from "../../layout/Button";
import Clickable from "../../layout/Clickable";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import Wrapper from "./Wrapper";

interface Props
{
    category: Category
    index: number
    order: string[]
    handlers:
    {
        setCategoriesOrder: Function
        openEditModal: (c: Category) => void
    }
}

const CategoryReorderCard: React.FC<Props> = (props) => 
{
    const { index, order, category, handlers } = props;
    const { name, icon } = category;

    const editCategory = () => props.handlers.openEditModal(props.category);

    const moveUp = () => handlers.setCategoriesOrder(arrange(index, index - 1))
    const moveDown = () => handlers.setCategoriesOrder(arrange(index, index + 1))
    const arrange = (from: number, to: number, arr = [...order]) =>
    {
        const item = arr.splice(from, 1);
        arr.splice(to, 0, item[0]);
        return arr;
    };

    return (
        <GuiPanel>
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
                    <GuiPanel fitContent>
                        <ItemIcon texture={getItemById(icon).texture} name={name} size={50} inSlot={false} />
                    </GuiPanel>
                </Clickable>

                <h3>{name}</h3>
            </Wrapper>
        </GuiPanel>
    );
}

const ArrowsWrapper = styled.div``

const UpArrow = styled.div``

const DownArrow = styled.div``

export default CategoryReorderCard;