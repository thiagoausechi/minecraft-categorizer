import { Category } from "../../../lib/CategoriesType";
import { getItemById } from "../../../lib/MinecraftItems";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import Wrapper from "./Wrapper";

interface Props
{
    category: Category,
    openModal: any
}

const CategoryReorderCard: React.FC<Props> = (props) => 
{
    const { id, icon } = props.category;

    return (
        <GuiPanel>
            <Wrapper>
                <div>
                    |||
                </div>
                <GuiPanel>
                    <ItemIcon texture={getItemById(icon).texture} name={id} size={50} inSlot={false} />
                </GuiPanel>
                <h3>{id}</h3>
            </Wrapper>
        </GuiPanel>
    );
}

export default CategoryReorderCard;