import { useRef } from "react";
import { isMobile } from "react-device-detect";

import { TooltipProps } from "./types";

import { getPosition } from "./Position";

import Container from "./Container"
import Description from "./Description"
import Title from "./Title"

const Tooltip: React.FC<TooltipProps> = ({ title, description, active, x: mouseX, y: mouseY }) =>
{
    const ref = useRef<HTMLDivElement>(null);

    const { active: activated, x, y } = getPosition(ref, mouseX, mouseY);

    return !active || isMobile ? null : (
        <Container ref={ref} x={x} y={y} style={{ display: activated ? "block" : "none" }}>
            <Title title={title} />
            <Description description={description} />
        </Container>
    );
}

export default Tooltip;