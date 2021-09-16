import React from "react";

/* == components*/
import { ProgressBar, Calendar } from "..";

/* == Library - style */
import styled from "styled-components";

const Mywork = () => {
  return (
    <Wrapper>
      <p>
        이달의 disCATch : 20일 <span>아주 멋져요 !!!😻👍</span>
      </p>
      <ProgressBar />
      <Calendar />
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
