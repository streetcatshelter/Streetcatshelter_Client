// LIBRARY
import React from "react";

// STYLE
import styled from "styled-components";
import Google from "../../styles/images/icon-Google.png";

const GoogleLoginBtn = () => {
  return (
    <div>
      <LoginBtn
        background="#FFFFFF"
        onClick={() => {
          window.open(
            "https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&response_type=code&client_id=942030155154-umcoqj12iejta6r6nulph49tnt0o9fop.apps.googleusercontent.com&redirect_uri=http://discatch-274d1.web.app/user/google/callback",
            "_blank"
          );
        }}
      >
        <Img
          src={Google}
          alt={Google}
          width="28px"
          height="28px"
          margin="auto 11px"
        />
        <p>구글로 로그인하기 </p>
      </LoginBtn>
    </div>
  );
};

const LoginBtn = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  margin: 10px 0px;
  background: ${(props) => props.background};
  border-radius: 10px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
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
const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
`;

export default GoogleLoginBtn;
