import { Category } from "../../../lib/CategoriesType";
import { getItemById } from "../../../lib/MinecraftItems";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import ItemsList from "../ItemsList";
import Card from "./Card";

interface Props
{
    category: Category,
    openModal: any
}

const CategoryCard: React.FC<Props> = (props) => 
{
    const { id, icon, items } = props.category;
    return (
        <Card>
            <Card.TabHolder>
                <Card.Tab>
                    <ItemIcon texture={getItemById(icon).texture} name={id} size={50} inSlot={false} />
                </Card.Tab>
            </Card.TabHolder>
            <GuiPanel title={id}>
                <ItemsList list={items} />
            </GuiPanel>
        </Card>
    );
}

export default CategoryCard;