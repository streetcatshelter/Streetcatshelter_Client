// import React from "react";
// import GoogleLogin from "react-google-login";
// import { GOOGLE_API_KEY } from "../shared/oauthenv";
// import Google from "../styles/images/icon-Google.png";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { userActions } from "../redux/modules/user";
// export default function GoogleButton({ onGoogleLogin }) {
//   const dispatch = useDispatch();
//   const onSuccess = (response) => {
//     const authorization_code = response.tokenId;
//     dispatch(userActions._loginGoogle(authorization_code));
//   };

//   const onFailure = (error) => {
//     console.log(error);
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={GOOGLE_API_KEY}
//         responseType={"id_token"}
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         render={(renderProps) => (
//           <LoginBtn
//             background="#FFFFFF"
//             onClick={renderProps.onClick}
//             disabled={renderProps.disabled}
//           >
//             <Img
//               src={Google}
//               alt={Google}
//               width="28px"
//               height="28px"
//               margin="auto 11px"
//             />
//             <p>구글로 로그인하기 </p>
//           </LoginBtn>
//         )}
//       />
//     </div>
//   );
// }

import React from "react";
import styled from "styled-components";
import Google from "../styles/images/icon-Google.png";
import { history } from "../redux/configureStore";
const GoogleLoginBtn = () => {
  return (
    <div>
      <LoginBtn
        background="#FFFFFF"
        onClick={() => {
          window.open(
            "https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&response_type=code&client_id=942030155154-umcoqj12iejta6r6nulph49tnt0o9fop.apps.googleusercontent.com&redirect_uri=http://localhost:3000/user/google/callback",
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

export default GoogleLoginBtn;

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
