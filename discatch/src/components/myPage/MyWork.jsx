// LIBRARY
import React from "react";

// COMPONENTS
import { ProgressBar, Calendar, SecondSpinner } from "..";

// STYLE
import styled from "styled-components";

import { useSelector } from "react-redux";
const Mywork = () => {
  const isLoaded = useSelector((state) => state.mypage.itemLoaded);
  return (
    <Wrapper>
      <ProgressBar />
      <Calendar path="mypage" />
      <SecondSpinner visible={isLoaded} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 10px auto;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0px;
  }
  span {
    margin-left: 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export default Mywork;
