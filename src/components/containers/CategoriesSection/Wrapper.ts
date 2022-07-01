import styled from "styled-components";

const Wrapper = styled.div`
    width: max(50vw, 510px);

    @media screen and (max-width: 600px)
    {
        width: max(90vw, 268px);
    }
`

export default Wrapper;