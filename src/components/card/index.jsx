import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  flex: 0 0 33.333333%;
  line-height: 250px;
  text-align: center;
  background: ${({ bgColor }) => bgColor};
  font-size: xxx-large;
  color: #ffffff;
  @media (min-width: 375px) {
    flex: 0 0 100%;
    border-left: 21px solid ${({ bgColor }) => bgColor};
    background: #eeeeee;
    color: #2f454d;
    margin-bottom: 10px;
  }
`;

const Card = ({ value, bgColor }) => {
  return <ListItem bgColor={bgColor}>{value}</ListItem>;
};

export default Card;
