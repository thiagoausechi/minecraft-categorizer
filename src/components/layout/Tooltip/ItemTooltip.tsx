import Tooltip from ".";
import { Item } from "../../../lib/MinecraftItems";

interface Props
{
    item: Item | null | undefined
    active: boolean
    x: number
    y: number
}

const ItemTooltip: React.FC<Props> = ({ item, active, x, y }) => !item ? null :
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