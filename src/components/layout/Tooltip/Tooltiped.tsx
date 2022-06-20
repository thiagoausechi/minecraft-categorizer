import { MouseEvent } from "react";
import { TooltipedProps } from "./types";

const Tooltiped: React.FC<TooltipedProps> = ({ setTooltip, children }) => 
{
    const updateTooltip = (e: MouseEvent) => setTooltip({ x: e.clientX, y: e.clientY, active: true });
    const hideTooltip = () => setTooltip({ x: 0, y: 0, active: false })

    return <div onMouseMove={updateTooltip} onMouseOut={hideTooltip}>{children}</div>;
}

export default Tooltiped;