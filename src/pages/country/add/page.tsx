import * as React from "react";
import styled from "styled-components";
import { reflect } from "@effector/reflect";
import { createStore, createEvent } from "effector";

import { Card } from "../../../ui/organisms/card";
import { cards } from "../../../mock/cards";
import { LocationProps } from "../../../lib/types";

export const $locations = createStore<LocationProps[] | null>(null);
export const start = createEvent();

const CountryBlock: React.FC = () => (
  <>
    {cards.map((card, key) => (
      <CardWrapper key={key}>
        <Card {...card} />
      </CardWrapper>
    ))}
  </>
);

export const CardWrapper = styled.div`
  padding: 10px;
`;

export const CountryAdd = reflect({
  view: CountryBlock,
  bind: {
    countires: $locations,
  },
  hooks: {
    mounted: start,
  },
});
