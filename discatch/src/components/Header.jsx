// library
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';

// style
import { flexBox } from '../shared/style';

// route
import { Link } from 'react-router-dom';

// element
import { Grid, Text } from '../elements';

// icon
import { Search, Bell } from 'react-feather';

const Header = () => {
  const options = useMemo(
    () => [
      { value: '', label: '' },
      { value: '망원동', label: '망원동' },
      { value: '고척동', label: '고척동' },
      { value: '개봉동', label: '개봉동' },
    ],
    [],
  );

  return (
    <HeaderStyle>
      <Grid
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <CustomSelect placeholder="지역" options={options} />

        <Link to="/" style={{ margin: '0 auto', textDecoration: 'none' }}>
          <Text
            color="D_olive"
            size="26px"
            fontWeight="600"
            addstyle={() => {
              return css`
                font-family: 'Walter Turncoat';
                /* font-family: 'Nunito', sans-serif; */
              `;
            }}
          >
            disCATch
          </Text>
        </Link>

        <Search style={{ color: 'gray' }} />
        <Bell style={{ margin: '0 4% 0 3%', color: 'gray' }} />
      </Grid>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
`;

const CustomSelect = styled(Select)`
  width: 95px;
  margin-left: 3%;
  margin-right: -6%;

  // selectBox
  .css-yk16xz-control {
    background: none;
    border: none;
  }

  // placeholder
  .css-1wa3eu0-placeholder {
    color: lightgray;
  }

  // arrow
  .css-tlfecz-indicatorContainer {
  }
`;

export default Header;
