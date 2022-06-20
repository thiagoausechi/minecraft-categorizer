import styled from "styled-components";

const ItemPreview = styled.div<{ index: number, position: number }>`
    z-index: ${p => p.index};
    transform: ${p => `translate(${p.position * 10}px, 0px)`};
`

export default ItemPreview;