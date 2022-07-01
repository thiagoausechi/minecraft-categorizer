import styled from "styled-components";

const IconButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-left: 8px;
    align-items: center;

    @media screen and (max-width: 600px)
    {
        display: none;
    }
`

export default IconButtons;