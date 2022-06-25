import { useState } from "react";
import styled from "styled-components";
import useTooltip from "../../../lib/hooks/useTooltip.hook";
import Clickable from "../Clickable";
import Tooltip from "../Tooltip";
import Tooltiped from "../Tooltip/Tooltiped";

interface Props
{
    title: string
    icon: string
    hover: string
    active: string
    activated: boolean
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const ClickableIcon: React.FC<Props> = ({ title, icon, hover, active, activated, onClick }) => 
{
    const [{ active: tooltipOn, x, y }, setTooltip] = useTooltip();
    const [hovering, setHovering] = useState(false);

    const IconElement = activated ? <Icon src={active} alt={title} /> :
        hovering ? <Icon src={hover} alt={title} /> :
            <Icon src={icon} alt={title} />

    return (
        <Tooltiped setTooltip={setTooltip}>
            <Tooltip
                title={{ msg: title }}
                description={[]}
                active={tooltipOn} x={x} y={y}
            />
            <Clickable
                onClick={onClick}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <Wrapper>
                    {IconElement}
                </Wrapper>
            </Clickable>
        </Tooltiped>
    );
}

const Wrapper = styled.div`
    display: flex;
`

const Icon = styled.img`
    width: 30px;
    margin-inline: 2px;
`

export default ClickableIcon;