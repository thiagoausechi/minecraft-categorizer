import styled from "styled-components";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import useLocalStorage from "../lib/useLocalStorage.hook";

import { Category } from "../lib/Categories.type";
import { sortById } from "../lib/MinecraftItems";
import { PresetType } from "../lib/presets";

import CategoriesSection from "../components/containers/CategoriesSection";
import ItemsSection from "../components/containers/ItemsSection";
import PresetsSection from "../components/containers/PresetsSection";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 550px)
  {}

  @media screen and (max-width: 1023px)
  {
    flex-direction: column;
  }
`

const RightColumn = styled.aside`
  position: sticky;
  top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

const App = () =>
{
  console.log("========================================");

  const [uncategorized, setUncategorized] = useLocalStorage<string[]>("uncategorized", [])
  const [categories, setCategories] = useLocalStorage<{ [key: string]: Category }>("categories", {})
  const [order, setCategoriesOrder] = useLocalStorage<string[]>("order", [])

  const updateUncategorized = (list: string[]) => setUncategorized(sortById(list));
  const refundToUncategorized = (item: string | string[]) => setUncategorized(prev => ([...prev, ...item]));

  // TODO Put this in a Handler file
  const addCategory = (id: string, c: Category, addLast = false) =>
  {
    setCategories(prev => ({ ...prev, [id]: c }));
    setCategoriesOrder(prev => addLast ? [...prev, id] : [id, ...prev]);
  }

  const modifyCategory = (id: string, c: Category) => setCategories(prev => ({ ...prev, [id]: c }));

  const updateCategoryItems = (category: string, items: string[]) =>
    setCategories(prev =>
    {
      console.log(`updateCategoryItems (${category})`, prev[category].items, items);

      return { ...prev, [category]: { ...prev[category], items: items } }
    });

  const addItemToCategory = (item: string, category: string) =>
    setCategories(prev =>
    {
      console.log(`addItemToCategory (${category})`, prev[category].items, item);
      return { ...prev, [category]: { ...prev[category], items: sortById([...prev[category].items, item]) } }
    });


  const removeCategory = (id: string) =>
  {
    const { [id]: removed, ...newList } = categories;

    refundToUncategorized([...removed.items]);
    setCategories(newList);
    setCategoriesOrder(order.filter(key => key !== id));
  }

  const applyPreset = (preset: PresetType) =>
  {
    updateUncategorized(preset.uncategorized);
    setCategories(preset.categories);
    setCategoriesOrder(preset.categories_order);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <CategoriesSection
          categories={categories}
          order={order}
          handlers={{
            addCategory,
            modifyCategory,
            updateCategoryItems,
            addItemToCategory,
            removeCategory,
            setCategoriesOrder
          }}
        />
        <aside>
          <RightColumn>
            <ItemsSection items={uncategorized} updateList={updateUncategorized} refund={refundToUncategorized} />
            <PresetsSection handler={applyPreset} />
          </RightColumn>
        </aside>
      </Wrapper>
    </DndProvider>
  );
}

export default App;