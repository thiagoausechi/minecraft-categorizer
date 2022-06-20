import ClickableIcon from ".";

import Icon from "../../../assets/img/plus.png";
import Hover from "../../../assets/img/plus_hover.png";
import Active from "../../../assets/img/plus_active.png";

interface Props
{
    activated: boolean
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const NewCategoryIcon: React.FC<Props> = ({ activated, onClick }) =>
    <ClickableIcon
        title="New Category"
        icon={Icon}
        hover={Hover}
        active={Active}
        activated={activated}
        onClick={onClick}
    />