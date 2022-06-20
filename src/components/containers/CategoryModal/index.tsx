import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { CategoryType } from "../../../lib/Categories.type";
import { getItemById, ItemType } from "../../../lib/MinecraftItems";

import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import ItemFrameButton from "../../layout/ItemFrameButton";
import Button from "../../layout/Button";
import Textbox from "../../layout/Textbox";
import Checkbox from "../../layout/Checkbox";
import { add as addCategory, remove as removeCategory, update as updateCategory } from "../../../store/slices/categoriesSlice";
import { add as addToOrder, remove as removeFromOrder } from "../../../store/slices/orderSlice";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { add as refund } from "../../../store/slices/uncategorizedSlice";

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

    return (
        <Wrapper>
            <h2>{modifing ? "Modifing" : "Creating"} a Category</h2>

            <ModalSection>
                <h3>Choose the Name</h3>
                <Textbox
                    type="text"
                    value={categoryName}
                    error={error}
                    onChange={updateCategoryName}
                />
            </ModalSection>

            <ModalSection>
                <h3>Choose an Icon</h3>
                <GuiPanel>
                    <ItemIcon texture={selectedIcon.texture} name={selectedIcon.name} size={50} inSlot={false} />
                </GuiPanel>

                <Textbox
                    type="text"
                    placeholder="minecraft:"
                    value={searchText}
                    onChange={updateSearchText}
                    onKeyDown={locateItem}
                />

                <ButtonsGrid>
                    {IconsPreset.map(preset => <ItemButton
                        key={preset}
                        item={getItemById(`minecraft:${preset}`)}
                        setIcon={setItemAsIcon}
                    />)}
                </ButtonsGrid>
            </ModalSection>

            <ModalSection>
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
            </ModalSection>

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

// TODO Remove this from here
const IconsPreset = [
    "barrier", "grass_block", "bricks", "peony",
    "redstone", "powered_rail", "lava_bucket", "apple",
    "iron_axe", "golden_sword", "potion", "stick"

]
const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 20px;

    width: 340px;
    height: 80vh;

    overflow: auto;

    h2
    {
        margin-block-start: 7px;
        margin-block-end: 7px;
    }

    @media screen and (max-width: 1075px)
    {
    }
`

const ModalSection = styled.div`
    width: fit-content;

    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 14px;

    h3
    {
        border-bottom: 2px solid #404040;
        margin-block: 0px;
    }
`

// TODO Remove this from here
const ButtonsGrid = styled.div`
    display: grid;
    width: fit-content;

    grid-template-columns: auto auto auto auto;
    gap: 5px
`

// TODO Remove this from here
const ItemButton: React.FC<{ item: ItemType, setIcon: Function }> = ({ item, setIcon }) => 
{
    return (
        <ItemFrameButton onClick={() => setIcon(item)}>
            <ItemIcon texture={item.texture} name={item.name} size={30} inSlot={false} />
        </ItemFrameButton>
    );
}

export default CategoryModal;