/**
 * kakao oauth REST API KEY (.gitignore 추가)
 * AWS S3 id & key
 */
/* == KAKAO REST API KEY */
const API_KEY = process.env.REACT_APP_KAKAO_JAVASCRIPT;

/* == dev.environment  - Redirect URI */
/* == dev.environment  - kakao oauth url - 로그인 시 이동하게 되는 카카오 로그인 동의 페이지 */
const dev_redirect_uri = "http://localhost:3000/user/kakao/callback";
const dev_oauthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${dev_redirect_uri}&response_type=code`;

/* == production       - Redirect URI  */
/* == production       - kakao oauth url */

export { dev_oauthURL };
