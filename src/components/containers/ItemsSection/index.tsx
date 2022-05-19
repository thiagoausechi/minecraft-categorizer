import GuiPanel from "../../layout/GuiPanel";
import ItemsList from "../ItemsList";

interface Props
{
    items: string[];
};

const ItemsSection: React.FC<Props> = ({ items }) => 
{
    return (
        <GuiPanel title="Items" min={"400px"} max={"20vw"} >
            <div>Search Bar</div>
            <ItemsList list={items} />
        </GuiPanel>
    );
}

export default ItemsSection;