import styled from "styled-components";

const Panel: any = styled.div<{ fullWidth: boolean }>`
    width: ${p => p.fullWidth ? "" : "fit-content"};
    height: fit-content;
    padding: 12px;

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
`;

const Title = styled.h3`
    margin-block-start: 0px;
`;

Panel.Title = Title;

export default Panel;