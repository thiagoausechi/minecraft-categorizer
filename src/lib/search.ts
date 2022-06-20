import { CategoryType } from "./Categories.type";
import { TypedObj } from "./global.type";
import { ItemType } from "./MinecraftItems";

export interface Engines<S> extends TypedObj<(e: S, s: string) => boolean> { }

export const filter = (e: any, s: string, engine: Engines<any>): boolean => Object.keys(engine).map(k => engine[k](e, normalize(s))).includes(true);

export const filterItem = (e: ItemType, s: string): boolean => filter(e, s, ITEM_ENGINES);
export const filterCategory = (e: CategoryType, s: string): boolean => filter(e, s, CATEGORY_ENGINES);

const ITEM_ENGINES: Engines<ItemType> =
{
    byName: (e, s) => normalize(e.name).includes(s),
    byId: (e, s) => normalize(e.id).includes(s),
    byCreative: (e, s) => "creative".includes(s) && e.creativeOnly,
    isBlock: (e, s) => "isblock".includes(s) && e.isBlock,
    notBlock: (e, s) => "notblock".includes(s) && !e.isBlock,
    lightSource: (e, s) => "lightsource".includes(s) && !!e.isLightSource,
    stackable: (e, s) => "stackable".includes(s) && e.stackSize > 1,
    notStackable: (e, s) => "notstackable".includes(s) && e.stackSize === 1,
    stack16: (e, s) => "stack16".includes(s) && e.stackSize === 16,
}

const CATEGORY_ENGINES: Engines<CategoryType> =
{
    byName: (e, s) => s.charAt(0) === ">" && normalize(e.name).includes(s.replace(">", ""))
}

export const ITEM_TIPS = [
    "creative = to show creative only items",
    "isBlock = blocks only",
    "notBlock = items only",
    "lightSource = only show light emiting blocks",
    "stackable = items with stack size greater than 1",
    "notStackable = items with stack size of 1",
    "stack16 = items with stack size of 16"
];

export const CATEGORY_TIPS = [
    "Use \">\" to search using the category name"
];

export const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); 