import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 1075px)
  {
    flex-direction: column;
  }
`

export default Wrapper;