import { TypedObj } from "../global.type";
import { CategoryType } from "../Categories.type"

import PresetUser from "./PresetUser";
import PresetDummy from "./PresetDummy";
import PresetNv0 from "./PresetNv0";
import PresetClear from "./PresetClear";
import PresetColors from "./PresetColors";
import PresetCreative from "./PresetCreative";
import { isDevEnv } from "../dev";

export interface PresetType
{
    name: string
    icon: string

    // If "uncategorized" is null, it'll fill with remaining items
    uncategorized: string[] | null
    categories: TypedObj<CategoryType>
    categories_order: string[]
    checked_items?: string[]

    // If the preset needs to load data from another place
    // This action will OVERRIDE any data presented above
    load?: () => {
        categories: TypedObj<CategoryType>,
        categories_order: string[]
        checked_items?: string[]
    }
}

const DEV_PRESETS: PresetType[] = [PresetNv0, PresetDummy];
const DEFAULT_PRESETS: PresetType[] = [PresetUser, PresetClear, PresetColors, PresetCreative];

export const PRESETS: PresetType[] = isDevEnv ? [...DEV_PRESETS, ...DEFAULT_PRESETS] : DEFAULT_PRESETS;