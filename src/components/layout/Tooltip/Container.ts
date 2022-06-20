import styled from "styled-components";

const Container = styled.div.attrs<{ x: number, y: number }>(p => ({
    style: {
        top: p.y,
        left: p.x
    }
})) <{ x: number, y: number }>`
    color: #FFF;
    text-align: left;
    word-spacing: 4px;
    white-space: nowrap;
    line-height: 20px;
    text-shadow: 2px 2px #000a;
    
    position: fixed;
    
    padding: 6px;
    margin: 2px 4px;
    
    pointer-events: none;
    z-index: 99;
    
    background-color: #100010;
    background-color: rgba(16, 0, 16, 0.94);

    &:before
    {
        content: "";
        position: absolute;
        top: 2px;
        right: -2px;
        bottom: 2px;
        left: -2px;
        border-style: none solid;
        border-color: rgba(16, 0, 16, 0.94);
    }

    &:after
    {
        content: "";
        position: absolute;
        top: 2px;
        right: 0;
        bottom: 2px;
        left: 0;
        border: 2px solid #2D0A63;
        border-image: linear-gradient(rgba(80, 0, 255, 0.31), rgba(40, 0, 127, 0.31)) 1;
    }
`;

export default Container;