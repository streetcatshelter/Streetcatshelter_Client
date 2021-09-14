import React, { useState } from "react";
import styled from "styled-components";
import { MoreHorizontal } from "react-feather";
import { history } from "../../redux/configureStore";
const UserInfo = (edit) => {
  const [NickName, setNickName] = useState(edit === "edit" ? "NickName" : "");
  const [MyTown, setMyTown] = useState(edit === "edit" ? "MyTown" : "");
  const changeNickName = (e) => {
    setNickName(e.target.value);
  };

  const changeMyTown = (e) => {
    setMyTown(e.target.value);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <p>닉네임</p>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요!"
            onChange={changeNickName}
            defaultValue={NickName}
          />
        </Inner>
        <Inner>
          <p>내동네</p>
          <input
            type="text"
            placeholder="동네를 입력해주세요!"
            onChange={changeMyTown}
            defaultValue={MyTown}
          />
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
