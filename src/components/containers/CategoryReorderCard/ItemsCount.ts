import styled from "styled-components";

const ItemsCount = styled.div`
    flex-grow: 1;
    text-align: end;

    @media screen and (max-width: 600px)
    {
        display: none;
    }
`

export default ItemsCount;