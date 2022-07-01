import { PresetButtomProps } from "./types";
import { PresetType } from "../../../lib/presets";
import { getItemById } from "../../../lib/MinecraftItems";

import { useAppDispatch } from "../../../lib/hooks/useAppDispatch.hook";
import { fill as fillRemaining, update as updateUncategorized } from "../../../store/slices/uncategorizedSlice";
import { set as setCategories } from "../../../store/slices/categoriesSlice";
import { update as updateOrder } from "../../../store/slices/orderSlice";
import { add as checkItems, clear as uncheckAll } from "../../../store/slices/checkedItemsSlice";
import { clear as clearSelection } from "../../../store/slices/selectedItemsSlice";

import useTooltip from "../../../lib/hooks/useTooltip.hook";
import Tooltiped from "../../layout/Tooltip/Tooltiped";
import Tooltip from "../../layout/Tooltip";
import ItemFrameButton from "../../layout/ItemFrameButton";
import ItemIcon from "../../layout/ItemIcon";

const PresetButtom: React.FC<PresetButtomProps> = ({ preset }) =>
{
    const dispatch = useAppDispatch();
    const { state: { active, x, y }, setTooltip } = useTooltip();

    const applyPreset = (preset: PresetType) =>
    {
        let loaded = null;
        if (preset.load) loaded = preset.load();

        dispatch(setCategories(loaded ? loaded.categories : preset.categories));
        dispatch(updateOrder(loaded ? loaded.categories_order : preset.categories_order));
        !preset.uncategorized ? dispatch(fillRemaining()) :
            dispatch(updateUncategorized(preset.uncategorized));

        dispatch(clearSelection());
        dispatch(uncheckAll());
        const checkedItems = loaded ? loaded.checked_items : preset.checked_items;
        if (checkedItems) dispatch(checkItems(checkedItems));
    }

    return (
        <Tooltiped setTooltip={setTooltip}>
            <Tooltip
                title={{ msg: `${preset.name} Preset` }}
                description={[]}
                active={active} x={x} y={y}
            />
            <ItemFrameButton onClick={() => applyPreset(preset)}>
                <ItemIcon texture={getItemById(preset.icon).texture} name={preset.name} inSlot={false} />
            </ItemFrameButton>
        </Tooltiped>
    );
}

export default PresetButtom;