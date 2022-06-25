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
        const { categories, order, checkedItems } = read("user_preset", { categories: {}, order: [], checkedItems: [] });
        return { categories, categories_order: order, checked_items: checkedItems };
    }
}

export default Preset;