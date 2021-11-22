// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";

// COMPONENTS
import { Header, Menu } from "./";

const Template = (props) => {
  const path = props.props.match.path;
  const location = props.location
    ? props.location
    : props.props.location?.state?.pathLocation;

  return (
    <>
      <Background />
      <Wrapper>
        {props.page === "slider" || props.page === "login" ? (
          <Content margin="0px auto"> {props.children} </Content>
        ) : (
          <Content margin="60px auto">
            <Header path={path} location={location} />
            <>{props.children}</>
            <Menu props={props} />
          </Content>
        )}
      </Wrapper>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  background: #fefdf8;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin};
  max-width: 420px;
  width: 100vw;
  height: 100%;
  background: #fefdf8;
`;

export default Template;
