import React from "react";

import { Template } from "../components";

/* == Library - style */
import styled from "styled-components";

/* == Custom - Icon */
import Kakao from "../styles/images/icon-Kakao.png";
import Naver from "../styles/images/icon-Naver(G).png";
import Google from "../styles/images/icon-Google.png";

const login = (props) => {
  return (
    <Template props={props} page="login">
      <Wrapper>
        <Inner>
          <Head>
            <p>
              dis<span>C</span>
              <span>A</span>
              <span>T</span>ch
            </p>
          </Head>
          <Header>1초만에 우리동네 집사되기 !</Header>
          <Body>
            <LoginWrap>
              <Login background="#F7E600">
                <Img
                  src={Kakao}
                  alt={Kakao}
                  width="50px"
                  height="50px"
                  borderRadius="10px"
                />
                <p>카카오로 로그인하기</p>
              </Login>
              <Login background="#03c75a">
                <Img
                  src={Naver}
                  alt={Naver}
                  width="50px"
                  height="50px"
                  borderRadius="10px"
                />
                <p style={{ color: "#ffffff" }}>네이버로 로그인하기</p>
              </Login>
              <Login background="#FFFFFF">
                <Img
                  src={Google}
                  alt={Google}
                  width="28px"
                  height="28px"
                  margin="auto 11px"
                />
                <p>구글로 로그인하기 </p>
              </Login>
            </LoginWrap>
          </Body>
        </Inner>
      </Wrapper>
    </Template>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: #fef7ea;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fefdf8;
  width: 90%;
  height: 600px;
  margin: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const Head = styled.div`
  height: 35%;
  margin: auto;
  p {
    font-size: 45px;
    font-weight: 700;
    color: #fbd986;
    margin-top: 55%;
  }
  span {
    font-size: 50px;
    font-weight: 800;
    color: #cbcf52;
    :nth-child(2) {
      color: #d19b61;
    }
  }
`;
const Header = styled.p`
  color: #b5bb19;
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 10px;
`;
const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Login = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  margin: 10px 0px;
  background: ${(props) => props.background};
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  p {
    font-size: 15px;
    font-weight: 800;
    color: #191919;
  }
`;

const Body = styled.div`
  height: 65%;
`;

export default login;
