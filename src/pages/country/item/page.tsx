import * as React from "react";
import { reflect } from "@effector/reflect";
import { createStore, createEvent } from "effector";
import styled from "styled-components";

import { LocationProps } from "types";
import { Card } from "ui";
import { useParams } from "react-router-dom";

export const $locations = createStore<LocationProps[]>([]);
export const start = createEvent<string>();

const CountryBlock: React.FC<{ locations: LocationProps[] }> = ({
  locations,
}) => {
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    start(id);
  }, []);

  if (locations.length === 0) {
    return null;
  }

  return (
    <>
      {locations.map((location, key) => (
        <CardWrapper key={key}>
          <Card {...location} country="" />
        </CardWrapper>
      ))}
    </>
  );
};

export const CardWrapper = styled.div`
  padding: 10px;
`;

export const Country = reflect({
  view: CountryBlock,
  bind: {
    locations: $locations,
  },
});
