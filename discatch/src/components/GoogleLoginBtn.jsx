import React from "react";
import GoogleLogin from "react-google-login";
import { GOOGLE_API_KEY } from "../shared/oauthenv";
import Google from "../styles/images/icon-Google.png";
import styled from "styled-components";
export default function GoogleButton({ onSocial }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;
    // await
    //  onSocial({
    //     socialId : googleId,
    //     socialType : 'google',
    //     email,
    //     nickname : name
    // });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={GOOGLE_API_KEY}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={(renderProps) => (
          <LoginBtn
            background="#FFFFFF"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
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
        )}
      />
    </div>
  );
}

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
