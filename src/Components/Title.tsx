import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  font-size: 2.5em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Title: React.FC = () => {
  return (
    <TitleContainer>
      <TitleText>TBILISI VIBE</TitleText>
    </TitleContainer>
  );
};

export default Title;
