import styled from "styled-components";

const ButtonsWrapper: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`

const Grid = styled.div`
    display: grid;
    width: fit-content;

    grid-template-columns: auto auto auto auto;
    gap: 5px
`

ButtonsWrapper.Grid = Grid;

export default ButtonsWrapper;