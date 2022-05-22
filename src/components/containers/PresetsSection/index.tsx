import styled from "styled-components";

import { getItemById } from "../../../lib/MinecraftItems";
import { PRESETS, PresetType } from "../../../lib/presets";
import GuiPanel from "../../layout/GuiPanel";
import ItemFrameButton from "../../layout/ItemFrameButton";
import ItemIcon from "../../layout/ItemIcon";

interface Props
{
    handler: (preset: PresetType) => void
}

const PresetsSection: React.FC<Props> = ({ handler }) => 
{
    return (
        <GuiPanel title="Presets" min={"400px"} max={"20vw"} >
            <ButtonsGrid>
                {
                    PRESETS.map((preset) =>
                        <ItemFrameButton key={preset.name} onClick={() => handler(preset)}>
                            <ItemIcon texture={getItemById(preset.icon).texture} name={preset.name} size={30} inSlot={false} />
                        </ItemFrameButton>
                    )
                }
            </ButtonsGrid>
        </GuiPanel>
    );
}

// TODO Remove this from here
const ButtonsGrid = styled.div`
    display: grid;
    width: fit-content;

    grid-template-columns: auto auto auto auto;
    gap: 5px
`

export default PresetsSection;