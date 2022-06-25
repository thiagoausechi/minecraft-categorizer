import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 20px;

    width: 340px;
    height: 80vh;

    overflow: auto;

    h2
    {
        margin-block-start: 7px;
        margin-block-end: 7px;
    }

    @media screen and (max-width: 1075px)
    {
    }
`

export default Wrapper;