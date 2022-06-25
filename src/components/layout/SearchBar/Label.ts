import styled from "styled-components";
import Textbox from "../Textbox";

const Label = styled.label`
    & > ${Textbox}
    {
        width: 100%;
    }
`

export default Label;