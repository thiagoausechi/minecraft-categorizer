import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { Category } from "../../../lib/Categories.type";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";
import { consolidate } from "../../../lib/MinecraftItems";
import { filterCategory, filterItem } from "../../../lib/search";
import Button from "../../layout/Button";

import GuiPanel from "../../layout/GuiPanel";
import Textbox from "../../layout/Textbox";
import CategoryCard from "../Category";
import CategoryModal from "../CategoryModal";
import CategoryReorderCard from "../CategoryReorderCard";
import Modal from "../Modal";
import List from "./List";
import Top from "./Top";

const CategoriesSection: React.FC = () => 
{
    const categories = useAppSelector(state => state.categories.value);
    const order = useAppSelector(state => state.order.value);

    const [searchText, setSearchText] = useState("");
    const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

    const [isReordering, setReordering] = useState(false);
    const toggleReordering = () => setReordering(!isReordering);

    const [activeCategory, setActiveCategory] = useState<Category | {} | null>(null);
    const closeModal = () => setActiveCategory(null);
    const openModal = () => setActiveCategory({});
    const openEditModal = (c: Category) => setActiveCategory(c);

    // This part can be a little confusing, I know
    const filteredOrder = order.filter((e) =>
        // If there's no text on the search bar, return the category being filtered
        (!searchText || searchText === "") ? e :
            // Otherwise, check if the user is NOT searching by category name (using ">")
            (searchText.charAt(0) !== ">" && consolidate(categories[e].items)
                // Then, check if the item that the user is looking for is inside a category
                // if it's, return the category being filtered
                .filter(item => filterItem(item, searchText)).length > 0) ? e :
                // Finally, if it got here, it's because the user is looking for a category
                // searching by its name, if it's the case of the category being searched, 
                // then return it, otherwise, don't return anything
                (filterCategory(categories[e], searchText) ? e : null)
    );

    return (
        <GuiPanel title="Categories">
            <Wrapper>
                <Top>
                    <div style={{ flexGrow: 1 }}>
                        <Textbox type="text" value={searchText} placeholder="Search..." onChange={updateSearchText} />
                    </div>
                    <div className="buttons">
                        <Button title="Reorder" active={isReordering} onClick={toggleReordering} />
                        <Button title="New Category" onClick={openModal} />
                    </div>
                </Top>

                {isReordering ?
                    <List>
                        {order.length <= 1 ? <AlertMoreCategories /> :
                            order.map((key, index) =>
                                <CategoryReorderCard
                                    key={key}
                                    index={index}
                                    category={categories[key]}
                                    openEditModal={openEditModal}
                                />)}
                    </List>
                    :
                    <List>
                        {filteredOrder.map(key =>
                            <CategoryCard
                                key={key}
                                category={categories[key]}
                                search={searchText.charAt(0) !== ">" ? searchText : ""}
                                openEditModal={openEditModal}
                            />)
                        }
                        {order.length > 0 ? null : <AlertAddCategories />}
                    </List>
                }

                <Modal
                    isOpen={!!activeCategory}
                    onClose={closeModal}
                    content={<CategoryModal openedCategory={activeCategory} closeModal={closeModal} />}
                />
            </Wrapper>
        </GuiPanel>
    );
}

const Wrapper = styled.div`
    width: max(50vw, 510px);

    @media screen and (max-width: 600px)
    {
        width: max(90vw, 268px);

        .buttons
        {
            display: none;
        }
    }

`

const AlertAddCategories = () => <h4>You can start by creating new categories!</h4>;
const AlertMoreCategories = () => <h4>You need to add more categories!</h4>;

export default CategoriesSection;