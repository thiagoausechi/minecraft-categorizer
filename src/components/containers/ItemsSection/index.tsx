import { ChangeEvent, useState } from "react";

import GuiPanel from "../../layout/GuiPanel";
import Top from "../CategoriesSection/Top";
import Textbox from "../../layout/Textbox";
import ItemsList from "../ItemsList";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";
import { add, remove } from "../../../store/slices/uncategorizedSlice";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import styled from "styled-components";
import { AppPanelsWidth } from "../../GlobalStyle";

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
          <Textbox type="text" value={searchText} placeholder="Search..." onChange={updateSearchText} />
        </Top>
        <ItemsList
          list={items}
          addItem={(item: string) => dispatch(add(item))}
          removeItem={(item: string) => dispatch(remove(item))}
          context={"uncategorized"}
          search={searchText}
        />
      </Wrapper>
    </GuiPanel>
  );
}

const Wrapper = styled.div`
  width: max(20vw, 400px);

  @media screen and (max-width: 1075px)
  {
    width: 510px;
  }

  @media screen and (max-width: 600px)
  {
    width: ${AppPanelsWidth};
  }
`

export default ItemsSection;