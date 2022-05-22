import { Category } from "./Categories.type";
import { Item } from "./MinecraftItems"

export const filterItem = (e: Item, s: string): boolean => Object.keys(ITEM_ENGINES).map(k => ITEM_ENGINES[k](e, normalize(s))).includes(true);
export const filterCategory = (e: Category, s: string): boolean => Object.keys(CATEGORY_ENGINES).map(k => CATEGORY_ENGINES[k](e, normalize(s))).includes(true);

const ITEM_ENGINES: Engines =
{
    byName: (e, s) => normalize(e.name).includes(s),
    byId: (e, s) => normalize(e.id).includes(s),
    byCreative: (e, s) => "creative".includes(s) && e.creativeOnly
}

const CATEGORY_ENGINES: Engines =
{
    byName: (e, s) => s.charAt(0) === ">" && normalize(e.name).includes(s.replace(">", ""))
}

interface Engines
{
    [key: string]: (e: any, s: string) => boolean;
}

export const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); 