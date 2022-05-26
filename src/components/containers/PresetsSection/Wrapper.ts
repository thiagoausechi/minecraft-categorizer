import styled from "styled-components";

import { AppPanelsWidth } from "../../GlobalStyle";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;

  width: max(20vw, 400px);

  @media screen and (max-width: 1075px)
  {
    width: 510px;
  }

  @media screen and (max-width: 600px)
  {
    width: ${AppPanelsWidth};
  }
`

export default Wrapper;