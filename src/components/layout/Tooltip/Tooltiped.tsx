import { MouseEvent } from "react";

const Tooltiped: React.FC<{ setTooltip: Function, children: any }> = ({ setTooltip, children }) => 
{
    const updateTooltip = (e: MouseEvent) => setTooltip({ x: e.clientX, y: e.clientY, active: true });
    const hideTooltip = () => setTooltip({ x: 0, y: 1, active: false })

    return <div onMouseMove={updateTooltip} onMouseOut={hideTooltip}>{children}</div>;
}

export default Tooltiped;