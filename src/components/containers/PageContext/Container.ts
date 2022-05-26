import styled from "styled-components";

const Container = styled.div`
    padding-inline: 15px;

    margin-inline: auto;

    h1
    {
        text-align: center;
    }
    
    footer
    {
        text-align: center;
    }

    h5
    {
        margin-block-start: 0px;
        margin-block-end: 8px;
    }

    @media screen and (max-width: 600px)
    {
        padding-inline: 0px;
    }
`;

export default Container;