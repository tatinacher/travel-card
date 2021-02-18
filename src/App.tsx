import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { cards } from "./mock/cards";
import { Card } from "./ui/organisms/card";

export const App = () => (
  <Cards>
    {cards.map((card) => (
      <CardWrapper>
        <Card {...card} />
      </CardWrapper>
    ))}
    <GlobalStyle />
  </Cards>
);

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    }
`;

export const CardWrapper = styled.div`
  padding: 10px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
