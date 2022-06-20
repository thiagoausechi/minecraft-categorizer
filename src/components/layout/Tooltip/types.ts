import React from "react"
import { ItemType } from "../../../lib/MinecraftItems"

export interface TooltipedProps
{
    setTooltip: React.Dispatch<React.SetStateAction<TooltipState>>
    children: any
}

export interface TooltipState
{
    active: boolean
    x: number
    y: number
}

export interface TooltipProps extends TooltipState
{
    title: MessageProps
    description: (MessageProps | null)[]
}

export interface GetPositionProps
{
    (
        ref: React.MutableRefObject<any>,
        mouseX: number,
        mouseY: number,
        vw: number,
        vh: number,
    ): TooltipState
}

export interface ItemTooltipProps extends TooltipState
{
    item: ItemType | null | undefined
}

export interface MessageProps
{
    msg: string
    color?: string
    italic?: boolean
    bold?: boolean
}