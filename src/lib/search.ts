import { CategoryType } from "./Categories.type";
import { TypedObj } from "./global.type";
import { ItemType } from "./MinecraftItems";

import { read } from "../store/local";
import { NAME as CHECKED_ITEMS } from "../store/slices/checkedItemsSlice";

export interface Engines<S> extends TypedObj<(e: S, s: string) => boolean> { }

export const filter = (e: any, s: string, engine: Engines<any>): boolean => Object.keys(engine).map((k, i) =>
{
    return engine[k](e, normalize(s))
}).includes(true);

export const filterItem = (e: ItemType, s: string): boolean => filter(e, s, ITEM_ENGINES);
export const filterCategory = (e: CategoryType, s: string): boolean => filter(e, s, CATEGORY_ENGINES);

const ITEM_ENGINES: Engines<ItemType> =
{
    byName: (e, s) => normalize(e.name).includes(s),
    byId: (e, s) => normalize(e.id).includes(s),
    byCreative: (e, s) => keyword(s, "creative") && e.creativeOnly,
    isBlock: (e, s) => keyword(s, "isBlock") && e.isBlock,
    isItem: (e, s) => keyword(s, "isItem") && !e.isBlock,
    lightSource: (e, s) => keyword(s, "lightSource") && !!e.isLightSource,
    stackable: (e, s) => keyword(s, "stackable") && e.stackSize > 1,
    notStackable: (e, s) => requires(s, "stackable") && e.stackSize === 1,
    stack16: (e, s) => keyword(s, "stack16") && e.stackSize === 16,

    isChecked: (e, s) => keyword(s, "checked") && read(CHECKED_ITEMS, [] as string[]).includes(e.id),
    notChecked: (e, s) => requires(s, "checked") && !read(CHECKED_ITEMS, [] as string[]).includes(e.id)
}

const CATEGORY_ENGINES: Engines<CategoryType> =
{
    byName: (e, s) => s.charAt(0) === ">" && normalize(e.name).includes(s.replace(">", ""))
}

export const ITEM_TIPS = [
    "creative = to show creative only items",
    "isBlock = blocks only",
    "isItem = items only",
    "lightSource = only show light emiting blocks",
    "stackable = items with stack size greater than 1",
    "notStackable = items with stack size of 1",
    "stack16 = items with stack size of 16"
];

export const CATEGORY_TIPS = [
    "Use \">\" to search using the category name",
    "Use \"checked\" or \"notChecked\" to filter checked items"
];

export const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
const keyword = (s: string, key: string) => normalize(key).includes(s);
const requires = (s: string, key: string, required = "not") => s.includes(required) && keyword(s.replace(required, ""), key);