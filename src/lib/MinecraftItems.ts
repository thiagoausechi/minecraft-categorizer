import Items from "../assets/Items.json";
import textures from "minecraft-textures/dist/textures/1.18"

// =============== Interfaces ===============
export interface ItemsList
{
    [key: string]: Item
}

export interface Item
{
    id: string
    index: number
    name: string
    texture: string
    creativeOnly: boolean
}

// =============== Functions ===============

/* 
 * This function will receive a list of string 
 * (eg: ["minecraft:stone", "minecraft:cobblestone"])
 * and will transform each string into a Item Object,
 * resulting in a array of Items
 */
export const consolidate = (list: string[]): Item[] =>
{
    return list.map((item) => (Items as ItemsList)[item]);
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

export const getItemById = (id: string): Item => 
{
    return (Items as ItemsList)[id];
}

export const getAllIDs = (): string[] => Object.keys(Items)

const updateItemsList = () => 
{
    const result: any = {};

    textures.items.forEach((item, index) =>
        result[item.id] =
        {
            id: item.id,
            index: index,
            name: item.readable,
            creativeOnly: isCreative(item.id),
            texture: item.texture
        }
    )

    console.log(result);
}

const isCreative = (id: string) =>
    [
        'minecraft:bedrock',
        'minecraft:end_portal_frame',
        'minecraft:chorus_plant',
        'minecraft:spawner',
        'minecraft:frosted_ice',

        'minecraft:farmland',
        'minecraft:budding_amethyst',

        'minecraft:command_block_minecart',
        'minecraft:command_block',
        'minecraft:repeating_command_block',
        'minecraft:chain_command_block',

        'minecraft:structure_block',
        'minecraft:structure_void',
        'minecraft:jigsaw',
        'minecraft:barrier',
        'minecraft:light',

        'minecraft:player_head',

        'minecraft:knowledge_book',
        'minecraft:debug_stick',

        'minecraft:bundle', // For a while
        'minecraft:sculk_sendor' // For a while
    ].includes(id) || id.includes('_spawn_egg');

// TODO Remove or enhance this
export const Missingno = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAt1BMVEX/AP//AP//AP/9AP0fAB8AAAABAAEAAAD/AP/9AP0fAB8BAAH/AP/+AP4YABgBAAH/AP/+AP4WABYBAAH+AP4XABcBAAH+AP4XABf/AP//AP/+AP4YABgBAAEAAAD/AP/+AP4ZABkDAAP+AP4SABL+AP4UABT+AP7+AP7+AP7+AP7+AP70APRXAFcUABQYABgXABcXABcXABceAB4VABUXABcSABJYAFj0APT+AP7+AP7+AP79AP2J1Tm8AAAAAWJLR0QF+G/pxwAAAAd0SU1FB+EJDhcOFGEzO8MAAAAJdnBBZwAAACIAAAAiAPgEXxQAAADzSURBVDjL1dDZkoIwEAXQy3IBBQVFUVHcd8d9G5f//64pCy0yqQrv3n5LnaTTDWTRdMAwSctmFojAAQpF0lUCDyiVSV8JAqBSJcM8UKuTUR5oNL8SaFlaMdDukEnXzgLd8YJ34h7QH5DDJEoT+q4FKaMx/0cGk6kMjMKsMm8sXtVejlY/681429k1X7WvHoomzGP5VE8PzoPL9Po7ufXv6YXao/Q0IL24WclNJXC5ycBy/fA9VTIkt0ugF38G9xwdwk66CXm+A3FL2J7Ywo7I3QIINMUfvgbs53kgJE+PPOCThxngKYFLHp+AowQWaRqALoI/Q50gLzlZBxIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMTVUMDE6MTQ6MjArMDI6MDDBw4POAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTE1VDAxOjE0OjIwKzAyOjAwsJ47cgAAAABJRU5ErkJggg==";