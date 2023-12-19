import React from 'react';
import styled from 'styled-components';

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff8c00;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const MenuBar: React.FC = () => {
  return (
    <StyledMenuBar>
      <MenuItems>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
      </MenuItems>
      <AuthLinks>
        <MenuItem href="#">Login</MenuItem>
        <MenuItem href="#">Sign Up</MenuItem>
        <SearchButton>Search</SearchButton>
      </AuthLinks>
    </StyledMenuBar>
  );
};

export default MenuBar;
