import styled from "styled-components";

const Top: any = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12px;
`;

const Grow = styled.div`
    flex-grow: 1;
`

Top.Grow = Grow;

export default Top;