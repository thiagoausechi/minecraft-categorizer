import { ContextType } from "../ItemSlot/type"

export interface ItemsListProps
{
    list: string[]
    context: ContextType
    addItems: (item: string[]) => void
    search: string
}