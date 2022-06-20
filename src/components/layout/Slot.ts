import styled from "styled-components";

const Slot = styled.div<{ selected?: boolean }>`
    display: block;

    background-color: ${p => p.selected ? "#8B2929" : "#8B8B8B"};

    width: 36px;
    height: 36px;

    border-color: #373737 #FFFFFF #FFFFFF #373737;
    border-style: solid;
    border-width: 2px;

    &:hover
    {
        background-color: #FFFFFF66;
    }
`;

export default Slot;