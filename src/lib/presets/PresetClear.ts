import { PresetType } from ".";
import { getAllIDs } from "../MinecraftItems";

const Preset: PresetType =
{
    name: "Clear",
    icon: "minecraft:glass",
    uncategorized: [...getAllIDs()],
    categories: {},
    categories_order: []
}

export default Preset;