import { useState } from "react";

import { TooltipHookProps } from "../../components/layout/Tooltip/types";

const useTooltip = (): TooltipHookProps => 
{
    const [state, setTooltip] = useState({ active: false, x: 0, y: 0 });

    return { state, setTooltip };
}

export default useTooltip;