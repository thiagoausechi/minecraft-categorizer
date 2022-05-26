import styled from "styled-components";
import ItemIcon from "../../layout/ItemIcon";
import Slot from "../../layout/Slot";

const Control = styled.span`
    position: relative;
    display: block;

    cursor: grab;

    &:hover, ${ItemIcon.Icon}:hover + ${Slot}
    {
        background-color: #FFFFFF66;
    }

    img
    {
        transform: translate(6%, 6%);
    }
`;

export default Control;