// LIBRARYc
import axios from "axios";

// FUNCTION
import { getToken, setToken } from "./token";

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "http://52.78.241.50/",
});

setToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOTI5ODgwMjgyIiwiaWF0IjoxNjMzNzY0MjM5LCJleHAiOjE2MzM3NzE0Mzl9.FvgfgkNwVZAWZFQ0qk2RihjeTIxsPUJtDOFbAaKvTlI');

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";
  config.headers["Authorization"] = getToken();
  return config;
});

export const userApi = {};
export const myPageApi = {
  getNotice: () => instance.get("/mypage/notice"),
  getOneNotice: (noticeId) => instance.get(`/mypage/notice/${noticeId}`),
};
export const catApi = {
  getCatLocation: (location, size) =>
    instance.get(`/cat/${location}?page=1&size=${size}`),
  getCatCalendar: (catId) => instance.get(`/cat/calendar/${catId}`),
  getCatGallery: (catId, page, size) =>
    instance.get(`/cat/gallery/${catId}?page=${page}&size=${size}`),
  getCatDiary: (catId, page, size) =>
    instance.get(`/cat/diary/${catId}?page=${page}&size=${size}`),

  getCatComment: (catId, size) =>
    instance.get(`/cat/comment/${catId}?page=0&size=${size}`), // cat 댓글 더보기 -> 작업 후 모든 주석 제거 예정 ✅
  createCatComment: () => instance.post("/cat/comment"),
  deleteCatComment: () => instance.delete("/cat/comment"),

  createCatDetail: (catId, newPost) =>
    instance.post(`/cat/detailCreate/${catId}`, newPost), // cat 상세정보 작성
  updateCatDetail: () => instance.put("/cat/detailUpdate"), // cat 상세정보 수정
  deleteCatDetail: () => instance.delete("/cat/detailDelete"),

  catFavorite: () => instance.post("/cat/favorite"),
};

export const communityApi = {
  createCommunity: (postInfo) => instance.post("/community/create", postInfo),
  getCommunity: (category, location, limit) =>
    instance.get(
      `/community/category/${category}?page=1&size=${limit}&location=${location}`
    ),
  getMoreCommunity: (category, start, limit, location) =>
    instance.get(
      `/community/category/${category}?page=${
        start + 1
      }&size=${limit}&location=${location}`
    ),
  getDetailCommunity: (communityId) =>
    instance.get(`/community/${communityId}`),
  updateCommunity: (
    category,
    editcontents,
    editImageList,
    location,
    editTitle,
    username,
    communityId
  ) =>
    instance.put(`/community/${communityId}`, {
      category: category,
      contents: editcontents,
      image: editImageList,
      location: location,
      title: editTitle,
      username: username,
    }),
  deleteCommunity: (communityId) =>
    instance.delete(`/community/${communityId}`),
  createCommunityComment: (contents, communityId) =>
    instance.post(`/community/comment/${communityId}`, { contents }),
  deleteCommunityComment: (communityId) =>
    instance.delete(`/community/comment/${communityId}`),
};

export default instance;
