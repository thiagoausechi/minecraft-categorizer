import { useState } from "react";
import styled from "styled-components";
import Textbox from "./Textbox";
import Tooltip from "./Tooltip";
import Tooltiped from "./Tooltip/Tooltiped";

interface Props
{
    text: string
    tips?: string[]
    updateSearchText?: MouseEvent | Function
}

const SearchBar: React.FC<Props> = ({ text, updateSearchText, tips }) =>
{
    const [{ active, x, y }, setTooltip] = useState({ active: false, x: 0, y: 0 });

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

const Control = styled.label`
    position: relative;

    width: -webkit-fill-available;
    width: fill-available;
`

const Label = styled.label`
    & > ${Textbox}
    {
        width: 100%;
    }
`

const Tip = styled.div`
    position: absolute;
    top: 2px;
    right: 15px;

    color: #8B8B8B;

    &:hover
    {
        color: white;
    }

    cursor: pointer;
`

export default SearchBar;