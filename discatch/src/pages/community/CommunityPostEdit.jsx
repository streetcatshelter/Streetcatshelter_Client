// LIBRARY
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { CommunityPreview, Template, SecondHeader } from "../../components";
import { Toast } from "../../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Input, TextArea, Text } from "../../elements/index";

// ICON
import { Camera } from "react-feather";

// ROUTE
import { useLocation } from "react-router-dom";

// REDUX
import { imgActions } from "../../redux/modules/image";
import { editCommunityDB } from "../../redux/modules/community";
import { getOneCommunityDB } from "../../redux/modules/community";
import { history } from "../../redux/configureStore";

const CommunityPostEdit = (props) => {
  const dispatch = useDispatch();
  const path = useLocation();
  const preview = useSelector((state) => state.image.preview);
  const communityId = path.pathname.split('/')[5];
  const pathName = path.pathname.split('/')[3];
  let category, contents, imageList, location, title, username;
  const { cCategory, cContents, cImageList, cLocation, cTitle, cUsername } =
    useSelector((state) => ({
      cCategory: state.community.catInfo.data?.category,
      cContents: state.community.catInfo.data?.contents,
      cImageList: state.community.catInfo.data?.communityImageList
        ? state.community.catInfo.data?.communityImageList
        : Array(),
      cLocation: state.community.catInfo.data?.location,
      cTitle: state.community.catInfo.data?.title,
      cUsername: state.community.catInfo.data?.username,
    }));

    const { gCategory, gContents, gImageList, gLocation, gTitle, gUsername } =
    useSelector((state) => ({
      gCategory: state.community.gathering.data?.category,
      gContents: state.community.gathering.data?.contents,
      gImageList: state.community.gathering.data?.communityImageList
        ? state.community.gathering.data?.communityImageList
        : Array(),
      gLocation: state.community.gathering.data?.location,
      gTitle: state.community.gathering.data?.title,
      gUsername: state.community.gathering.data?.username,
    }));

    const { sCategory, sContents, sImageList, sLocation, sTitle, sUsername } =
    useSelector((state) => ({
      sCategory: state.community.sharing.data?.category,
      sContents: state.community.sharing.data?.contents,
      sImageList: state.community.sharing.data?.communityImageList
        ? state.community.sharing.data?.communityImageList
        : Array(),
      sLocation: state.community.sharing.data?.location,
      sTitle: state.community.sharing.data?.title,
      sUsername: state.community.sharing.data?.username,
    }));

    if (pathName === 'catinfo') {
      category = cCategory;
      contents = cContents;
      imageList = cImageList;
      location = cLocation;
      title = cTitle;
      username = cUsername;
    } else if (pathName === 'gathering') {
      category = gCategory;
      contents = gContents;
      imageList = gImageList;
      location = gLocation;
      title = gTitle;
      username = gUsername;
    } else {
      category = sCategory;
      contents = sContents;
      imageList = sImageList;
      location = sLocation;
      title = sTitle;
      username = sUsername;
    }
  
  const imageNum = imageList?.length;

  const [fileNum, setFileNum] = useState(imageNum);
  const [titleStatus, setTitleStatus] = useState(false);
  const [contentStatus, setContentStatus] = useState(false);
  const [photoStatus, setPhotoStatus] = useState(false);
  const [maxPhotoStatus, setMaxPhotoStatus] = useState(false);
  const [prePhotoStatus, setPrePhotoStatus] = useState(false);

  // S3
  const handleInputFile = (e) => {
    e.preventDefault();

    if (fileNum < 5) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      dispatch(imgActions.setPreview(imageUrl, fileNum));
      dispatch(imgActions.setFiles(file, fileNum));
      setFileNum(fileNum + 1);
    } else {
      setMaxPhotoStatus(true);
    }
  };

  const [editTitle, setEditTitle] = React.useState(title);
  const $title = (e) => {
    setEditTitle(e.target.value);
  };

  const [editcontents, setEditContents] = React.useState(contents);
  const $contents = (e) => {
    setEditContents(e.target.value);
  };

  const editBtn = () => {
    if (editTitle === '') {
      setTitleStatus(true);
    } else if (editcontents === '') {
      setContentStatus(true);
    } else {
      dispatch(imgActions.setFiles(imageList, imageNum));
      dispatch(
        editCommunityDB(
          communityId,
          category,
          editcontents,
          location,
          editTitle,
          username,
          imageList
        )
      );
    }
  };

  const delLastImageBtn = () => {
    if (preview.length === 5) {
      dispatch(imgActions.delPreview(fileNum - 1));
      dispatch(imgActions.delFile(fileNum - 1));
      setFileNum(fileNum - 1);
    } else if (preview.length === 4) {
      dispatch(imgActions.delPreview(fileNum - 1));
      dispatch(imgActions.delFile(fileNum - 1));
      setFileNum(fileNum - 1);
    } else if (preview.length === 3) {
      dispatch(imgActions.delPreview(fileNum - 1));
      dispatch(imgActions.delFile(fileNum - 1));
      setFileNum(fileNum - 1);
    } else if (preview.length === 2) {
      dispatch(imgActions.delPreview(fileNum - 1));
      dispatch(imgActions.delFile(fileNum - 1));
      setFileNum(fileNum - 1);
    } else if (preview.length === 1) {
      dispatch(imgActions.delPreview(fileNum - 1));
      dispatch(imgActions.delFile(fileNum - 1));
      setFileNum(fileNum - 1);
    } else if (preview.length === 0 && imageNum !== 0) {
      setPrePhotoStatus(true);
    } else {
      setPhotoStatus(true);
    }
  };

  let pathCategory;
  if (category?.split(' ')[1] === '정보글') {
    pathCategory = 'catinfo';
  } else if (category?.split(' ')[1] === '동네'){
    pathCategory = 'gathering';
  } else {
    pathCategory = 'sharing';
  }
  
  useEffect(() => {
    dispatch(getOneCommunityDB(communityId));
  }, [category, communityId, dispatch]);

  useEffect(() => {
    if (titleStatus) {
      setTimeout(() => {
        setTitleStatus(false);
      }, 1500);
    }
  }, [titleStatus]);

  useEffect(() => {
    if (contentStatus) {
      setTimeout(() => {
        setContentStatus(false);
      }, 1500);
    }
  }, [contentStatus]);

  useEffect(() => {
    if (photoStatus) {
      setTimeout(() => {
        setPhotoStatus(false);
      }, 1500);
    }
  }, [photoStatus]);

  useEffect(() => {
    if (maxPhotoStatus) {
      setTimeout(() => {
        setMaxPhotoStatus(false);
      }, 1500);
    }
  }, [maxPhotoStatus]);

  useEffect(() => {
    if (prePhotoStatus) {
      setTimeout(() => {
        setPrePhotoStatus(false);
      }, 1500);
    }
  }, [prePhotoStatus]);

  return (
    <Template props={props}>
      <SecondHeader title="커뮤니티글 수정" />
      <Grid 
        bgColor="bgColor" 
        margin="auto" 
        width="90%"
        addstyle={() => {
          return css`
            @media screen and (max-height: 640px) {
              height: 82vh;
            }
            @media screen and (max-height: 600px) {
              height: 90vh;
            }
            @media screen and (max-height: 568px) {
              height: 90vh;
            }
            @media screen and (max-width: 280px) {
              height: 80vh;
            }
          `;
        }}>
        <CommunityEditStyle>
          <Grid width="100%" margin="15px auto " height="auto">
            <Input
              disabled
              value={category}
              width="90%"
              padding=" 7px 10px"
              margin="auto"
              addstyle={() => {
                return css`
                  display: flex;
                  border-radius: 10px;
                  justify-content: center;
                `;
              }}
            />
          </Grid>
          <Grid width="100%" margin="15px auto" height="auto">
            <Input
              onChange={$title}
              placeholder="제목을 입력해주세요."
              padding=" 7px 10px"
              width="90%"
              margin="auto"
              value={editTitle}
              addstyle={() => {
                return css`
                  display: flex;
                  border-radius: 10px;
                  justify-content: center;
                `;
              }}
            />

            <Grid
              margin="10px"
              addstyle={() => {
                return css`
                  white-space: nowrap;
                  overflow-x: auto;
                  -ms-overflow-style: none;
                  &::-webkit-scrollbar {
                    display: none;
                  }
                `;
              }}
            >
              <Grid
                width="90px"
                height="90px"
                margin="5.5px"
                bgColor="yellow"
                addstyle={() => {
                  return css`
                    position: relative;
                    display: inline-block;
                    text-align: center;
                    cursor: pointer;
                  `;
                }}
              >
                <Grid
                  addstyle={() => {
                    return css`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    `;
                  }}
                >
                  <Grid width="95%">
                    <UploadButton htmlFor="imgFile">
                      <Camera width="50%" height=" 50%" color="white" />
                    </UploadButton>
                  </Grid>
                  <Upload
                    id="imgFile"
                    name="imgFile"
                    multiple
                    type="file"
                    accept="image/png, image/jpeg"
                    style={{ display: "none" }}
                    onChange={handleInputFile}
                  />
                  <Text
                    size="9px"
                    fontWeight="bold"
                    addstyle={() => {
                      return css`
                        position: relative;
                        top: -14px;
                      `;
                    }}
                  >
                    {fileNum}/5
                  </Text>
                </Grid>
              </Grid>
              {(imageList[0] || preview[0 - imageNum]) && (
                <CommunityPreview
                  preview={preview}
                  imageList={imageList}
                  imageNum={imageNum}
                  previewNum={0}
                />
              )}
              {(imageList[1] || preview[1 - imageNum]) && (
                <CommunityPreview
                  preview={preview}
                  imageList={imageList}
                  imageNum={imageNum}
                  previewNum={1}
                />
              )}
              {(imageList[2] || preview[2 - imageNum]) && (
                <CommunityPreview
                  preview={preview}
                  imageList={imageList}
                  imageNum={imageNum}
                  previewNum={2}
                />
              )}
              {(imageList[3] || preview[3 - imageNum]) && (
                <CommunityPreview
                  preview={preview}
                  imageList={imageList}
                  imageNum={imageNum}
                  previewNum={3}
                />
              )}
              {(imageList[4] || preview[4 - imageNum]) && (
                <CommunityPreview
                  preview={preview}
                  imageList={imageList}
                  imageNum={imageNum}
                  previewNum={4}
                />
              )}
            </Grid>
            <Grid
              width="93%"
              height="25px"
              bgColor="olive"
              margin="5px auto 10px auto "
              radius="10px"
              clickEvent={() => delLastImageBtn()}
              addstyle={() => {
                return css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `;
              }}
            >
              <Text size="14px" fontWeight="bold">
                마지막 사진 삭제
              </Text>
            </Grid>
            <TextArea
              onChange={$contents}
              value={editcontents}
              placeholder="내용을 입력해주세요."
              height="180px"
              padding=" 7px 10px"
              width="90%"
              addstyle={() => {
                return css`
                  resize: none;
                  margin: 10px auto;
                  display: flex;
                  justify-content: center;
                `;
              }}
            />
          </Grid>

          <Grid
            width="225px"
            height="30px"
            display="flex"
            margin="20px auto 0px auto"
            addstyle={() => {
              return css`
                align-items: center;
                justify-content: center;
              `;
            }}
          >
            <Button
              width="100px"
              margin="0 auto"
              bgColor="olive"
              fontSize="18px"
              fontWeight="800"
              onClick={editBtn}
              addstyle={() => {
                return css`
                  display: flex;
                  height: 40px;
                  border-radius: 10px;
                  align-items: center;
                  justify-content: center;
                `;
              }}
            >
              완료하기
            </Button>
            <Button
              width="100px"
              margin="0 auto"
              fontSize="18px"
              fontWeight="800"
              bgColor="olive"
              onClick={() =>
                history.push(
                  `/community/${location?.split(' ')[2]}/${pathCategory}/postdetail/${communityId}`
                )
              }
              addstyle={() => {
                return css`
                  display: flex;
                  height: 40px;
                  border-radius: 10px;
                  align-items: center;
                  justify-content: center;
                `;
              }}
            >
              취소하기
            </Button>
          </Grid>
        </CommunityEditStyle>
      </Grid>
      {titleStatus && <Toast message="제목을 입력해주세요!" />}
      {contentStatus && <Toast message="내용을 입력해주세요!" />}
      {photoStatus && <Toast message="삭제할 사진이 없어요!" />}
      {maxPhotoStatus && <Toast message="사진은 최대 5장까지 등록할 수 있어요!" />}
      {prePhotoStatus && <Toast message="이전에 추가한 사진은 삭제할 수 없어요!" />}
    </Template>
  );
};

const CommunityEditStyle = styled.div`
  width: 100%;
  height: 60vh;
  margin: 10px auto;
  border-radius: 30px;
`;
const Upload = styled.input`
  background-color: white;
  width: 100%;
  border: 2px solid white;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const UploadButton = styled.label`
  position: relative;
  top: 16px;
  left: 16px;
  width: 120px;
  text-align: center;
  background-color: rgb(${(props) => props.theme.palette.buttonColor});
  color: white;
  cursor: pointer;
  outline: none;
  display: block;
  float: right;
  margin-bottom: 40px;
`;

export default CommunityPostEdit;
