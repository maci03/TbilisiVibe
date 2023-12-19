import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, SpringValue } from 'react-spring';
import MenuBar from './MenuBar';
import Title from './Title';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Set height to 100vh to cover the entire viewport */
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: url('https://images.unsplash.com/photo-1528833719242-ad363bd3a0ce?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat fixed; /* Set background-size to cover */
  background-position: center;
`;

interface ContentWrapperProps {
  style?: React.CSSProperties;
}

interface FadeInProps {
  opacity: SpringValue<number>;
}

const ContentWrapper = styled(animated.div)<ContentWrapperProps>`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.1em;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }

  @media (min-width: 1024px) {
    font-size: 1.8em;
  }
`;

const FixedTopMenu = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ff8c00;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1;
`;

const MainPage: React.FC = () => {
  const fadeIn = useSpring<FadeInProps>({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Container>
      <FixedTopMenu>
        <MenuBar />
      </FixedTopMenu>
      <animated.div style={fadeIn}>
        <ContentWrapper>
          <Title />
          <p>Welcome to Tbilisi Vibe, your guide to the best cafe bars and restaurants in Tbilisi. Explore and enjoy the vibrant culinary scene!</p>
          {/* Add more content as needed */}
        </ContentWrapper>
      </animated.div>
    </Container>
  );
};

export default MainPage;
