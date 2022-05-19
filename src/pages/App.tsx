import { useState } from "react";
import styled from "styled-components";

import CategoriesSection from "../components/containers/CategoriesSection";
import ItemsSection from "../components/containers/ItemsSection";

import DummyState from "../data/state.dummy.json";
import { Category } from "../lib/CategoriesType";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 550px)
  {}

  @media screen and (max-width: 1023px)
  {
    flex-direction: column;
  }
`;

interface StateProps
{
  uncategorized: string[],
  categories: { [key: string]: Category };
  categories_order: string[],
};

const App = () =>
{
  const [state, setState] = useState<StateProps>({ ...DummyState });

  return (
    <Wrapper>
      <CategoriesSection categories={state.categories} order={state.categories_order} />
      <ItemsSection items={state.uncategorized} />
    </Wrapper>
  );
}

export default App;