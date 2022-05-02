// LIBRARY
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import {
  CommunityPreview,
  Template,
  SecondHeader,
  SecondSpinner,
} from "../../components";
import { Toast } from "components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Input, TextArea, Text } from "elements/index";

// ICON
import { Camera } from "react-feather";

// ROUTE
import { useLocation } from "react-router-dom";

// REDUX
import { imgActions } from "redux/modules/image";
import { addCommunityDB } from "redux/modules/community";
import { mypageActions } from "redux/modules/mypage";
import {
  editCommunityDB,
  getOneCommunityDB,
} from "redux/modules/community";

import { history } from "redux/configureStore";

// HOOKS
import useToast from "hooks/useToast";

// UTILS
import handleInput from "utils/handleInput";

const CommunityPostWriteEdit = (props) => {
  const dispatch = useDispatch();
  const imgNum = [0,1,2,3,4];
  const write = props.location.pathname?.split('/')[4] === 'write';
  const path = useLocation();
  const pathName = path.pathname?.split("/");
  const backPath = `/${pathName[1]}/${pathName[2]}/${pathName[3]}`;
  const detailLocation = pathName[2];
  const isLoaded = useSelector((state) => state.community.itemLoaded);
  const preview = useSelector((state) => state.image.preview);
  const nickName = useSelector((state) => state.mypage.userInfo.nickname);
  const { category, contents, imageList, location, title, username } =
    useSelector((state) => ({
      category: state.community.communityDetail?.category,
      contents: state.community.communityDetail?.contents,
      imageList: state.community.communityDetail?.communityImageList,
      location: state.community.communityDetail?.location,
      title: state.community.communityDetail?.title,
      username: state.community.communityDetail?.username,
    }));

  // path에 사용할 카테고리 설정(edit)
  let pathCategory;
  if (category?.split(" ")[1] === "정보글") {
    pathCategory = "catinfo";
  } else if (category?.split(" ")[1] === "동네") {
    pathCategory = "gathering";
  } else {
    pathCategory = "sharing";
  }

  // path에 사용할 카테고리 설정(write)
  let firstCategory;
  if (pathName[3] === "catinfo") {
    firstCategory = "고양이 정보글";
  } else if (pathName[3] === "gathering") {
    firstCategory = `${detailLocation} 동네 모임`;
  } else {
    firstCategory = `${detailLocation} 고양이 용품 나눔`;
  }
  const communityId = path.pathname?.split("/")[5];
  
  const [writeCategory, setCategory] = React.useState(firstCategory);

  // 글 작성 시 업로드한 사진 개수
  const imageNum = imageList?.length;

  // 총 사진 개수
  const [fileNum, setFileNum] = useState(write ? 0 : imageNum);

  // 토스트 모달
  const [titleState, setTitleState] = useState(false);
  const [contentState, setContentState] = useState(false);
  const [photoState, setPhotoState] = useState(false);
  const [maxPhotoState, setMaxPhotoState] = useState(false);
  const [prePhotoState, setPrePhotoState] = useState(false);

  // S3 (사진 추가)
  const handleInputFile = (e) => {
    handleInput(e, 5, fileNum, dispatch, setFileNum, null, setMaxPhotoState, 'CommunityPostWriteEdit')
  };

  // 제목 수정
  const [Title, setTitle] = React.useState(write ? '' : title);
  const $title = (e) => {
    setTitle(e.target.value);
  };

  // 내용 수정
  const [Contents, setContents] = React.useState(write ? '' : contents);
  const $contents = (e) => {
    setContents(e.target.value);
  };

  // 커뮤니티 글 수정하기
  const editBtn = () => {
    if (Title === "") {
      setTitleState(true);
    } else if (Contents === "") {
      setContentState(true);
    } else {
      dispatch(
        editCommunityDB(
          communityId,
          category,
          Contents,
          location,
          Title,
          username,
          imageList
        )
      );
    }
  };

  // 마지막 사진 삭제하기
  const dispatchImg = () => {
    dispatch(imgActions.delPreview(fileNum - 1));
    dispatch(imgActions.delFile(fileNum - 1));
    setFileNum(fileNum - 1);
  }
  const delLastImageBtn = () => {
    if (preview.length === 5) {
      dispatchImg()
    } else if (preview.length === 4) {
      dispatchImg()
    } else if (preview.length === 3) {
      dispatchImg()
    } else if (preview.length === 2) {
      dispatchImg()
    } else if (preview.length === 1) {
      dispatchImg()
    } else if (!write && preview.length === 0 && imageNum !== 0) {
      setPrePhotoState(true);
    } else {
      setPhotoState(true);
    }
  };

  // 유저 정보 가져오기
  useEffect(() => {
    dispatch(mypageActions._getUserInfo());
  }, [dispatch]);

  // 커뮤니티 상세 페이지 가져오기
  useEffect(() => {
    dispatch(getOneCommunityDB(communityId));
  }, [category, communityId, dispatch]);

  // 사진 정보 초기화
  useEffect(() => {
    dispatch(imgActions.setInitialState());
  }, [dispatch]);

  // 토스트 모달
  useToast(titleState, setTitleState);
  useToast(contentState, setContentState);
  useToast(photoState, setPhotoState);
  useToast(maxPhotoState, setMaxPhotoState);
  useToast(prePhotoState, setPrePhotoState);

  const Options = [
    { key: 1, value: "고양이 정보글" },
    { key: 2, value: `${detailLocation} 동네 모임` },
    { key: 3, value: `${detailLocation} 고양이 용품 나눔` },
  ];

  const onChangeHandler = (e) => {
    setCategory(e.currentTarget.value);
  };

  const writeBtn = () => {
    if (title === "") {
      setTitleState(true);
    } else if (contents === "") {
      setContentState(true);
    } else {
      dispatch(
        addCommunityDB(
          writeCategory,
          Contents,
          Title,
          detailLocation,
          nickName
        )
      );
    }
  };

  return (
    <Template props={props}>
      <SecondSpinner visible={isLoaded} />
      {write ? 
        <SecondHeader title="커뮤니티글 작성" /> : 
        <SecondHeader title="커뮤니티글 수정" />
      }
      <Grid
        bgColor="white"
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
        }}
      >
        <CommunityEditStyle>
          <Grid width="100%" margin="15px auto " height="auto">
            {write ? 
            <Select
              onChange={onChangeHandler}
              value={writeCategory}
              style={{ height: "32px" }}
            >
              {Options.map((item, index) => (
                <option key={item.key} value={item.value}>
                  {item.value}
                </option>
              ))}
            </Select> : 
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
            />}
            
          </Grid>
          <Grid width="100%" margin="15px auto" height="auto">
            <Input
              onChange={$title}
              placeholder="제목을 입력해주세요."
              padding=" 7px 10px"
              width="90%"
              margin="auto"
              value={Title}
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
              {imgNum.map((img, idx) => {
                if (write && preview[img]) {
                  return (
                    <CommunityPreview 
                      key={idx} 
                      preview={preview} 
                      previewNum={img} 
                    />)
                } else if (!write && imageList && (imageList[img] || preview[img - imageNum])) {
                  return (
                    <CommunityPreview
                      key={idx}
                      preview={preview}
                      imageList={imageList}
                      imageNum={imageNum}
                      previewNum={img}
                    />)
                }
              })}
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
                  cursor: pointer;
                `;
              }}
            >
              <Text size="14px" fontWeight="bold">
                마지막 사진 삭제
              </Text>
            </Grid>
            <TextArea
              onChange={$contents}
              value={Contents}
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
              onClick={write ? writeBtn : editBtn}
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
              {write ? '작성하기' : '완료하기'}
            </Button>
            <Button
              width="100px"
              margin="0 auto"
              fontSize="18px"
              fontWeight="800"
              bgColor="olive"
              onClick={() =>
                {write ? 
                  history.push({ pathname: `${backPath}`, state: { location } }) : 
                  history.push(
                    `/community/${
                      location?.split(" ")[2]
                    }/${pathCategory}/postdetail/${communityId}`
                  )}
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
      {titleState && <Toast message="제목을 입력해주세요!" />}
      {contentState && <Toast message="내용을 입력해주세요!" />}
      {photoState && <Toast message="삭제할 사진이 없어요!" />}
      {maxPhotoState && (
        <Toast message="사진은 최대 5장까지 등록할 수 있어요!" />
      )}
      {prePhotoState && (
        <Toast message="이전에 추가한 사진은 삭제할 수 없어요!" />
      )}
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
const Select = styled.select`
  font-size: 12px;
  padding: 0 0 0 4px;
  position: relative;
  left: 18px;
  background: rgb(${(props) => props.theme.palette.bgColor});
  height: 50px;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 90%;
  border-radius: 10px;
`;

export default CommunityPostWriteEdit;