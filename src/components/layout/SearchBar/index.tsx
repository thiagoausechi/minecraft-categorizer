import useTooltip from "../../../lib/hooks/useTooltip.hook";

import Tooltip from "../Tooltip";
import Tooltiped from "../Tooltip/Tooltiped";

import Control from "./Control";
import Label from "./Label";
import Textbox from "../Textbox";
import Tip from "./Tip";

interface Props
{
    text: string
    tips?: string[]
    updateSearchText?: MouseEvent | Function
}

const SearchBar: React.FC<Props> = ({ text, updateSearchText, tips }) =>
{
    const { state: { active, x, y }, setTooltip } = useTooltip();

    return (
        <Control>
            <Label>
                <Textbox type="text" value={text} placeholder="Search..." onChange={updateSearchText} />
                {!tips || tips.length === 0 ? null :
                    <Tip>
                        <Tooltiped setTooltip={setTooltip}>
                            <Tooltip
                                title={{ msg: "Tips/Keywords" }}
                                description={tips.map(t => ({
                                    msg: `• ${t}`, italic: true
                                }))}
                                active={active} x={x} y={y}
                            />
                            ?
                        </Tooltiped>
                    </Tip>
                }
            </Label>
        </Control>
    );
}

export default SearchBar;