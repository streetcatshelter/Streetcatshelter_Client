// LIBRARY
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { SecondHeader, Template } from "../../components";

// ELEMENTS
import { Grid, Image, Input, Button, Text } from "../../elements/index";

// STYLE
import styled, { css } from "styled-components";
import { flexBox } from "../../shared/style";

// ICON
import { Camera } from "react-feather";

// REDUX
import { imgActions } from "../../redux/modules/image";
import { history } from "../../redux/configureStore";
import {
  __createCatInfo,
  __editCatInfo,
  addHashTag,
  deleteHashTag,
  setInitialState,
} from "../../redux/modules/cat";

const CatInfoWrite = (props) => {
  const dispatch = useDispatch();
  const edit = props.match.path?.split("/")[1] === "catinfoedit" ? true : false;
  const pathLocation = props.match.params.location;
  const catInfo = useSelector((state) => state.cat.catinfo);

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
  if (pathLocation === userVillage0) {
    location = userVillageA;
  } else if (pathLocation === userVillage1) {
    location = userVillageB;
  } else if (pathLocation === userVillage2) {
    location = userVillageC;
  }

  location = location?.substring(0, location.length - 1);
  const NickName = useSelector((state) => state.mypage.userInfo.nickname);
  const HashTags = useSelector((state) => state.cat.hashtag);
  const [fileUrl, setFileUrl] = useState(null);

  // S3
  const handleInputFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    dispatch(imgActions.setInitialState(imageUrl));
    dispatch(imgActions.setFile(file));
    setFileUrl(imageUrl);
  };

  const Options = [
    { key: 1, value: "중성화 여부" },
    { key: 2, value: "알수없음" },
    { key: 3, value: "YES" },
    { key: 4, value: "NO" },
  ];

  const [catName, setCatName] = useState(edit ? catInfo.catName : "");

  const $catName = (e) => {
    setCatName(e.target.value);
  };

  const [neutering, setNeutering] = useState(edit ? catInfo.neutering : "YES");
  const $neutering = (e) => {
    setNeutering(e.target.value);
  };

  const [catTag, setCatTag] = useState("");
  const $catTag = (e) => {
    setCatTag(e.target.value);
  };

  const latitude = props.history.location.state?.latitude;
  const longitude = props.history?.location.state?.longitude;

  const createBtn = () => {
    if (neutering === "") {
      alert("중성화 여부를 선택해주세요!");
    } else {
      edit
        ? dispatch(__editCatInfo(catName, HashTags, neutering, catInfo.catId))
        : dispatch(
            __createCatInfo(
              catName,
              HashTags,
              neutering,
              location,
              NickName,
              latitude,
              longitude,
              pathLocation
            )
          );
    }
  };
  const publish = (catTag) => {
    if (catTag !== "") {
      dispatch(addHashTag(catTag));
      setCatTag("");
    } else {
      alert("해쉬태그를 입력해주세요");
    }
  };

  const DeleteHashTag = (hashtag) => {
    dispatch(deleteHashTag(hashtag));
  };

  useEffect(() => {
    dispatch(setInitialState([]));

    if (edit) {
      if (catInfo.catTagList) {
        dispatch(imgActions.uploadImage(catInfo.catImage));
        let tag;
        for (let cattag of catInfo.catTagList) {
          tag = cattag.tag;
          if (tag !== "") {
            dispatch(addHashTag(tag));
          } else tag = [];
        }
      } else {
        alert("잘못된 접근입니다.");
        history.push("/");
      }
    }
  }, [edit, catInfo.catTagList, catInfo.catImage, dispatch]);

  return (
    <Template props={props}>
      {edit ? (
        <SecondHeader title={`${catInfo.catName} 고양이정보수정`} />
      ) : (
        <SecondHeader title={`${pathLocation}  고양이등록`} />
      )}
      <Grid>
        <Grid
          width="80%"
          bgColor="yellow"
          padding="12px"
          margin="5% auto"
          radius="20px"
          addstyle={() => {
            return css`
              ${flexBox()}
              flex-direction:column;
            `;
          }}
        >
          <label htmlFor="imgFile">
            <Camera width="100%" height="100px" color="white" />
          </label>
          <Text>이곳을 클릭하여 사진을 한 장 이상 등록해 주세요!</Text>
          <Input
            id="imgFile"
            name="imgFile"
            multiple
            type="file"
            accept="image/png, image/jpeg"
            changeEvent={handleInputFile}
            addstyle={() => {
              return css`
                display: none;
              `;
            }}
          />
        </Grid>

        {edit ? (
          <Grid
            width="60%"
            height="200px"
            margin="3% auto"
            addstyle={() => {
              return css`
                ${flexBox()}
              `;
            }}
          >
            <Grid>
              {fileUrl ? (
                <Image src={fileUrl} width="100%" height="100%" />
              ) : (
                <Image src={catInfo.catImage} width="100%" height="100%" />
              )}
            </Grid>
          </Grid>
        ) : (
          <Grid>
            {fileUrl ? (
              <Grid
                width="60%"
                height="200px"
                margin="3% auto"
                addstyle={() => {
                  return css`
                    ${flexBox()}
                  `;
                }}
              >
                <Image src={fileUrl} width="100%" height="100%" />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        )}

        <Grid width="90%" margin="10px auto">
          <Grid margin="10px auto">
            <Text fontWeight="bold">1. 고양이 이름을 지어주세요.</Text>
            <Input
              addstyle={() => {
                return css`
                  ${flexBox()}
                `;
              }}
              margin="5px auto"
              padding="5px 10px"
              width="90%"
              radius="10px"
              bgColor="#ffffff"
              placeholder="고양이 이름"
              changeEvent={$catName}
              value={catName}
            />
          </Grid>
          <Grid margin="10px auto">
            <Text fontWeight="bold"> 2. 중성화 여부 </Text>
            <Select value={neutering} onChange={$neutering}>
              {Options.map((item, index) => {
                // if (item.key === 1) {
                //   return (
                //     <option key={item.key} value={item.value} disabled>
                //       {item.value}
                //     </option>
                //   );
                // } else {
                return (
                  <option key={item.key} value={item.value}>
                    {item.value}
                  </option>
                );
                // }
              })}
            </Select>
          </Grid>
          <Grid margin="10px auto">
            <Text fontWeight="bold"> 3. 해쉬태그 </Text>
            <Text margin="0px 5px" size="10px">
              "빈칸"없이 입력 후 엔터를 치세요.
              <br /> 해쉬태그를 삭제하고싶으시면 생성된 태그를 클릭해주세요!
            </Text>
            <Input
              addstyle={() => {
                return css`
                  ${flexBox()}
                `;
              }}
              margin="5px auto"
              padding="5px 10px"
              width="90%"
              radius="10px"
              bgColor="#ffffff"
              placeholder="태그는 5개까지 입력할 수 있습니다!"
              type="text"
              value={catTag}
              changeEvent={$catTag}
              onKeyPress={(e) => e.which === 13 && publish(catTag)}
            />

            {HashTags ? (
              <Grid
                display="flex"
                width="95%"
                margin="10px auto"
                addstyle={() => {
                  return css`
                    display: flex;
                    flex-wrap: wrap;
                  `;
                }}
              >
                {HashTags.map((hashtag, idx) => {
                  return (
                    <Grid
                      key={idx}
                      width="auto"
                      bgColor="yellow"
                      height="25px"
                      radius="20px"
                      margin="5px "
                      padding="0px 5px 3px 5px"
                      style={{ fontSize: "12px" }}
                      addstyle={() => {
                        return css`
                          display: flex;
                          align-items: center;
                        `;
                      }}
                      onClick={() => DeleteHashTag(hashtag)}
                    >
                      {hashtag}
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              ""
            )}
          </Grid>
          <Button
            clickEvent={createBtn}
            bgColor="olive"
            color="black"
            width="120px"
            radius="15px"
            fontWeight="800"
            fontSize="18px"
            addstyle={() => {
              return css`
                display: block;
                margin: 10% auto;
              `;
            }}
          >
            작성하기
          </Button>
        </Grid>
      </Grid>
    </Template>
  );
};

const Select = styled.select`
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  display: flex;
  justify-content: center;
  margin: 5px auto;
  padding: 5px 10px;
  width: 96%;
  border-radius: 10px;
  background: white;
  outline: none;
`;
export default CatInfoWrite;
