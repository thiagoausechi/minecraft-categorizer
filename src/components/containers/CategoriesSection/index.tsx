import { ChangeEvent, useState } from "react";
import { Category } from "../../../lib/Categories.type";
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

interface Props
{
    categories: { [key: string]: Category }
    order: string[]
    handlers: {
        addCategory: (id: string, c: Category, addLast: boolean) => void
        modifyCategory: (id: string, c: Category) => void
        updateCategoryItems: (id: string, items: string[]) => void
        addItemToCategory: (item: string, category: string) => void
        removeCategory: (id: string) => void
        setCategoriesOrder: Function
    }
};

const CategoriesSection: React.FC<Props> = ({ categories, order, handlers }) => 
{
    const [searchText, setSearchText] = useState("");
    const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

    const [isReordering, setReordering] = useState(false);
    const toggleReordering = () => setReordering(!isReordering);

    const [activeCategory, setActiveCategory] = useState<Category | {} | null>(null);
    const closeModal = () => setActiveCategory(null);
    const openModal = () => setActiveCategory({});
    const openEditModal = (_: Category) => setActiveCategory(_);

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
        <GuiPanel title="Categories" min={"510px"} max={"50vw"} >
            <Top>
                <div>
                    <Textbox type="text" value={searchText} placeholder="Search..." onChange={updateSearchText} />
                </div>
                <div>
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
                                order={order}
                                category={categories[key]}
                                handlers={{ ...handlers, openEditModal }}
                            />)}
                </List>
                :
                <List>
                    {filteredOrder.map(key =>
                        <CategoryCard
                            key={key}
                            category={categories[key]}
                            search={searchText.charAt(0) !== ">" ? searchText : ""}
                            handlers={{ ...handlers, openEditModal }}
                        />)
                    }
                    {order.length > 0 ? null : <AlertAddCategories />}
                </List>
            }

            <Modal
                isOpen={!!activeCategory}
                onClose={closeModal}
                content={<CategoryModal openedCategory={activeCategory} handlers={{ ...handlers, closeModal }} />}
            />
        </GuiPanel>
    );
}

const AlertAddCategories = () => <h4>You can start by creating new categories!</h4>;
const AlertMoreCategories = () => <h4>You need to add more categories!</h4>;

export default CategoriesSection;