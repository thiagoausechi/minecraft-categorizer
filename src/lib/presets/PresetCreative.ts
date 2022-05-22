import { PresetType } from ".";

import { getAllIDs } from "../MinecraftItems";

const Preset: PresetType =
{
    name: "Creative Tabs",
    icon: "minecraft:command_block",
    uncategorized: [...getAllIDs()],
    categories: {
        "Hidden": {
            "id": "Hidden",
            "name": "Hidden",
            "icon": "minecraft:barrier",
            "items": []
        },
        "Brewing": {
            "id": "Brewing",
            "name": "Brewing",
            "icon": "minecraft:potion",
            "items": []
        },
        "Combat": {
            "id": "Combat",
            "name": "Combat",
            "icon": "minecraft:golden_sword",
            "items": []
        },
        "Tools": {
            "id": "Tools",
            "name": "Tools",
            "icon": "minecraft:iron_axe",
            "items": []
        },
        "Foodstuffs": {
            "id": "Foodstuffs",
            "name": "Foodstuffs",
            "icon": "minecraft:apple",
            "items": []
        },
        "Miscellaneous": {
            "id": "Miscellaneous",
            "name": "Miscellaneous",
            "icon": "minecraft:lava_bucket",
            "items": []
        },
        "Transportation": {
            "id": "Transportation",
            "name": "Transportation",
            "icon": "minecraft:powered_rail",
            "items": []
        },
        "Redstone": {
            "id": "Redstone",
            "name": "Redstone",
            "icon": "minecraft:redstone",
            "items": []
        },
        "Decoration Blocks": {
            "id": "Decoration Blocks",
            "name": "Decoration Blocks",
            "icon": "minecraft:peony",
            "items": []
        },
        "Building blocks": {
            "id": "Building blocks",
            "name": "Building blocks",
            "icon": "minecraft:bricks",
            "items": []
        }
    },
    categories_order: [
        "Building blocks",
        "Decoration Blocks",
        "Redstone",
        "Transportation",
        "Miscellaneous",
        "Foodstuffs",
        "Tools",
        "Combat",
        "Brewing",
        "Hidden"
    ]
}

export default Preset;