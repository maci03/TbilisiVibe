
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`

  width: 100%;
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 0 15px;
  font-size: 1.2em;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


const MenuBar: React.FC = () => {
  return (
    <Wrapper>
      <List>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </List>
    </Wrapper>
  );
};

export default MenuBar;
