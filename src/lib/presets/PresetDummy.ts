import { PresetType } from ".";

const Preset: PresetType =
{
    name: "Dummy",
    icon: "minecraft:totem_of_undying",
    uncategorized: [
        "minecraft:stone",
        "minecraft:granite",
        "minecraft:cobblestone",
        "minecraft:diamond_block",
        "minecraft:command_block"
    ],
    categories: {
        nat01: {
            id: "nat01",
            name: "Natural",
            icon: "minecraft:grass_block",
            items: [
                "minecraft:dirt",
                "minecraft:sand",
                "minecraft:debug_stick"
            ]
        },
        wod01: {
            id: "wod01",
            name: "Woods",
            icon: "minecraft:oak_log",
            items: [
                "minecraft:oak_planks",
                "minecraft:dark_oak_planks",
                "minecraft:barrier"
            ]
        },
        net01: {
            id: "net01",
            name: "Nether",
            icon: "minecraft:netherrack",
            items: []
        }
    },
    categories_order: [
        "nat01",
        "wod01",
        "net01"
    ]
}

export default Preset;