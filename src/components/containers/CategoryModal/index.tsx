import { useState } from "react";
import { Category } from "../../../lib/CategoriesType";
import { getItemById, getItemsAsOptions, Options } from "../../../lib/MinecraftItems";

import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import Selection from "../../layout/Selection";

interface Props
{
    openedCategory: Category | {} | null,
    handleCloseModal: any
}

const CategoryModal: React.FC<Props> = ({ openedCategory, handleCloseModal }) =>
{
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
    const icon = selectedIcon ? getItemById(selectedIcon) : { texture: null, name: null }

    return (
        <div style={{ width: "80vw", height: "60vh" }}>
            <h3>New Category</h3>
            <div style={{ display: "flex" }}>
                <GuiPanel>
                    <ItemIcon texture={icon.texture} name={icon.name} size={50} inSlot={false} />
                </GuiPanel>
                <Selection
                    value={"Hi"}
                    options={getItemsAsOptions()}
                    onChange={(e: { value: any }) => { setSelectedIcon(e.value) }}
                />
            </div>
        </div>
    );
}

export default CategoryModal;