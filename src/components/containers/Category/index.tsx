import { CategoryType } from "../../../lib/Categories.type";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { getItemById } from "../../../lib/MinecraftItems";
import { addItems } from "../../../store/slices/categoriesSlice";
import Clickable from "../../layout/Clickable";
import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import ItemsList from "../ItemsList";
import Card from "./Card";

interface Props
{
    category: CategoryType
    search: string
    openEditModal: (c: CategoryType) => void
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
                    context={{ origin: "CATEGORY", reference: id }}
                    addItems={(items: string[]) => dispatch(addItems({ category: props.category.id, items }))}
                    search={search}
                />
            </GuiPanel>
        </Card>
    );
}

export default CategoryCard;