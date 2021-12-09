// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";

const SecondHeader = (props) => {
  const PageTitle = props.title;
  return (
    <div>
      <Header>{PageTitle}</Header>
    </div>
  );
};

const Header = styled.div`
  height: 30px;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  border-bottom: 0.2px solid #fbd986;
  @media screen and (min-height: 1366px) {
    height: 60px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
    height: 20px;
  }
`;

export default SecondHeader;
