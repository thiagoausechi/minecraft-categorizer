import styled from "styled-components";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CategoriesSection from "../components/containers/CategoriesSection";
import ItemsSection from "../components/containers/ItemsSection";
import PresetsSection from "../components/containers/PresetsSection";
import useWindowDimensions from "../lib/hooks/useWindowDimensions.hook";

const App = () =>
{
  const { width, height } = useWindowDimensions();
  return (
    <DndProvider backend={HTML5Backend}>
      <p style={{
        textAlign: "center",
        position: "fixed",
        top: "10px",
        left: "10px"
      }}
      >{width}x{height}</p>
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

  @media screen and (max-width: 1075px)
  {
    flex-direction: column;
  }
`

const RightColumn = styled.div`
  position: sticky;
  top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default App;