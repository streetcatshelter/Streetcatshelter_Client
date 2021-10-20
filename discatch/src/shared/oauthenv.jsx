/**
 * kakao oauth REST API KEY (.gitignore 추가)
 * AWS S3 id & key
 */
/* == KAKAO REST API KEY */
const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_JAVASCRIPT;
const KAKAO_LOGIN_API_KEY = process.env.REACT_APP_KAKAO_LOGIN_JAVASCRIPT;

const NAVER_API_KEY = process.env.REACT_APP_NAVER_CLIENT_ID;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_CLIENT_ID;
/* == dev.environment  - Redirect URI */
/* == dev.environment  - kakao oauth url - 로그인 시 이동하게 되는 카카오 로그인 동의 페이지 */
const dev_redirect_uri = 'http://localhost:3000/user/kakao/callback';
const dev_oauthKaKaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=72c9cbb1bde313a29adeb139f25e2ece&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code`;
const dev_oauthNaverURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_API_KEY}&redirect_uri=http://localhost:3000/user/naver/callback&response_type=code`;

// const dev_oauthGoogleURL = `
/* == production       - Redirect URI  */
/* == production       - kakao oauth url */

export { dev_oauthKaKaoURL, dev_oauthNaverURL, GOOGLE_API_KEY };
