import styled from "styled-components";

import { Missingno } from "../../lib/MinecraftItems";

interface Props
{
    texture: string | null
    name: string | null
    size?: number
    inSlot?: boolean
}

interface StyleProps
{
    inSlot?: boolean
    size?: number
}

const Icon = styled.img<StyleProps>`
    position: ${p => p.inSlot ? "absolute" : ""};

    image-rendering: auto;
    vertical-align: middle;
    border: 0;

    width: ${p => `${p.size}px`};
    height: ${p => `${p.size}px`};
`;

const ItemIcon = ({ texture, name, size = 32, inSlot = true }: Props) =>
{
    return texture && name ?
        <Icon src={texture} alt={`${name} Icon`} size={size} inSlot={inSlot} /> :
        <Icon src={Missingno} alt={"Missing Icon"} size={size} inSlot={inSlot} />;
}

ItemIcon.Icon = Icon;

export default ItemIcon;