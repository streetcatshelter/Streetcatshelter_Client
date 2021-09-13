import React from "react";
/* == Library - style */
import styled from "styled-components";
/* == Custom - Icon */
import Kakao from "../styles/images/icon-Kakao.png";
import Naver from "../styles/images/icon-Naver(G).png";
import Google from "../styles/images/icon-google.png";
const login = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <Header>1초만에 로그인!</Header>
          <Img src={Kakao} alt={Kakao} />
          <Img src={Naver} alt={Naver} />
          <Img
            style={{ display: "inlineBlock", width: "205px", height: "45px" }}
            src={Google}
            alt={Google}
          />
        </Inner>
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  color: #b4bb19;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Img = styled.img`
  width: 200px;
  height: 40px;
  margin: 10px;
`;

export default login;
