// STYLE
import { css } from 'styled-components';

export const borderBox = (radius = '3px', padding = 0) => {
  return css`
    box-sizing: border-box;
    padding: ${padding};
    border-radius: ${radius};
  `;
};

export const flexBox = (sortHoz = 'center', sortVer = 'center') => {
  return css`
    display: flex;
    justify-content: ${sortHoz};
    align-items: ${sortVer};
  `;
};

export const flexHoz = (sort = 'center') => {
  return css`
    display: flex;
    justify-content: ${sort};
  `;
};

export const flexVer = (sort = 'center') => {
  return css`
    display: flex;
    align-items: ${sort};
  `;
};

const theme = {
  palette: {
    ivory: '251, 230, 185',
    yellow: '251, 216, 134',
    brown: '209, 155, 97',
    olive: '203, 207, 94',
    bgColor: '254, 253, 248',
    black: '25, 25, 25',
    white: '255, 255, 255',
    lightGray: '211,211,211',
    D_ivory: '249, 219, 155',
    D_yellow: '249, 200, 82',
    D_brown: '190, 112, 29',
    D_olive: '181, 187, 25',
    diaryColor: '252, 246, 222',
  },

  size: {
    defaultWidth: '540px',
  },
};

export default theme;
