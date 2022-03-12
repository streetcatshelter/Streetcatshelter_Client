// REDUX
import { imgActions } from "redux/modules/image";

function handleInput (e, num, fileNum, dispatch, setFileNum, setFileUrl, setMaxPhotoState, page) {
  e.preventDefault();
  const file = e.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  if (page === 'CatDetailInfoWrite' || page === 'CommunityPostWriteEdit') {
    if (fileNum < num) {
      dispatch(imgActions.setPreview(imageUrl, fileNum));
      dispatch(imgActions.setFiles(file, fileNum));
      setFileNum(fileNum + 1);
    } else {
      setMaxPhotoState(true);
    }
  } else if (page === 'CatInfoWrite') {
    dispatch(imgActions.setInitialState(imageUrl));
    dispatch(imgActions.setFile(file));
    setFileUrl(imageUrl);
  }
}


export default handleInput;

