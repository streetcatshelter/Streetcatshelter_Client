// AWS S3
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:a1d4d779-9019-4fa7-81e5-cecef26997bc',
  }),
});

// action
const UPLOAD_IMAGE = 'IMAGE';
const SET_FILE = 'SET_FILE';
const DEL_FILE = 'DEL_FILE';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

// action creator
const uploadImage = (imageUrl) => ({ type: UPLOAD_IMAGE, imageUrl });
const setFile = (file) => ({ type: SET_FILE, file });
const delFile = (postId) => ({ type: DEL_FILE, postId });
const setInitialState = () => ({ type: SET_INITIAL_STATE });

// initial state
const initialState = {
  imageUrl: [],
  file: [],
};

// middleware
const uploadImageDB = (callNext) => {
  return async function (dispatch, getState) {
    const imgList = getState().image.file;

    for (let i = 0; i < imgList.length; i++) {
      const img = imgList[i];

      if (typeof img !== 'object') {
        dispatch(uploadImage(img));
        continue;
      }

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 's3-animan',
          Key: img.name,
          Body: img,
        },
      });

      const promise = upload.promise();

      await promise
        .then((data) => {
          dispatch(uploadImage(data.Location));
        })
        .catch((error) => {
          console.log(error);
          return alert('오류가 발생했습니다: ', error.message);
        });
    }
    callNext();
  };
};

// reducer
function image(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, imageUrl: action.imageUrl };
    case SET_FILE:
      return { ...state, file: [...state.file, ...action.file] };
    case DEL_FILE:
      const fileList = state.file.filter((img, idx) => action.index !== idx);

      return { ...state, file: fileList };
    case SET_INITIAL_STATE:
      return { imageUrl: [], file: [] };

    default:
      return state;
  }
}

export default image;

export const imgActions = {
  uploadImage,
  setFile,
  delFile,
  setInitialState,
  uploadImageDB,
};