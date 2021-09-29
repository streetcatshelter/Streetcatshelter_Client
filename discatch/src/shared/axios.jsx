// LIBRARY
import axios from 'axios';

// FUNCTION
import { getToken } from './token';

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'http://52.78.241.50/',
  // baseURL: "http://cc60-175-123-124-9.ngrok.io",
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['Authorization'] = getToken();
  return config;
});

export const loginApi = {
  getKakao: () => instance.get('/oauth2/authorization/kakao'),
  getNaver: () => instance.get('/oauth2/authorization/naver'),
  getGoogle: () => instance.get('/oauth2/authorization/google'),
};

export const catApi = {
  getCatLocation: (location, limit) =>
    instance.get(`/cat/${location}?page=0&size=${limit}`),
  getCatCalendar: (catId) => instance.get(`/cat/calendar/${catId}`),
  getCatGallery: (catId, size) =>
    instance.get(`/cat/gallery/${catId}?page=0&size=${size}`),
  getCatDiary: (catId, size) =>
    instance.get(`/cat/diary/${catId}?page=0&size=${size}`),

  getCatComment: (catId, size) =>
    instance.get(`/cat/comment/${catId}?page=0&size=${size}`), // cat 댓글 더보기 -> 작업 후 모든 주석 제거 예정 ✅
  createCatComment: () => instance.post('/cat/comment'),
  deleteCatComment: () => instance.delete('/cat/comment'),

  createCatDetail: () => instance.post('cat/detailCreate'), // cat 상세정보 작성
  updateCatDetail: () => instance.put('/cat/detailUpdate'), // cat 상세정보 수정
  deleteCatDetail: () => instance.delete('cat/detailDelete'),

  catFavorite: () => instance.post('cat/favorite'),
};

export default instance;
