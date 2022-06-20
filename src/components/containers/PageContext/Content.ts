import styled from "styled-components";

const Content = styled.div<{ vh: (s: number) => number }>`
    margin: auto;
    min-height: ${p => `${p.vh(65)}px`};
    width: fit-content;
`;

export default Content;