import * as React from "react";
import styled from "styled-components";

import { CardProps, Params } from "../../../lib/types";

export const Card: React.FC<CardProps> = ({
  name,
  picture,
  country,
  params,
}) => (
  <CardWrapper>
    <div>
      <PictureWrapper>
        <PictureCard picture={picture} />
      </PictureWrapper>
      <span>{name}</span>
      <span>{country}</span>
    </div>
    <Parameters params={params} />
  </CardWrapper>
);

export const PictureCard = styled.div<{ picture?: string }>`
  background-image: url(${({ picture }) => picture});
  background-color: grey;
  background-size: cover;
  cursor: pointer;
  width: 300px;
  height: 200px;
  border-radius: 9px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ParamsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  width: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
`;

export const PictureWrapper = styled.div`
  padding-bottom: 10px;
`;

export const Parameters: React.FC<{ params: Params[] }> = ({ params }) => {
  if (!params) {
    return <ParamsBlock />;
  }

  return (
    <ParamsBlock>
      {params.map((param) => (
        <ParamIcon alt={param} />
      ))}
    </ParamsBlock>
  );
};

export const ParamIcon = styled.img`
  width: 20px;
  height: 20px;
  background-color: grey;
  margin: 5px 0 5px;
`;
