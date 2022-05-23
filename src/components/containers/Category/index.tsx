import { Category } from "../../../lib/Categories.type";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { getItemById } from "../../../lib/MinecraftItems";
import { addItem, removeItem } from "../../../store/slices/categoriesSlice";
import Clickable from "../../layout/Clickable";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import ItemsList from "../ItemsList";
import Card from "./Card";

interface Props
{
    category: Category
    search: string
    openEditModal: (c: Category) => void
}

const CategoryCard: React.FC<Props> = (props) => 
{
    const dispatch = useAppDispatch();
    const { category: { id, name, icon, items }, search, openEditModal } = props;

    return (
        <Card>
            <Card.TabHolder>
                <Clickable onClick={() => openEditModal(props.category)}>
                    <Card.Tab >
                        <ItemIcon texture={getItemById(icon).texture} name={name} size={50} inSlot={false} />
                    </Card.Tab>
                </Clickable>
            </Card.TabHolder>
            <GuiPanel title={name} fullWidth>
                <ItemsList
                    list={items}
                    context={id}
                    addItem={(item: string) => dispatch(addItem({ category: props.category, item }))}
                    removeItem={(item: string) => dispatch(removeItem({ category: props.category, item }))}
                    search={search}
                />
            </GuiPanel>
        </Card>
    );
}

export default CategoryCard;