import { ChangeEvent, useState } from "react";

import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";
import { add } from "../../../store/slices/uncategorizedSlice";

import GuiPanel from "../../layout/GuiPanel";
import Wrapper from "./Wrapper";
import Top from "../CategoriesSection/Top";
import ItemsList from "../ItemsList";
import SearchBar from "../../layout/SearchBar";
import { ITEM_TIPS } from "../../../lib/search";

const ItemsSection: React.FC = () => 
{
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.uncategorized.value);

  const [searchText, setSearchText] = useState("");
  const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

  return (
    <GuiPanel title="Items" >
      <Wrapper>
        <Top>
          <SearchBar text={searchText} updateSearchText={updateSearchText} tips={ITEM_TIPS} />
        </Top>
        <ItemsList
          list={items}
          addItems={(items: string[]) => dispatch(add(items))}
          context={{ origin: "UNCATEGORIZED" }}
          search={searchText}
        />
      </Wrapper>
    </GuiPanel>
  );
}

export default ItemsSection;