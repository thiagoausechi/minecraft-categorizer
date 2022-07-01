import styled from "styled-components";

import BookBackground from "../../../assets/img/book.png";

const Book = styled.div`
    --book-scale: 60vh;

    width: var(--book-scale);
    height: calc(var(--book-scale) * 1.234);
    padding:
        calc(var(--book-scale) * 0.105)
        calc(var(--book-scale) * 0.100)
        calc(var(--book-scale) * 0.094)
        calc(var(--book-scale) * 0.108);

    color: black;
    font-size: calc(var(--book-scale) * 0.04);
    word-break: keep-all;
    text-align: left;
    line-height: calc(var(--book-scale) * 0.062);

    background: url(${BookBackground}) no-repeat center top;
    background-size: cover;

    @media screen and (max-width: 600px)
    {
        --book-scale: 90vw;
    }
`;

export default Book;