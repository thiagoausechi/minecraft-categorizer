import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CheckUpdates from "../components/function/CheckUpdates";
import ItemsDragLayer from "../components/function/ItemsDragLayer";
import Wrapper from "../components/pages/App/Wrapper";
import CategoriesSection from "../components/containers/CategoriesSection";
import RightColumn from "../components/pages/App/RightColumn";
import ItemsSection from "../components/containers/ItemsSection";
import PresetsSection from "../components/containers/PresetsSection";

const App: React.FC = () =>
{
  return (
    <DndProvider backend={HTML5Backend}>
      <CheckUpdates />
      <ItemsDragLayer />
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

export default App;