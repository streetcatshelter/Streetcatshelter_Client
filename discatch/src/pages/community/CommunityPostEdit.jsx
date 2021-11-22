// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { CommunityPreview, Template } from "../../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Input, TextArea, Text } from "../../elements/index";

// REDUX
import { imgActions } from "../../redux/modules/image";
import { editCommunityDB } from "../../redux/modules/community";

// ICON
import { Camera } from "react-feather";

// REDUX
import { getOneCommunityDB } from "../../redux/modules/community";

// ROUTE
import { useLocation } from "react-router-dom";

const CommunityPostEdit = (props) => {
  const dispatch = useDispatch();
  const path = useLocation();
  const preview = useSelector((state) => state.image.preview);
  const communityId = path.pathname.split("/")[5];

  const { category, contents, imageList, location, title, username } =
    useSelector((state) => ({
      category: state.community.list.data?.category,
      contents: state.community.list.data?.contents,
      imageList: state.community.list.data?.communityImageList
        ? state.community.list.data?.communityImageList
        : Array(),
      location: state.community.list.data?.location,
      title: state.community.list.data?.title,
      username: state.community.list.data?.username,
    }));
  const imageNum = imageList?.length;

  const [fileNum, setFileNum] = useState(imageNum);

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
      alert("사진은 최대 5장까지 등록할 수 있어요!");
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
  };

  const delLastImageBtn = () => {
    if (preview.lentgh === 5) {
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
      alert("이전에 추가한 사진은 삭제할 수 없어요!");
    } else {
      alert("삭제할 사진이 없어요!");
    }
  };

  React.useEffect(() => {
    dispatch(getOneCommunityDB(communityId));
  }, [communityId, dispatch]);

  return (
    <Template props={props}>
      <Grid
        bgColor="bgColor"
        margin="-10vh auto"
        addstyle={() => {
          return css`
            position: relative;
            top: 80px;
          `;
        }}
      >
        <CommunityEditStyle>
          <Grid width="335px" height="auto" margin="0 0 16px 0">
            <Input
              disabled
              value={category}
              width="103%"
              addstyle={() => {
                return css`
                  border-radius: 10px;
                `;
              }}
            />
          </Grid>
          <Grid width="335px" height="10%">
            <Input
              onChange={$title}
              placeholder="제목을 입력해주세요."
              value={editTitle}
              width="103%"
              addstyle={() => {
                return css`
                  border-radius: 10px;
                  margin: 0 0 10px 0;
                `;
              }}
            />
            <Button
              bgColor="lightGray"
              onClick={() => delLastImageBtn()}
              addstyle={() => {
                return css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 20px;
                  width: 120px;
                  position: relative;
                  top: 3px;
                  left: 4vw;
                `;
              }}
            >
              마지막 사진 삭제
            </Button>
            <Grid
              margin="0 0 0 12px"
              addstyle={() => {
                return css`
                  white-space: nowrap;
                  overflow-x: auto;
                  height: 120px;
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
                addstyle={() => {
                  return css`
                    position: relative;
                    background: lightgray;
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
                        top: -12px;
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
            <TextArea
              onChange={$contents}
              value={editcontents}
              placeholder="내용을 입력해주세요."
              height="221px"
              width="90%"
              addstyle={() => {
                return css`
                  resize: none;
                  margin: -4px 10px;
                `;
              }}
            />
          </Grid>

          <Grid width="325px"></Grid>
          <Grid
            width="225px"
            height="30px"
            addstyle={() => {
              return css`
                display: flex;
                margin: 60px 0 0 -70px;
              `;
            }}
          >
            <Button
              width="108px"
              margin="auto"
              fontSize="14px"
              bgColor="D_yellow"
              fontWeight="bold"
              onClick={editBtn}
              addstyle={() => {
                return css`
                  display: flex;
                  height: 24px;
                  border-radius: 10px;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  top: -65px;
                  left: 130px;
                `;
              }}
            >
              완료하기
            </Button>
            <Button
              width="108px"
              margin="auto"
              fontSize="14px"
              fontWeight="bold"
              bgColor="D_yellow"
              onClick={() =>
                window.location.replace(
                  `/community/${location}/${category}/postdetail/${communityId}`
                )
              }
              addstyle={() => {
                return css`
                  display: flex;
                  height: 24px;
                  border-radius: 10px;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  top: -65px;
                  left: 137px;
                `;
              }}
            >
              취소하기
            </Button>
          </Grid>
        </CommunityEditStyle>
      </Grid>
    </Template>
  );
};

const CommunityEditStyle = styled.div`
  width: 350px;
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
