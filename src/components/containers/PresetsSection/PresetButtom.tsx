import { useState } from "react";

import { PresetType } from "../../../lib/presets";
import { getItemById } from "../../../lib/MinecraftItems";

import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { fill as fillRemaining, update as updateUncategorized } from "../../../store/slices/uncategorizedSlice";
import { set as setCategories } from "../../../store/slices/categoriesSlice";
import { update as updateOrder } from "../../../store/slices/orderSlice";

import Tooltip from "../../layout/Tooltip";
import Tooltiped from "../../layout/Tooltip/Tooltiped";
import ItemFrameButton from "../../layout/ItemFrameButton";
import ItemIcon from "../../layout/ItemIcon";

interface Props
{
    preset: PresetType
}

const PresetButtom: React.FC<Props> = ({ preset }) =>
{
    const dispatch = useAppDispatch();
    const [{ active, x, y }, setTooltip] = useState({ active: false, x: 0, y: 0 });

    const applyPreset = (preset: PresetType) =>
    {
        dispatch(setCategories(preset.categories));
        dispatch(updateOrder(preset.categories_order));
        !preset.uncategorized ? dispatch(fillRemaining()) :
            dispatch(updateUncategorized(preset.uncategorized));
    }

    return (
        <Tooltiped setTooltip={setTooltip}>
            <Tooltip
                title={{ msg: `${preset.name} Preset` }}
                description={[]}
                active={active} x={x} y={y}
            />
            <ItemFrameButton onClick={() => applyPreset(preset)}>
                <ItemIcon texture={getItemById(preset.icon).texture} name={preset.name} size={30} inSlot={false} />
            </ItemFrameButton>
        </Tooltiped>
    );
}

export default PresetButtom;