import { useState } from "react";
import { TooltipState } from "../../components/layout/Tooltip/types";

const useTooltip = (): [TooltipState, React.Dispatch<React.SetStateAction<TooltipState>>] => 
{
    const [props, setTooltip] = useState({ active: false, x: 0, y: 0 });

    return [props, setTooltip];
}

export default useTooltip;