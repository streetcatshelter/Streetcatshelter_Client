// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Template, SecondHeader } from "../../components";
import { CommunityPreview } from "../../components/index";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Input, TextArea, Text } from "../../elements/index";

// REDUX
import { imgActions } from "../../redux/modules/image";
import { addCommunityDB } from "../../redux/modules/community";
import { mypageActions } from "../../redux/modules/mypage";

// ROUTE
import { useLocation } from "react-router-dom";
import { history } from "../../redux/configureStore";

// ICON
import { Camera } from "react-feather";

const CommunityPostWrite = (props) => {
  const dispatch = useDispatch();
  const path = useLocation();
  const pathName = path.pathname.split("/");
  const backPath = `/${pathName[1]}/${pathName[2]}/${pathName[3]}`;
  const detailLocation = pathName[2];
  const preview = useSelector((state) =>
    state.image.preview ? state.image.preview : Array(1)
  );

  const userVillage0 = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[0]?.split("(")[0]
  );
  const userVillageA = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[1]?.split("(")[0]
  );

  const userVillage1 = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[0]?.split("(")[0]
  );
  const userVillageB = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[1]?.split("(")[0]
  );

  const userVillage2 = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[0]?.split("(")[0]
  );
  const userVillageC = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[1]?.split("(")[0]
  );

  let location;
  if (detailLocation === userVillage0) {
    location = userVillageA;
  } else if (detailLocation === userVillage1) {
    location = userVillageB;
  } else if (detailLocation === userVillage2) {
    location = userVillageC;
  }

  let firstCategory;
  if (pathName[3] === "catinfo") {
    firstCategory = "고양이 정보글";
  } else if (pathName[3] === "gathering") {
    firstCategory = `${detailLocation} 동네 모임`;
  } else {
    firstCategory = `${detailLocation} 고양이 용품 나눔`;
  }

  const [fileNum, setFileNum] = useState(0);

  location = location?.substring(0, location.length - 1);

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

  const [category, setCategory] = React.useState(firstCategory);

  const Options = [
    { key: 1, value: "고양이 정보글" },
    { key: 2, value: `${detailLocation} 동네 모임` },
    { key: 3, value: `${detailLocation} 고양이 용품 나눔` },
  ];

  const onChangeHandler = (e) => {
    setCategory(e.currentTarget.value);
  };

  const [title, setTitle] = React.useState();
  const $title = (e) => {
    setTitle(e.target.value);
  };

  const [contents, setContents] = React.useState();
  const $contents = (e) => {
    setContents(e.target.value);
  };

  const writeBtn = () => {
    dispatch(
      addCommunityDB(category, contents, location, title, detailLocation)
    );
  };

  const delLastImageBtn = () => {
    if (preview.lentgh === 5) {
      dispatch(imgActions.delPreview(4));
      dispatch(imgActions.delFile(4));
      setFileNum(fileNum - 1);
    } else if (preview.length === 4) {
      dispatch(imgActions.delPreview(3));
      dispatch(imgActions.delFile(3));
      setFileNum(fileNum - 1);
    } else if (preview.length === 3) {
      dispatch(imgActions.delPreview(2));
      dispatch(imgActions.delFile(2));
      setFileNum(fileNum - 1);
    } else if (preview.length === 2) {
      dispatch(imgActions.delPreview(1));
      dispatch(imgActions.delFile(1));
      setFileNum(fileNum - 1);
    } else if (preview.length === 1) {
      dispatch(imgActions.delPreview(0));
      dispatch(imgActions.delFile(0));
      setFileNum(fileNum - 1);
    } else {
      alert("삭제할 사진이 없어요!");
    }
  };

  React.useEffect(() => {
    dispatch(mypageActions._getUserInfo());
  }, [dispatch]);

  return (
    <Template props={props}>
      <SecondHeader title="커뮤니티글 등록" />
      <Grid bgColor="bgColor" margin="auto" width="90%">
        <CommunityWriteStyle>
          <Grid width="96%" margin="15px auto " height="auto">
            <Select
              onChange={onChangeHandler}
              value={category}
              style={{ height: "32px" }}
            >
              {Options.map((item, index) => (
                <option key={item.key} value={item.value}>
                  {item.value}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid width="100%" margin="5px auto" height="auto">
            <Input
              onChange={$title}
              placeholder="제목을 입력해주세요."
              padding=" 7px 10px"
              width="90%"
              margin="auto"
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
                  height: 90px;
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
              {preview[0] && (
                <CommunityPreview preview={preview} previewNum={0} />
              )}
              {preview[1] && (
                <CommunityPreview preview={preview} previewNum={1} />
              )}
              {preview[2] && (
                <CommunityPreview preview={preview} previewNum={2} />
              )}
              {preview[3] && (
                <CommunityPreview preview={preview} previewNum={3} />
              )}
              {preview[4] && (
                <CommunityPreview preview={preview} previewNum={4} />
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
              placeholder="내용을 입력해주세요."
              height="200px"
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
              onClick={writeBtn}
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
              작성하기
            </Button>
            <Button
              width="100px"
              margin="0 auto"
              fontSize="18px"
              fontWeight="800"
              bgColor="olive"
              onClick={() => history.push(`${backPath}`)}
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
        </CommunityWriteStyle>
      </Grid>
    </Template>
  );
};

const CommunityWriteStyle = styled.div`
  width: 100%;
  height: 60vh;
  margin: 10px auto;
  border-radius: 30px;
`;

const Select = styled.select`
  background: rgb(${(props) => props.theme.palette.bgColor});
  height: 50px;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 100%;
  border-radius: 10px;
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

export default CommunityPostWrite;
