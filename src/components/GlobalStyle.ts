import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, :after, :before
    {
        box-sizing: border-box;
    }

    body
    {
        background: #eee;
        color: #404040;
    }

    a
    {
        color: #000000;
        cursor: pointer;
    }

    /* Minecraft-Styled Scroolbar */
    ::-webkit-scrollbar
    {
        width: 30px;
        height: 30px;
    }

    ::-webkit-scrollbar-corner
    {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb:vertical
    {
        border: 3px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;

        background-size: 5px 5px;
        background-color: #c6c6c6;
        background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px, 
            #8b8b8b 3px, 
            #8b8b8b 5px
        );
        
        padding: 5px;
        background-origin: padding-box;

        box-shadow: inset 3px 3px 0px 0px #ffffffad, inset -3px -3px 0px 0px #555555;
    }

    ::-webkit-scrollbar-thumb:horizontal
    {
        border: 3px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;

        background-size: 5px 5px;
        background-color: #c6c6c6;
        background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 3px, 
            #8b8b8b 3px, 
            #8b8b8b 5px
        );
        
        padding: 5px;
        background-origin: padding-box;

        box-shadow: inset 3px 3px 0px 0px #ffffffad, inset -3px -3px 0px 0px #555555;
    }

    ::-webkit-scrollbar-track
    {
        background: #8B8B8B;
        border-radius: 0px;
        box-shadow: inset 3px 3px 0px 0px #555555, inset -3px -3px 0px 0px #ffffffad;
    }
`;

export const AppPanelsWidth = "clamp(268px, 87vw, 520px)";

export default GlobalStyle;