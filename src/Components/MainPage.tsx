
import React from 'react';
import styled from 'styled-components';
import MenuBar from './MenuBar';
import Title from './Title';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f1e8;
  height: 100vh;
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <MenuBar />
      <Title />
      <p>Welcome to Tbilisi Vibe, your guide to the best cafe bars and restaurants in Tbilisi. Explore and enjoy the vibrant culinary scene!</p>
      {/* Add more content as needed */}
    </Container>
  );
};

export default MainPage;
