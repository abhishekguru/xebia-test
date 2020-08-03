import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 45px;
  padding: 6px 16px;
  margin-bottom: 10px;
  width: 55%;
  background: #72c3dc;
  color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-left: 20%;
  border: unset;
  outline: unset;
  border-radius: 7%;
`;

const Button = ({ children, ...resProps }) => {
  return <StyledButton {...resProps}>{children}</StyledButton>;
};

export default Button;
