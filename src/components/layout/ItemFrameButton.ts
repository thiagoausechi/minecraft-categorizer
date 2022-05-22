import styled from "styled-components";

import texture from "../../assets/img/itemframe.png"

const ItemFrameButton = styled.button`
    cursor: pointer;

    background-image: url(${texture});
    background-size: cover;
    background-repeat: no-repeat;

    height: 46px;
    width: 46px;
    
    border: none;

    &:hover
    {
        outline: 3px inset #000000;
    }
`;

export default ItemFrameButton;