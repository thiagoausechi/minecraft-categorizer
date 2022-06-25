import { ItemType } from "../../../lib/MinecraftItems"

export interface ItemSlotProps
{
    item: ItemType
    index: number
    context: ContextType
    selectItem: (index: number, type: string, cmdkey: boolean, shiftKey: boolean) => void
}

export interface ContextType
{
    origin: "" | "CATEGORY" | "UNCATEGORIZED"
    reference?: string
}

export interface DragStackType
{
    id: string
    context: ContextType
}

export interface DragItemType
{
    draggedItem: string
    dragStack: DragStackType[]
}