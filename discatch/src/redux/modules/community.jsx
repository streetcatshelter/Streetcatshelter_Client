// API
import { createSlice } from "@reduxjs/toolkit";
import instance, { communityApi } from "../../shared/axios";

// REDUX
import { imgActions } from "./image";

// 커뮤니티 글 등록
export const addCommunityDB = (
  category,
  contents,
  location,
  title,
  detailLocation,
  nickName
) => {
  return function (dispatch, getState, { history }) {
    const path = category.split(" ");
    let pathName = null;
    if (path[1] === "정보글") {
      pathName = "catinfo";
    } else if (path[2] === "모임") {
      pathName = "gathering";
    } else {
      pathName = "sharing";
    }
    dispatch(
      imgActions.uploadImagesDB(() => {
        const imageUrl = getState().image.imageUrls;
        const postInfo = {
          category: category,
          contents: contents,
          image: imageUrl,
          location: location,
          title: title,
          username: nickName,
        };
        instance
          .post("/community/create", postInfo)
          .then((res) => {
            history.push(`/community/${detailLocation}/${pathName}`);
            dispatch(imgActions.setInitialState());
          })
          .catch((err) => {
            console.log(err);
          });
      })
    );
  };
};

// 커뮤니티 글 가져오기
export const getCommunityDB =
  (category, location, page) =>
  async (dispatch, getState, { history }) => {
    try {
      dispatch(itemLoading);
      const data = await communityApi.getCommunity(category, location, page);
      if (category.split(' ')[1] === '정보글') {
        dispatch(getCatInfo(data.data));
      } else if (category.split(' ')[1] === '동네') {
        dispatch(getGathering(data.data));
      } else if (category.split(' ')[1] === '고양이') {
        dispatch(getSharing(data.data));
      }
    } catch (err) {
      window.alert("페이지에 오류가 있어요!");
      console.error(err);
    }
  };

// 커뮤니티 글 상세 가져오기
export const getOneCommunityDB =
  (communityId = "") =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.getDetailCommunity(communityId);
      const category = data.data.category;
      if (category.split(' ')[1] === '정보글') {
        dispatch(getOneCatInfo(data));
      } else if (category.split(' ')[1] === '동네') {
        dispatch(getOneGathering(data));
      } else if (category.split(' ')[1] === '고양이') {
        dispatch(getOneSharing(data));
      }
    } catch (err) {
      console.error(err);
    }
  };

// 커뮤니티 수정
export const editCommunityDB = (
  communityId,
  category,
  editcontents,
  location,
  editTitle,
  username,
  imageList
) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    let path;
    if (category.split(' ')[1] === '정보글') {
      path = 'catinfo';
    } else if (category.split(' ')[1] === '동네') {
      path = 'gathering';
    } else if (category.split(' ')[1] === '고양이') {
      path = 'sharing';
    }
    let newImageUrl = [];
    let newImages = [];
    if (imgFile.length < 6) {
      dispatch(
        imgActions.uploadImagesDB(() => {
          let imageUrl = getState().image.imageUrls;
          newImageUrl.push(
            imageList[0]?.image,
            imageList[1]?.image,
            imageList[2]?.image,
            imageList[3]?.image,
            imageList[4]?.image
          );

          newImages = newImageUrl.filter((element, i) => element !== undefined);
          newImages.push(
            imageUrl[0],
            imageUrl[1],
            imageUrl[2],
            imageUrl[3],
            imageUrl[4]
          );
          const editImageList = newImages.filter(
            (element, i) => element !== undefined
          );
          instance
            .put(`/community/${communityId}`, {
              category: category,
              contents: editcontents,
              image: editImageList,
              location: location,
              title: editTitle,
              username: username,
            })
            .then((res) => {
              dispatch(imgActions.setInitialState());
              window.alert("게시글 수정 완료!");
              history.push(
                `/community/${
                  location.split(" ")[2]
                }/${path}/postdetail/${communityId}`
              );
            })
            .catch((err) => {
              console.log(err);
            });
        })
      );
    } else if (newImages.length > 5) {
      alert("사진은 최대 5장까지 등록할 수 있어요!");
    } else {
      return;
    }
  };
};

// 커뮤니티 글 삭제
export const deleteCommunityDB =
  (communityId, category, location) =>
  async (dispatch, getState, { history }) => {
    const path = category.split(" ");
    let pathName = null;
    if (path.length === 2) {
      pathName = "catinfo";
    } else if (path.length === 3) {
      pathName = "gathering";
    } else {
      pathName = "sharing";
    }
    try {
      const data = await communityApi.deleteCommunity(communityId);
      window.alert("게시물 삭제 완료!");
      history.push(`/community/${location.split(" ")[2]}/${pathName}`);
    } catch (err) {
      console.error(err);
    }
  };

// 커뮤니티 댓글 작성
export const addCommunityCommentDB =
  (contents, communityId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.createCommunityComment(
        contents,
        communityId
      );
      dispatch(getOneCommunityDB(communityId));
    } catch (err) {
      console.error(err);
    }
  };

