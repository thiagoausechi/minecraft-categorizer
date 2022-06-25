import styled from "styled-components";

import "@szhsin/react-menu/dist/index.css";
import { ControlledMenu as MenuInner } from "@szhsin/react-menu";
import { menuItemSelector, menuSelector } from "@szhsin/react-menu/style-utils";

const Menu: any = styled(MenuInner)`

    ${menuSelector.stateOpen}
    {
        max-height: 95vh;

        border-radius: 0px;
        background-color: #c6c6c6;
        box-shadow:
            4px  0px 0px 0px #555555,
            0px  4px 0px 0px #555555,
            2px  2px 0px 0px #555555,
           -4px  0px 0px 0px #e8e8e8,
            0px -4px 0px 0px #e8e8e8,
           -2px -2px 0px 0px #e8e8e8,
            2px  4px 0px 0px #555555,
            4px  2px 0px 0px #555555,
           -2px -4px 0px 0px #e8e8e8,
           -4px -2px 0px 0px #e8e8e8,
            0px  0px 0px 2px #B5B4B5,
            4px -2px 0px 0px #000000,
            2px -4px 0px 0px #000000,
           -4px  2px 0px 0px #000000,
           -2px  4px 0px 0px #000000,
           -4px -4px 0px 0px #000000,
            4px  4px 0px 0px #000000,
           -6px  0px 0px 0px #000000,
           -6px -2px 0px 0px #000000,
            6px  0px 0px 0px #000000,
            6px  2px 0px 0px #000000,
            0px -6px 0px 0px #000000,
           -2px -6px 0px 0px #000000,
            0px  6px 0px 0px #000000,
            2px  6px 0px 0px #000000;
    }

    ${menuSelector.dirRight}, 
    ${menuSelector.dirLeft}
    {
        overflow-y: auto;
    }

    ${menuItemSelector}
    {
        img, svg
        {
            margin-right: 8px;
        }
    }

    ${menuItemSelector.name}
    {
        padding-inline: 12px;
    }
`;

export default Menu;