import styled from "styled-components";

const StackPreview = styled.div.attrs<any>(p => ({
    style: {
        transform: !p.currentOffset ? "" :
            `translate(${p.currentOffset.x}px, ${p.currentOffset.y}px)`
    }
}
)) <any>`
    position: absolute;
    transform-origin: bottom left;
    backface-visibility: hidden;
`;

export default StackPreview;