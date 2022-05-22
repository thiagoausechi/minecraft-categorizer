import { PresetType } from ".";
import { getAllIDs } from "../MinecraftItems";

const Preset: PresetType =
{
    name: "Colors",
    icon: "minecraft:red_dye",
    uncategorized: [...getAllIDs()],
    categories: {
        "Black": {
            "id": "Black",
            "name": "Black",
            "icon": "minecraft:black_dye",
            "items": []
        },
        "Red": {
            "id": "Red",
            "name": "Red",
            "icon": "minecraft:red_dye",
            "items": []
        },
        "Green": {
            "id": "Green",
            "name": "Green",
            "icon": "minecraft:green_dye",
            "items": []
        },
        "Brown": {
            "id": "Brown",
            "name": "Brown",
            "icon": "minecraft:brown_dye",
            "items": []
        },
        "Blue": {
            "id": "Blue",
            "name": "Blue",
            "icon": "minecraft:blue_dye",
            "items": []
        },
        "Purple": {
            "id": "Purple",
            "name": "Purple",
            "icon": "minecraft:purple_dye",
            "items": []
        },
        "Cyan": {
            "id": "Cyan",
            "name": "Cyan",
            "icon": "minecraft:cyan_dye",
            "items": []
        },
        "Light Gray": {
            "id": "Light Gray",
            "name": "Light Gray",
            "icon": "minecraft:light_gray_dye",
            "items": []
        },
        "Gray": {
            "id": "Gray",
            "name": "Gray",
            "icon": "minecraft:gray_wool",
            "items": []
        },
        "Pink": {
            "id": "Pink",
            "name": "Pink",
            "icon": "minecraft:pink_dye",
            "items": []
        },
        "Lime": {
            "id": "Lime",
            "name": "Lime",
            "icon": "minecraft:lime_dye",
            "items": []
        },
        "Yellow": {
            "id": "Yellow",
            "name": "Yellow",
            "icon": "minecraft:yellow_dye",
            "items": []
        },
        "Light Blue": {
            "id": "Light Blue",
            "name": "Light Blue",
            "icon": "minecraft:light_blue_dye",
            "items": []
        },
        "Magenta": {
            "id": "Magenta",
            "name": "Magenta",
            "icon": "minecraft:magenta_dye",
            "items": []
        },
        "Orange": {
            "id": "Orange",
            "name": "Orange",
            "icon": "minecraft:orange_dye",
            "items": []
        },
        "White": {
            "id": "White",
            "name": "White",
            "icon": "minecraft:white_dye",
            "items": []
        }
    },
    categories_order: [
        "White",
        "Orange",
        "Magenta",
        "Light Blue",
        "Yellow",
        "Lime",
        "Pink",
        "Gray",
        "Light Gray",
        "Cyan",
        "Purple",
        "Blue",
        "Brown",
        "Green",
        "Red",
        "Black"
    ]
}

export default Preset;