import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import CardList from './components/cardList';
import Button from './components/button';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 375px) {
  }
`;
const ButtonContainer = styled.div`
  flex: 0 0 25%;
  @media (min-width: 375px) {
    flex: 0 0 100%;
  }
`;
const App = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const shuffled = (d) =>
    d
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

  const newSortedArray = [...data].sort((a, b) => (a < b ? -1 : 1)); // spread old array values into new array, then sort

  return (
    <AppContainer>
      <CardList data={data} />
      <ButtonContainer>
        <Button onClick={() => setData(shuffled(data))}>Shuffel </Button>
        <Button onClick={() => setData(newSortedArray)}>Sort</Button>
      </ButtonContainer>
    </AppContainer>
  );
};

render(<App />, document.getElementById('root'));
