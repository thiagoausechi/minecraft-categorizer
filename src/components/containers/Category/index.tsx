import { Category } from "../../../lib/Categories.type";
import { getItemById, sortById } from "../../../lib/MinecraftItems";
import Clickable from "../../layout/Clickable";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import ItemsList from "../ItemsList";
import Card from "./Card";

interface Props
{
    category: Category
    search: string
    handlers: {
        updateCategoryItems: (id: string, items: string[]) => void
        addItemToCategory: (item: string, category: string) => void
        openEditModal: (c: Category) => void
    }
}

const CategoryCard: React.FC<Props> = (props) => 
{
    const { id, name, icon, items } = props.category;
    const editCategory = () => props.handlers.openEditModal(props.category);

    const updateList = (list: string[]) => props.handlers.updateCategoryItems(id, sortById(list));
    const addItem = (item: string) => props.handlers.addItemToCategory(item, id);

    return (
        <Card>
            <Card.TabHolder>
                <Clickable onClick={editCategory}>
                    <Card.Tab >
                        <ItemIcon texture={getItemById(icon).texture} name={name} size={50} inSlot={false} />
                    </Card.Tab>
                </Clickable>
            </Card.TabHolder>
            <GuiPanel title={name}>
                <ItemsList list={items} context={id} updateList={updateList} addItem={addItem} search={props.search} />
            </GuiPanel>
        </Card>
    );
}

export default CategoryCard;