import React from "react";

import styled from "styled-components";

/* == components*/
import { Header, Menu } from "./";

/* == Custom - Elements*/
import { Grid } from "../elements";

const Template = (props) => {
  const path = props.props.match.path;
  return (
    <>
      <Background />
      <Wrapper>
        <Content>
          {props.page === "slider" || props.page === "login" ? (
            <> {props.children}</>
          ) : (
            <>
              <Header path={path} />
              <>{props.children}</>
              <Menu />
            </>
          )}
        </Content>
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
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  max-width: 420px;
  width: 100vw;
  height: 100%;
  background: #fefdf8;
`;

export default Template;
