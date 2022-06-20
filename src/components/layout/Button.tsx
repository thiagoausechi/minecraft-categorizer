import { MouseEvent } from "react";
import styled from "styled-components";

import Background from "../../assets/img/button_bg.png";

/* 
 * Minecraft-Style Button
 * Credits to Joex
 * https://codepen.io/joexmdq/pen/EOMLzg
 */

const Title = styled.div`
    width: 100%; height: 42px;

    padding-inline: 30px;
    padding-block: 12px;
    
    text-shadow: 2px 2px #000A;
    box-shadow:
        inset -2px -4px #0006,
        inset 2px 2px #FFF7;
`

const Input: any = styled.button<any>`

    font-family: "Minecraft";
    font-size: medium;

    color: ${p => p.danger ? "#AA0000" : "#DDDDDD"};

    padding: 0px;

    cursor: pointer;

	overflow: hidden;
	white-space: nowrap;
	user-select: none;

	background: #999 url(${Background}) center / cover;
	image-rendering: pixelated;

	border: 2px solid #000;

    ${Title}
    {
		background-color: ${p => !p.active ? "" : "rgba(100, 100, 255, .45)"}
    }

	&:hover ${Title}
    {
		background-color: rgba(100, 100, 255, .45);

		text-shadow: 2px 2px #202013CC;
		color: ${p => p.danger ? "red" : "#FFFFA0"};
	}

	&:active
    {
		box-shadow: inset -2px -4px #0004, inset 2px 2px #FFF5;
	}
`

interface Props
{
    title: any
    danger?: boolean
    active?: boolean
    onClick?: MouseEvent | Function
}

const Button: React.FC<Props> = ({ title, danger, active, onClick }) =>
    <Input onClick={onClick} active={active} danger={danger}>
        <Title>
            {title}
        </Title>
    </Input>

export default Button;