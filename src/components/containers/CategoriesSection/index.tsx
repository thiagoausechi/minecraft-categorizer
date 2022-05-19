import { useState } from "react";
import { Category } from "../../../lib/CategoriesType";

import GuiPanel from "../../layout/GuiPanel";
import CategoryCard from "../Category";
import CategoryModal from "../CategoryModal";
import CategoryReorderCard from "../CategoryReorderCard";
import Modal from "../Modal";
import List from "./List";

interface Props
{
    categories: { [key: string]: Category };
    order: string[]
};

const CategoriesSection: React.FC<Props> = ({ categories, order }) => 
{
    const [isReordering, setReordering] = useState(false);
    const toggleReordering = () => setReordering(!isReordering);

    const [activeCategory, setActiveCategory] = useState<Category | {} | null>(null);
    const closeModal = () => setActiveCategory(null);
    const openModal = () => setActiveCategory({});
    const openEditModal = (_: Category) => setActiveCategory(_);

    return (
        <GuiPanel title="Categories" min={"510px"} max={"50vw"} >
            <div style={{ textAlign: "end" }}>
                Search Bar |&nbsp;
                <a onClick={toggleReordering}>Reorder</a> |&nbsp;
                <a onClick={openModal}>New Category</a>
            </div>
            {isReordering ?
                <List>
                    {order.map(key => <CategoryReorderCard key={key} category={categories[key]} openModal={openEditModal} />)}
                </List>
                :
                <List>
                    {order.map(key => <CategoryCard key={key} category={categories[key]} openModal={openEditModal} />)}
                </List>
            }

            <Modal
                isOpen={!!activeCategory}
                onClose={closeModal}
                content={<CategoryModal openedCategory={activeCategory} handleCloseModal={closeModal} />}
            />
        </GuiPanel>
    );
}

export default CategoriesSection;