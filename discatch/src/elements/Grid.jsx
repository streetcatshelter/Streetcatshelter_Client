// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../shared/style';

const Grid = ({ children, clickEvent, ...props }) => {
  return (
    <GridStyle onClick={clickEvent} {...props}>
      {children}
    </GridStyle>
  );
};

Grid.defaultProps = {
  opacity: 1,
  addstyle: () => {},
  clickEvent: () => {},
  width: '100%',
  height: '100%',
};

const GridStyle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  background: ${(props) =>
    props.bgColor &&
    `rgba(${props.theme.palette[props.bgColor]}, ${props.opacity})`};
  color: ${(props) =>
    props.color &&
    `rgba(${props.theme.palette[props.color]}, ${props.opacity})`};
  overflow: ${(props) => props.overflow};
  ${(props) => borderBox(props.radius, props.padding)};
  ${(props) => props.addstyle()};
`;

export default Grid;
