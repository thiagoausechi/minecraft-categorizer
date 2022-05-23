import styled from "styled-components";

const Textbox = styled.input<any>`
    width: -webkit-fill-available;
    width: fill-available;

    background-color: #cfcfcf;
    font-family: 'Minecraft';
    padding: 9px;
    border: none;
    box-shadow:
    inset 3px 3px 0px 0px #555,
    inset -3px -3px 0px 0px #ffffffad;

    outline: ${p => p.error ? "3px inset #AA0000" : ""};

    &:hover
    {
        background-color: #d9d9d9;
    }

    &:focus-visible
    {
        outline: 3px inset #000000;
        background-color: #d9d9d9;
    }
`

export default Textbox;