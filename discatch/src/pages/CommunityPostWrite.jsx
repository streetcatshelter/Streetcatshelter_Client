// LIBRARY
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Template } from "../components";

// STYLE
import styled, { css } from "styled-components";

// ELEMENTS
import { Grid, Button, Input, TextArea, Text, Image } from "../elements/index";

// REDUX
import { imgActions } from "../redux/modules/image";
import { addCommunityDB } from "../redux/modules/community";

// ROUTE
import { useLocation } from "react-router-dom";

// ICON
import { Camera } from "react-feather";

import { history } from "../redux/configureStore";

const CommunityPostWrite = (props) => {
  const preview = useSelector((state) => state.image.preview)

  const dispatch = useDispatch();
  
  const location = "망원동"; // Header에서 가져오기 or 유저 정보에서 가져오기
  const [fileNum, setFileNum] = useState(0);

  // S3
  const handleInputFile = (e) => {
    e.preventDefault();
    if (fileNum < 5) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      dispatch(imgActions.setPreview(imageUrl));
      dispatch(imgActions.setFile([file]));
      setFileNum(fileNum+1);
    } else {
      alert('사진은 최대 5장까지 등록할 수 있어요!');
    }
  };
  
  const [category, setCategory] = React.useState("게시글 주제를 선택해주세요!");

  const Options = [
    { key: 1, value: "게시글 주제를 선택해주세요!"},
    { key: 2, value: "고양이 정보글"},
    { key: 3, value:`${location} 동네 모임` },
    { key: 4, value: `${location} 고양이 용품 나눔` },
  ];
  console.log(Options[0].value);
  let k = Options.indexOf(Options[0])
  console.log(k);
  console.log(Options);

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
    dispatch(addCommunityDB(category, contents, location, title));
  };

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
        <CommunityWriteStyle>
          <Grid width="335px" height="auto" margin="0 0 16px 0">
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
          <Grid width="335px" height="10%">
            <Input
              onChange={$title}
              placeholder="제목을 입력해주세요."
              width="103%"
              addstyle={() => {
                return css`
                  border-radius: 10px;
                  margin: 0 0 16px 2px;
                `;
              }}
            />
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
                width={"90px"}
                height={"90px"}
                margin={"5.5px"}
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
              {preview[0] && (
                <Grid
                  width={"90px"}
                  height={"90px"}
                  margin={"0 5.5px"}
                  addstyle={() => {
                    return css`
                      position:relative;
                      background: lightgray;
                      display: inline-block;
                      top:5px;
                    `;
                  }}
                >
                  <Image src={preview[0]} width="100%" height="100%" />
                </Grid>
              )}
              {preview[1] && (
                <Grid
                  width={"90px"}
                  height={"90px"}
                  margin={"0 5.5px"}
                  addstyle={() => {
                    return css`
                      position:relative;
                      background: lightgray;
                      display: inline-block;
                      top:5px;
                    `;
                  }}
                >
                  <Image src={preview[1]} width="100%" height="100%" />
                </Grid>
              )}
              {preview[2] && (
                <Grid
                  width={"90px"}
                  height={"90px"}
                  margin={"0 5.5px"}
                  addstyle={() => {
                    return css`
                      position:relative;
                      background: lightgray;
                      display: inline-block;
                      top:5px;
                    `;
                  }}
                >
                  <Image src={preview[2]} width="100%" height="100%" />
                </Grid>
              )}
              {preview[3] && (
                <Grid
                  width={"90px"}
                  height={"90px"}
                  margin={"0 5.5px"}
                  addstyle={() => {
                    return css`
                      position:relative;
                      background: lightgray;
                      display: inline-block;
                      top:5px;
                    `;
                  }}
                >
                  <Image src={preview[3]} width="100%" height="100%" />
                </Grid>
              )}
              {preview[4] && (
                <Grid
                  width={"90px"}
                  height={"90px"}
                  margin={"0 5.5px"}
                  addstyle={() => {
                    return css`
                      position:relative;
                      background: lightgray;
                      display: inline-block;
                      top:5px;
                    `;
                  }}
                >
                  <Image src={preview[4]} width="100%" height="100%" />
                </Grid>
              )}
            </Grid>
            <TextArea
              onChange={$contents}
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
              onClick={writeBtn}
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
              작성하기
            </Button>
            <Button
              width="108px"
              margin="auto"
              fontSize="14px"
              fontWeight="bold"
              bgColor="D_yellow"
              onClick={() => history.goBack()}
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
        </CommunityWriteStyle>
      </Grid>
    </Template>
  );
};

const CommunityWriteStyle = styled.div`
  width: 350px;
  height: 60vh;
  margin: 10px auto;
  border-radius: 30px;
`;

const Select = styled.select`
  background: rgb(${(props) => props.theme.palette.bgColor});
  height: 50px;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 350px;
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
