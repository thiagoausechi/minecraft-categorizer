import styled from "styled-components";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CategoriesSection from "../components/containers/CategoriesSection";
import ItemsSection from "../components/containers/ItemsSection";
import PresetsSection from "../components/containers/PresetsSection";

const App = () =>
{
  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <CategoriesSection />
        <aside>
          <RightColumn>
            <ItemsSection />
            <PresetsSection />
          </RightColumn>
        </aside>
      </Wrapper>
    </DndProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 1023px)
  {
    flex-direction: column;
  }

  @media screen and (max-width: 600px)
  {}
`

const RightColumn = styled.aside`
  position: sticky;
  top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default App;