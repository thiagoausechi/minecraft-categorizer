import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { CategoryType } from "../../../lib/Categories.type";
import { getItemById, ItemType } from "../../../lib/MinecraftItems";

import { add as addCategory, remove as removeCategory, update as updateCategory } from "../../../store/slices/categoriesSlice";
import { add as addToOrder, remove as removeFromOrder } from "../../../store/slices/orderSlice";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { add as refund } from "../../../store/slices/uncategorizedSlice";

import GuiPanel from "../../layout/GuiPanel";
import Wrapper from "./Wrapper";
import Section from "./Section";
import ItemIcon from "../../layout/ItemIcon";
import ButtonsWrapper from "./ButtonsWrapper";
import Button from "../../layout/Button";
import Textbox from "../../layout/Textbox";
import Checkbox from "../../layout/Checkbox";
import ItemButton from "./ItemButton";

interface Props
{
    openedCategory: CategoryType | {} | null
    closeModal: () => void
}

const CategoryModal: React.FC<Props> = ({ openedCategory, closeModal }) =>
{
    const dispatch = useAppDispatch();
    const [modifing, setModifing] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const [addLast, setAddLast] = useState<boolean>(false);
    const toggleAddLast = () => setAddLast(!addLast);

    const [categoryName, setCategoryName] = useState<string>("");
    const updateCategoryName = (e: ChangeEvent<HTMLInputElement>) => 
    {
        if (error) setError(false);
        if (e.target.value === "") setError(true);
        setCategoryName(e.target.value);
    }

    const [selectedIcon, setSelectedIcon] = useState<ItemType>(getItemById("minecraft:barrier"));
    const setItemAsIcon = (item: ItemType) => { setSelectedIcon(item); setSearchText(item.id); }

    const [searchText, setSearchText] = useState<string>("");
    const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
    const locateItem = (e: KeyboardEvent) =>
        !(e.key === "Enter" && getItemById(searchText)) ? null :
            setSelectedIcon(getItemById(searchText));

    useEffect(() =>
    {
        if (openedCategory && Object.keys(openedCategory).length > 0 && !modifing)
        {
            setModifing(true);
            setCategoryName((openedCategory as CategoryType).name);
            setItemAsIcon(getItemById((openedCategory as CategoryType).icon));
        }
    }, [modifing, setModifing, openedCategory, setCategoryName]);

    const deleteCategory = () =>
    {
        dispatch(removeCategory((openedCategory as CategoryType)));
        dispatch(removeFromOrder((openedCategory as CategoryType).id));
        dispatch(refund((openedCategory as CategoryType).items));
        closeModal();
    }

    const handleSubmit = () =>
    {
        if (categoryName !== "")
        {
            const category =
            {
                id: !modifing ? uuidv4() : (openedCategory as CategoryType).id,
                name: categoryName,
                icon: selectedIcon.id,
                items: !modifing ? [] : (openedCategory as CategoryType).items
            }

            if (modifing) dispatch(updateCategory(category));
            else
            {
                dispatch(addCategory(category));
                dispatch(addToOrder({ id: category.id, addLast }));
            }
            closeModal();
        }
        else setError(true);
    };

    // TODO Refactor the sections piece
    return (
        <Wrapper>
            <h2>{modifing ? "Modifing" : "Creating"} a Category</h2>

            <Section>
                <h3>Choose the Name</h3>
                <Textbox
                    type="text"
                    value={categoryName}
                    error={error}
                    onChange={updateCategoryName}
                />
            </Section>

            <Section>
                <h3>Choose an Icon</h3>
                <GuiPanel>
                    <ItemIcon texture={selectedIcon.texture} name={selectedIcon.name} size={64} inSlot={false} />
                </GuiPanel>

                <Textbox
                    type="text"
                    placeholder="minecraft:"
                    value={searchText}
                    onChange={updateSearchText}
                    onKeyDown={locateItem}
                />

                <ButtonsWrapper.Grid>
                    {IconsPreset.map(preset =>
                        <ItemButton
                            key={preset}
                            item={getItemById(`minecraft:${preset}`)}
                            setIcon={setItemAsIcon}
                        />
                    )}
                </ButtonsWrapper.Grid>
            </Section>

            <Section>
                {modifing && openedCategory ?
                    <div>
                        {(openedCategory as CategoryType).items.length} Items
                    </div>
                    :
                    <Checkbox
                        label="Add at the end?"
                        checked={addLast}
                        onChange={toggleAddLast}
                    />
                }
            </Section>

            <ButtonsWrapper>
                <Button title="Back" onClick={closeModal} />
                <Button title={modifing ? "Save" : "Create"} onClick={handleSubmit} />
                {!modifing ? null :
                    <Button title="Delete" danger onClick={deleteCategory} />
                }
            </ButtonsWrapper>
        </Wrapper>
    );
}

const IconsPreset = [
    "barrier", "grass_block", "bricks", "peony",
    "redstone", "powered_rail", "lava_bucket", "apple",
    "iron_axe", "golden_sword", "potion", "stick"

]

export default CategoryModal;