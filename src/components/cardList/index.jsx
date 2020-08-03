import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from '../card';

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 75%;
  @media (min-width: 375px) {
    flex: 0 0 100%;
    order: 1;
  }
`;
const bgColor = [
  '#6F98A8',
  '#2B8EAD',
  '#333333',
  '#2B8EAD',
  '#333333',
  '#bfbfbf',
  '#bfbfbf',
  '#6F98A8',
  '#333333',
  '#2F454E',
];
const CardList = ({ data }) => {
  return (
    <ItemContainer>
      {data.map((v) => (
        <Card value={v} bgColor={bgColor[v - 1]} />
      ))}
    </ItemContainer>
  );
};

export default CardList;
