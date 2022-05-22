import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Category } from "../../../lib/Categories.type";
import { getItemById, getAllIDs, Item } from "../../../lib/MinecraftItems";

import GuiPanel from "../../layout/GuiPanel";
import ItemIcon from "../../layout/ItemIcon";
import ItemFrameButton from "../../layout/ItemFrameButton";
import Button from "../../layout/Button";
import Textbox from "../../layout/Textbox";
import Checkbox from "../../layout/Checkbox";

interface Props
{
    openedCategory: Category | {} | null,
    handlers: { [key: string]: Function },
}

const CategoryModal: React.FC<Props> = ({ openedCategory, handlers }) =>
{
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

    const [selectedIcon, setSelectedIcon] = useState<Item>(getItemById("minecraft:barrier"));
    const setItemAsIcon = (item: Item) => { setSelectedIcon(item); setSearchText(item.id); }

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
            setCategoryName((openedCategory as Category).name);
            setItemAsIcon(getItemById((openedCategory as Category).icon));
        }
    }, [modifing, setModifing, openedCategory, setCategoryName]);

    const deleteCategory = () =>
    {
        handlers.removeCategory((openedCategory as Category).id);
        handlers.closeModal()
    }

    const handleSubmit = () =>
    {
        if (categoryName !== "")
        {
            // I'm clueless about how this thing is working
            const getRandom = (array: any[]) =>
                Array.from(Array(Math.floor((Math.random() * 50))).keys())
                    .map(k => array[Math.floor((Math.random() * array.length))]);

            const category =
            {
                id: !modifing ? uuidv4() : (openedCategory as Category).id,
                name: categoryName,
                icon: selectedIcon.id,
                items: !modifing ? [...getRandom(getAllIDs())] : (openedCategory as Category).items
            }

            if (modifing)
                handlers.modifyCategory(category.id, category);
            else
                handlers.addCategory(category.id, category, addLast);
            handlers.closeModal();
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
                <GuiPanel fitContent>
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

            {modifing ? null :
                <ModalSection>
                    <Checkbox
                        label="Add at the end?"
                        checked={addLast}
                        onChange={toggleAddLast}
                    />
                </ModalSection>
            }

            <ButtonsWrapper>
                <Button title="Back" onClick={handlers.closeModal} />
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

// TODO Remove this from here
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

    width: 25vw;
    height: 80vh;

    overflow: auto;

    h2
    {
        margin-block-start: 7px;
        margin-block-end: 7px;
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
const ItemButton: React.FC<{ item: Item, setIcon: Function }> = ({ item, setIcon }) => 
{
    return (
        <ItemFrameButton onClick={() => setIcon(item)}>
            <ItemIcon texture={item.texture} name={item.name} size={30} inSlot={false} />
        </ItemFrameButton>
    );
}

export default CategoryModal;