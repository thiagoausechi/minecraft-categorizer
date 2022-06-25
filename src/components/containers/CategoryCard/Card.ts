import styled from "styled-components";

const Card: any = styled.div`
    width: 100%;
    display: inline-block;
`;

const TabHolder = styled.div`
    &:after
    {
        display: block;
        clear: both;
        content: "";
    }
`;

const Tab = styled.div`    
    margin: 0px 8px;
    float: left;
    padding: 12px;

    background-color: #C6C6C6;

    box-shadow:
     4px  0px 0px 0px #555555,
    -4px  0px 0px 0px #E8E8E8,
    -2px -2px 0px 0px #E8E8E8,
    -2px -4px 0px 0px #E8E8E8,
    -4px -2px 0px 0px #E8E8E8,
     0px -4px 0px 0px #E8E8E8,
     0px  2px 0px 0px #C6C6C6,
     0px  0px 0px 2px #B5B4B5,
    -6px  0px 0px 0px #000000,
    -6px -2px 0px 0px #000000,
     6px  0px 0px 0px #000000,
    -2px -6px 0px 0px #000000,
     0px -6px 0px 0px #000000,
    -4px -4px 0px 0px #000000,
     2px -4px 0px 0px #000000,
     4px -2px 0px 0px #000000,
     4px -2px 0px 0px #000000;
`;

Card.TabHolder = TabHolder;
Card.Tab = Tab;

export default Card;