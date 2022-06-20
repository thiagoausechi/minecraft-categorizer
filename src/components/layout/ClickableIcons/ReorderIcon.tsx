import ClickableIcon from ".";

import Icon from "../../../assets/img/reorder.png";
import Hover from "../../../assets/img/reorder_hover.png";
import Active from "../../../assets/img/reorder_active.png";

interface Props
{
    activated: boolean
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const ReorderIcon: React.FC<Props> = ({ activated, onClick }) =>
    <ClickableIcon
        title="Reorder Categories"
        icon={Icon}
        hover={Hover}
        active={Active}
        activated={activated}
        onClick={onClick}
    />