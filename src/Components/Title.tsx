import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: white;
  font-size: 3em;
  margin-bottom: 20px;
`;

const Title: React.FC = () => {
  return <Header>Tbilisi Vibe</Header>;
};

export default Title;
