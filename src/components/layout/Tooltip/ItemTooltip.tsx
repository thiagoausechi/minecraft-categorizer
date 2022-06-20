import Tooltip from ".";
import { ItemTooltipProps } from "./types";

const ItemTooltip: React.FC<ItemTooltipProps> = ({ item, active, x, y }) => !item ? null :
    <Tooltip
        title={{ msg: item.name }}
        description={[
            { msg: item.id, color: "gray" },
            !item.creativeOnly ? null :
                { msg: "Creative Only!", color: "purple", italic: true }
        ]}
        active={active}
        x={x}
        y={y}
    />

export default ItemTooltip;