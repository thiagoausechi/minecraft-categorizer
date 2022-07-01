import { ChangeEvent, useState } from "react";
import { CategoryType } from "../../../lib/Categories.type";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";
import { consolidate } from "../../../lib/MinecraftItems";
import { CATEGORY_TIPS, filterCategory, filterItem } from "../../../lib/search";

import GuiPanel from "../../layout/GuiPanel";
import Wrapper from "./Wrapper";
import SearchBar from "../../layout/SearchBar";
import IconButtons from "./IconButtons";
import CategoryCard from "../CategoryCard";
import CategoryModal from "../CategoryModal";
import CategoryReorderCard from "../CategoryReorderCard";
import Modal from "../Modal";
import List from "./List";
import Top from "./Top";

import { isDevEnv } from "../../../lib/dev";
import { ReorderIcon } from "../../layout/ClickableIcons/ReorderIcon";
import { NewCategoryIcon } from "../../layout/ClickableIcons/NewCategoryIcon";
import { CopyToClipboardIcon } from "../../layout/ClickableIcons/CopyToClipboardIcon";
import { SavePresetIcon } from "../../layout/ClickableIcons/SavePresetIcon";
import Center from "../../layout/Center";

const CategoriesSection: React.FC = () => 
{
    const categories = useAppSelector(state => state.categories.value);
    const order = useAppSelector(state => state.order.value);

    const [searchText, setSearchText] = useState("");
    const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

    const [isReordering, setReordering] = useState(false);
    const toggleReordering = () => setReordering(!isReordering);

    const [activeCategory, setActiveCategory] = useState<CategoryType | {} | null>(null);
    const closeModal = () => setActiveCategory(null);
    const openModal = () => setActiveCategory({});
    const openEditModal = (c: CategoryType) => setActiveCategory(c);

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
                    <Top.Grow>
                        <SearchBar text={searchText} updateSearchText={updateSearchText} tips={CATEGORY_TIPS} />
                    </Top.Grow>
                    <IconButtons>
                        {!isDevEnv ? null :
                            <CopyToClipboardIcon data={{ categories, categories_order: order }} />
                        }
                        <SavePresetIcon />
                        <ReorderIcon activated={isReordering} onClick={toggleReordering} />
                        <NewCategoryIcon activated={!!activeCategory} onClick={openModal} />
                    </IconButtons>
                </Top>

                {isReordering ?
                    <List>
                        {order.length <= 1 ? <AlertMoreCategories /> :
                            <>
                                {order.map((key, index) =>
                                    <CategoryReorderCard
                                        key={key}
                                        index={index}
                                        category={categories[key]}
                                        openEditModal={openEditModal}
                                    />
                                )}
                                <Center>
                                    <h3>Total of {order.length} categories</h3>
                                </Center>
                            </>
                        }
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

                <Modal isOpen={!!activeCategory} onClose={closeModal}>
                    <CategoryModal openedCategory={activeCategory} closeModal={closeModal} />
                </Modal>
            </Wrapper>
        </GuiPanel>
    );
}

const AlertAddCategories = () => <h4>You can start by creating new categories!</h4>;
const AlertMoreCategories = () => <h4>You need to add more categories!</h4>;

export default CategoriesSection;