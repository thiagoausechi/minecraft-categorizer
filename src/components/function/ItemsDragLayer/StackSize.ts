import styled from "styled-components";

const StackSize = styled.h3<{ index: number }>`
    z-index: ${p => p.index};
    transform: translate(55px, -17px);
`

export default StackSize;