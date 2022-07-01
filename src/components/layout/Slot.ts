import styled from "styled-components";

import Check from "../../assets/img/check.png";

const Slot = styled.div<{ selected?: boolean, empty?: boolean, checked?: boolean }>`
    display: block;

    background-color: ${p => p.selected ? "#E25643" : "#8B8B8B"};

    width: 36px;
    height: 36px;

    border-color: ${p => p.selected ? "#672215 #D6827F #D6827F #672216" : "#373737 #FFFFFF #FFFFFF #373737"};
    border-style: solid;
    border-width: 2px;

    &:hover
    {
        background-color: ${p => p.empty ? "#FFFFFF66" : ""};
    }

    &:after
    {
        content: "";
        display: ${p => p.checked && !p.empty ? "block" : "none"};
        background-image: url(${Check});
        background-size: 24px 24px;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 10px;
        left: 10px;
        pointer-events: none;
    }
`;

export default Slot;