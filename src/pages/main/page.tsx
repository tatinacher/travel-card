import * as React from "react";
import styled from "styled-components";
import { createEvent, createStore } from "effector";
import { reflect } from "@effector/reflect";

import { CountiresProps } from "types";
import { Link } from "react-router-dom";
import { Search } from "ui";

export const $countries = createStore<CountiresProps[] | null>(null);
export const start = createEvent();

export const Main: React.FC = () => (
  <Cards>
    <Countries />
  </Cards>
);

export const CountriesList: React.FC<{
  countires: CountiresProps[] | null;
}> = ({ countires }) => {
  console.log("countires", countires);

  if (!countires) {
    return null;
  }
  return (
    <div>
      <Search />
      <div>
        {countires.map(({ name, id }) => (
          <Link to={`/country/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Countries = reflect({
  view: CountriesList,
  bind: {
    countires: $countries,
  },
  hooks: {
    mounted: start,
  },
});

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
