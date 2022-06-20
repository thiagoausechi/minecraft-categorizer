import { useAppDispatch } from "../../lib/hooks/useAppDispatch.hook";
import { useAppSelector } from "../../lib/hooks/useAppSelector.hook";
import { fill, setVersion } from "../../store/slices/uncategorizedSlice";

import { MC_VERSION } from "../../lib/MinecraftItems";

const CheckUpdates: React.FC = () => 
{
    const dispatch = useAppDispatch();
    const LOCAL_VERSION = useAppSelector(state => state.uncategorized.version);

    if (LOCAL_VERSION === MC_VERSION) return null;

    dispatch(fill());
    dispatch(setVersion(MC_VERSION));

    return null;
}

export default CheckUpdates;