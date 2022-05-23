import styled from "styled-components";

import { PRESETS } from "../../../lib/presets";
import GuiPanel from "../../layout/GuiPanel";

import PresetButtom from "./PresetButtom";

const PresetsSection: React.FC = () => 
{
    return (
        <GuiPanel title="Presets" >
            <Wrapper>
                <ButtonsGrid>
                    {PRESETS.map((preset) =>
                        <PresetButtom key={preset.name} preset={preset} />)}
                </ButtonsGrid>
            </Wrapper>
        </GuiPanel>
    );
}

const Wrapper = styled.div`
  width: max(20vw, 400px);

  @media screen and (max-width: 1023px)
  {
    width: 510px;
  }

  @media screen and (max-width: 600px)
  {
    width: 85vw;
  }
`

// TODO Remove this from here
const ButtonsGrid = styled.div`
    display: grid;
    width: fit-content;

    grid-template-columns: auto auto auto auto;
    gap: 5px
`

export default PresetsSection;