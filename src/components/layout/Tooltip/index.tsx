import { isMobile } from "react-device-detect";

import Container from "./Container"
import Description from "./Description"
import Title from "./Title"

interface TooltipProps
{
    title: MessageProps
    description: (MessageProps | null)[]
    active: boolean
    x: number
    y: number
}

export interface MessageProps
{
    msg: string
    color?: string
    italic?: boolean
    bold?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ title, description, active, x, y }) =>
    !active || isMobile ? null : (
        <Container x={x} y={y} >
            <Title title={title} />
            <Description description={description} />
        </Container>
    );

export default Tooltip;