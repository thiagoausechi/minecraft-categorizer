import { Category } from "../Categories.type"

import PresetDummy from "./PresetDummy";
import PresetNv0 from "./PresetNv0";
import PresetClear from "./PresetClear";
import PresetColors from "./PresetColors";
import PresetCreative from "./PresetCreative";

export interface PresetType
{
    name: string
    icon: string
    // If "uncategorized" is null, it'll fill with remaining items
    uncategorized: string[] | null
    categories: { [key: string]: Category }
    categories_order: string[]
}

export const PRESETS: PresetType[] = [PresetDummy, PresetNv0, PresetClear, PresetColors, PresetCreative]