import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";
const UserInfo = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <p>닉네임</p>
          <input />
        </Inner>
        <Inner>
          <p>내동네</p>
          <input />
        </Inner>
        <Inner>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            등록
          </button>
        </Inner>
      </Wrapper>
    </React.Fragment>
  );
};

const Inner = styled.div`
  width: 75%;
  display: inherit;
  flex-direction: inherit;
  margin-top: 10px;

  p {
    justify-content: flex-start;
    text-size: 16px;
    font-weight: 700;
    margin-left: 5px;
  }
  input {
    height: 35px;
    border: 1px solid #b5bb19;
    border-radius: 10px;
  }
  button {
    background: #f9c852;
    width: 114px;
    height: 32px;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    justify-content: center;
    margin: 30px auto 0px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default UserInfo;
