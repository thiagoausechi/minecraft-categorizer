import { PresetType } from ".";
import { read } from "../../store/local";

const Preset: PresetType =
{
    name: "User",
    icon: "minecraft:bundle",
    uncategorized: null,
    categories: {},
    categories_order: [],
    load: () =>
    {
        const { categories, order } = read("user_preset", { categories: {}, order: [] });
        return { categories, categories_order: order };
    }
}

export default Preset;