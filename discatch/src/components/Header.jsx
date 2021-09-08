// library
import React from 'react';
import styled, { css } from 'styled-components';

// style
import { flexBox } from '../shared/style';

// route
import { Link } from 'react-router-dom';

// element
import { Grid, Text } from '../elements';

// icon
import { Search, Bell } from 'react-feather';

const Header = () => {
  return (
    <HeaderStyle>
      <SelectStyle />
      <Search />
      <Bell />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background: olive;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

const SelectStyle = styled.select`
  width: 50px;
  height: 30px;
  background: white;
  outline: none;
`;

export default Header;
