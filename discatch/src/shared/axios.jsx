// LIBRARY
import axios from "axios";

// FUNCTION
import { getToken } from "./token";

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "http://52.78.241.50/",
  // baseURL: 'http://3.35.139.51/',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = getToken();
  }
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Accept"] = "*/*";
  return config;
});

export const userApi = {
  getKakao: (authorization_code) =>
    instance.get(`/user/kakao/callback/?code=${authorization_code}`),
  getNaver: (authorization_code) =>
    instance.get(`/user/naver/callback?code=${authorization_code}`),
  getGoogle: (authorization_code) =>
    instance.get(`/user/google/callback?code=${authorization_code}`),
};

export const chatApi = {
  getRooms: () => instance.get(`/api/chat/rooms`),
  getRoomInfo: (roomId) => instance.get(`/api/chat/enter/${roomId}`),
  createRoom: (chatuser) => instance.post("/api/chat/create", chatuser),
  getAllMessage: (roomId) => instance.get(`/api/chat/message/${roomId}`),
  deleteRoom: (roomId) => instance.put(`/api/chat/quit/${roomId}`),
};
export const myPageApi = {
  getNotice: () => instance.get("/mypage/notice"),
  getOneNotice: (noticeId) => instance.get(`/mypage/notice/${noticeId}`),
  getCalendar: (year, month) =>
    instance.get(`/mypage/calendar?year=${year}&month=${month}`),
  getCalendarDetail: (year, month, elm) =>
    instance.get(`/mypage/calendar/day/${elm}?year=${year}&month=${month}`),
  getLikedAllCat: () => instance.get("/mypage/mycat"),
  getUserInfo: () => instance.get("/mypage/user/information"),
  getLevelUp: () => instance.get("/leveluptest"),
};

export const catApi = {
  getCatLocation: (location, limit) =>
    instance.get(`/cat/${location}/?page=1&size=${limit}`),
  getMoreCat: (location, start, limit) =>
    instance.get(`/cat/${location}/?page=${start + 1}&size=${limit}`),
  getCatDetail: (catDetailId) => instance.get(`/cat/detail/${catDetailId}`),
  getCatInfo: (catId) => instance.get(`/cat/info/${catId}`),
  getCatCalendar: (catId, month, year) =>
    instance.get(`/cat/calender/${catId}/?month=${month}&year=${year}`),
  getCatGallery: (catId, size) =>
    instance.get(`/cat/gallery/${catId}/?page=1&size=${size}`),
  getCatDiary: (catId, size) =>
    instance.get(`/cat/diary/${catId}/?page=1&size=${size}`),
  getComment: (catId, size) =>
    instance.get(`/cat/comment/${catId}/?page=1&size=${size}`),
  getDetailComment: (catDetailId, size) =>
    instance.get(`/cat/detail/comment/${catDetailId}/?page=1&size=${size}`),
  createCatComment: (catId, contents) =>
    instance.post(`/cat/comment/${catId}`, { contents }),
  createCatDetailComment: (catDetailId, contents) =>
    instance.post(`/cat/detail/comment/${catDetailId}`, { contents }),
  deleteCatComment: (commentId) => instance.delete(`/cat/comment/${commentId}`),
  deleteCatDetail: (catDetailId) =>
    instance.delete(`/cat/detail/${catDetailId}`),
  catLike: (catId) => instance.post(`/cat/like/${catId}`),
  catDetailLike: (catDetailId) =>
    instance.post(`/cat/detail/like/${catDetailId}`),
  editCatInfo: (catInfo, catId) => instance.put(`/cat/${catId}`, catInfo),
  editCatDetailInfo: (detailInfo, catDeatilId) =>
    instance.put(`/cat/detail/${catDeatilId}`, detailInfo),
};

export const communityApi = {
  createCommunity: (postInfo) => instance.post("/community/create", postInfo),
  getCommunity: (category, location, limit) =>
    instance.get(
      `/community/category/${category}/?page=1&size=${limit}&location=${location}`
    ),
  getMoreCommunity: (category, start, limit, location) =>
    instance.get(
      `/community/category/${category}/?page=${
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
