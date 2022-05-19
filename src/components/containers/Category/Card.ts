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

    background-color: #c6c6c6;
    border: 3px solid #000000;
    border-bottom: 0px;
    border-radius: 8px 8px 0px 0px;

    box-shadow: 
        inset 3px 3px 0px 0px #FFFFFFAD,
        inset -3px -3px 0px 0px #555555;
`;

Card.TabHolder = TabHolder;
Card.Tab = Tab;

export default Card;