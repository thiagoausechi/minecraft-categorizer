import Items from "../assets/Items.json";
import { TypedObj } from "./global.type";

export const MC_VERSION = "1.19";
const ItemsList = (Items as ItemsListType);

// =============== Interfaces ===============
export interface ItemsListType extends TypedObj<ItemType> { }

export interface ItemType
{
    id: string
    index: number
    name: string
    stackSize: number
    isBlock: boolean
    isLightSource?: boolean
    creativeOnly: boolean
    texture: string
}

// =============== Functions ===============

/* 
 * This function will receive a list of string 
 * (eg: ["minecraft:stone", "minecraft:cobblestone"])
 * and will transform each string into a Item Object,
 * resulting in a array of Items
 */
export const consolidate = (list: string[]): ItemType[] =>
{
    return list.map((item) => ItemsList[item]);
}

/* 
 * This function will receive a list of string 
 * (eg: ["minecraft:stone", "minecraft:cobblestone"])
 * and will sort all items inside using its index
 */
export const sortById = (list: string[]): string[] => [...consolidate(list)
    .sort((a, b) => (a.index > b.index) ? 1 : -1)
    .map((item) => item.id)
]

export const getItemById = (id: string): ItemType => 
{
    return ItemsList[id];
}

export const getAllIDs = (): string[] => Object.keys(Items)