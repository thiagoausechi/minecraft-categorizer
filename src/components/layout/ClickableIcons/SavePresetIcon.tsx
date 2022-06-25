import ClickableIcon from ".";

import Icon from "../../../assets/img/save.png";
import Hover from "../../../assets/img/save_hover.png";
import { useAppSelector } from "../../../lib/hooks/useAppSelector.hook";
import { write } from "../../../store/local";

export const SavePresetIcon: React.FC = () =>
{
    const categories = useAppSelector(state => state.categories.value);
    const order = useAppSelector(state => state.order.value);
    const checkedItems = useAppSelector(state => state.checkedItems.value);

    const preset = { categories, order, checkedItems };

    return <ClickableIcon
        title="Save Configuration as Preset"
        icon={Icon}
        hover={Hover}
        active={Icon}
        activated={false}
        onClick={() => write("user_preset", preset)}
    />
}