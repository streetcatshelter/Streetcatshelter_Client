import React, { useState } from "react";

/* == Library - style */
import styled from "styled-components";
import SearchAddress from "./SearchAddress";
/* == Redux */
import { history } from "../../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { deleteVillage, mypageActions } from "../../redux/modules/mypage";

import { XCircle } from "react-feather";
const UserInfo = (edit) => {
  const dispatch = useDispatch();
  const UserInfo = useSelector((state) => state.mypage.userInfo);
  const [NickName, setNickName] = useState(UserInfo.nickname);
  const Village = useSelector((state) => state.mypage.userVillage);
  const changeNickName = (e) => {
    setNickName(e.target.value);
  };

  const EditMyInfo = () => {
    console.log(NickName, Village);
    dispatch(mypageActions._editMyInfo(NickName, Village));
  };
  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <p>닉네임</p>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            onChange={changeNickName}
            defaultValue={NickName}
          />
        </Inner>
        <Inner>
          <p>내동네</p>
          {Village ? (
            <VillageWrap>
              {Village.map((town, idx) => {
                if (town === null) {
                  return "";
                }
                return (
                  <div
                    style={{ display: "flex", width: "90px", height: "20px" }}
                  >
                    <div>{town}</div>
                    <XCircle
                      width="18px"
                      height="18px"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(deleteVillage(town))}
                    />
                  </div>
                );
              })}
            </VillageWrap>
          ) : (
            ""
          )}
        </Inner>
        <SearchAddress Village={Village} />

        <Inner>
          <button onClick={EditMyInfo}>등록</button>
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
    background: #cbcf52;
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

const VillageWrap = styled.div`
  height: 35px;
  border: 1px solid #b5bb19;
  border-radius: 10px;
  padding: 2px;
  display: flex;
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
