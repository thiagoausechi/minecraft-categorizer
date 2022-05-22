import { ChangeEvent, useState } from "react";

import GuiPanel from "../../layout/GuiPanel";
import Top from "../CategoriesSection/Top";
import Textbox from "../../layout/Textbox";
import ItemsList from "../ItemsList";

interface Props
{
    items: string[]
    updateList: (list: string[]) => void
    refund: (item: string | string[]) => void
};

const ItemsSection: React.FC<Props> = ({ items, updateList, refund }) => 
{
    const [searchText, setSearchText] = useState("");
    const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

    return (
        <GuiPanel title="Items" min={"400px"} max={"20vw"} >
            <Top>
                <Textbox type="text" value={searchText} placeholder="Search..." onChange={updateSearchText} />
            </Top>
            <ItemsList list={items} context={"uncategorized"} updateList={updateList} addItem={refund} search={searchText} />
        </GuiPanel>
    );
}

export default ItemsSection;