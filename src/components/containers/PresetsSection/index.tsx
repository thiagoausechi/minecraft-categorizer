import { PRESETS } from "../../../lib/presets";
import GuiPanel from "../../layout/GuiPanel";

import PresetButtom from "./PresetButtom";
import Wrapper from "./Wrapper";

const PresetsSection: React.FC = () => 
{
  return (
    <GuiPanel title="Presets" >
      <Wrapper>
        {PRESETS.map((preset) =>
          <PresetButtom key={preset.name} preset={preset} />)}
      </Wrapper>
    </GuiPanel>
  );
}

export default PresetsSection;