import styled from "styled-components";

const Panel: any = styled.div<{ fullWidth: boolean }>`
    width: ${p => p.fullWidth ? "" : "fit-content"};
    height: fit-content;
    padding: 15px;

    background-color: #c6c6c6;
    border: 3px solid #000000;
    border-radius: 5px;

    box-shadow: 
        inset 3px 3px 0px 0px #FFFFFFAD, 
        inset -3px -3px 0px 0px #555555;
`;

const Title = styled.h3`
    margin-block-start: 0px;
`;

Panel.Title = Title;

export default Panel;