// 커뮤니티 댓글 삭제
export const deleteCommunityCommentDB =
  (commentId, communityId) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await communityApi.deleteCommunityComment(commentId);
      window.alert("댓글을 삭제했습니다.");
      dispatch(getOneCommunityDB(communityId));
    } catch (err) {
      console.error(err);
      window.alert("댓글을 삭제할 수 없습니다. 다시 시도해주세요!");
    }
  };

// 커뮤니티 글 좋아요
export const communityLikeToggleDB = (communityId) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/community/likeit/${communityId}`)
      .then((res) => {
        dispatch(getOneCommunityDB(communityId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// INITIAL STATE
const initialState = {
  catInfo: [],
  gathering: [],
  sharing: [],
  page: 0,
  pageLoaded: false,
  itemLoaded: false,
};

// REDUCER
const community = createSlice({
  name: "community",
  initialState,
  reducers: {
    addCatInfo: (state, action) => {
      const category = action.payload.category;
      const contents = action.payload.contents;
      const image = action.payload.image;
      const location = action.payload.location;
      const title = action.payload.title;
      const username = action.payload.username;
      const detailLocation = action.payload.username;
      state.catInfo.push(
        category,
        contents,
        image,
        location,
        title,
        username,
        detailLocation
      );
    },
    addGathering: (state, action) => {
      const category = action.payload.category;
      const contents = action.payload.contents;
      const image = action.payload.image;
      const location = action.payload.location;
      const title = action.payload.title;
      const username = action.payload.username;
      const detailLocation = action.payload.username;
      state.gathering.push(
        category,
        contents,
        image,
        location,
        title,
        username,
        detailLocation
      );
    },
    addSharing: (state, action) => {
      const category = action.payload.category;
      const contents = action.payload.contents;
      const image = action.payload.image;
      const location = action.payload.location;
      const title = action.payload.title;
      const username = action.payload.username;
      const detailLocation = action.payload.username;
      state.sharing.push(
        category,
        contents,
        image,
        location,
        title,
        username,
        detailLocation
      );
    },
	
    getCatInfo: (state, action) => {
      return {
        ...state,
        catInfo: [...state.catInfo, ...action.payload],
        itemLoaded: false,
      };
    },
    getGathering: (state, action) => {
      return {
        ...state,
        gathering: [...state.gathering, ...action.payload],
        itemLoaded: false,
      };
    },
    getSharing: (state, action) => {
      return {
        ...state,
        sharing: [...state.sharing, ...action.payload],
        itemLoaded: false,
      };
    },

    getOneCatInfo: (state, action) => {
      state.catInfo = action.payload;
    },
    getOneGathering: (state, action) => {
      state.gathering = action.payload;
    },
    getOneSharing: (state, action) => {
      state.sharing = action.payload;
    },

    editCatInfo: (state, action) => {
      console.log("수정 요청 완료!");
    },
    editGathering: (state, action) => {
      console.log("수정 요청 완료!");
    },
    editSharing: (state, action) => {
      console.log("수정 요청 완료!");
    },

    deleteCatInfo: (state, action) => {
      console.log("삭제 요청 완료!");
    },
    deleteGathering: (state, action) => {
      console.log("삭제 요청 완료!");
    },
    deleteSharing: (state, action) => {
      console.log("삭제 요청 완료!");
    },
    addCatInfoComment: (state, action) => {
      state.catInfo = action.payload;
    },

    getCatInfoComment: (state, action) => {
      state.catInfo = action.payload;
    },
    addGatheringComment: (state, action) => {
      state.gathering = action.payload;
    },

    getGatheringComment: (state, action) => {
      state.gathering = action.payload;
    },
    addSharingComment: (state, action) => {
      state.sharing = action.payload;
    },

    getSharingComment: (state, action) => {
      state.sharing = action.payload;
    },

    deleteCatInfoComment: (state, action) => {
      state.catInfo = action.payload;
    },
    deleteGatheringComment: (state, action) => {
      state.gathering = action.payload;
    },
    deleteSharingComment: (state, action) => {
      state.sharing = action.payload;
    },
    pageLoading: (state, action) => {
      state.pageLoaded = action.payload;
    },

    itemLoading: (state, action) => {
      state.itemLoaded = action.payload;
    },
    resetList: (state, action) => {
      state.catInfo = [];
      state.gathering = [];
      state.sharing = [];
    },
  },
});


export const {
  addCatInfo,
  addGathering,
  addSharing,
  getCatInfo,
  getGathering,
  getSharing,
  editCatInfo,
  editGathering,
  editSharing,
  deleteCatInfo,
  deleteGathering,
  deleteSharing,
  getOneCatInfo,
  getOneGathering,
  getOneSharing,
  addCatInfoComment,
  addGatheringComment,
  addSharingComment,
  getCatInfoComment,
  getGatheringComment,
  getSharingComment,
  deleteCatInfoComment,
  deleteGatheringComment,
  deleteSharingComment,
  pageLoading,
  startReset,
  itemLoading,
  resetList,
} = community.actions;

export default community;