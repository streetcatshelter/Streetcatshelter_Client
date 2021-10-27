// library
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

// component
import { Template } from '../components';

// element
import { Grid, TextArea, Button, Input, Image, Text } from '../elements';

// style
import { flexBox } from '../shared/style';

// icon
import { Camera } from 'react-feather';

// redux
import { history } from '../redux/configureStore';
import { imgActions } from '../redux/modules/image';
import { __createCatDetailInfo } from '../redux/modules/cat';

const CatDetailInfoWrite = (props) => {
  const dispatch = useDispatch();

  const preview = useSelector((state) => state.image.preview);
  const catId = props.match.params.catId;

  const [fileNum, setFileNum] = useState(0);

  // S3
  const handleInputFile = (e) => {
    e.preventDefault();
    if (fileNum < 3) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      dispatch(imgActions.setPreview(imageUrl, fileNum));
      dispatch(imgActions.setFiles(file, fileNum));
      setFileNum(fileNum + 1);
    } else {
      alert('사진은 최대 3장까지 등록할 수 있어요!');
    }
  };

  const [tag, setTag] = useState('');
  const $tag = (e) => {
    setTag(e.target.value);
  };

  const [diary, setDiary] = useState('');
  const $diary = (e) => {
    setDiary(e.target.value);
  };

  const [food, setFood] = useState(false);
  const [snack, setSnack] = useState(false);
  const [water, setWater] = useState(false);

  const latitude = 0;
  const longitude = 0;

  const createBtn = () => {
    dispatch(
      __createCatDetailInfo(
        [tag],
        diary,
        food,
        latitude,
        longitude,
        snack,
        water,
        catId,
      ),
    );
    window.location.replace(`/catdetail/${catId}`);
  };

  return (
    <Template props={props}>
      <Grid width="70%" bgColor="lightGray" padding="12px" margin="5% auto">
        <label htmlFor="imgFile">
          <Camera width="100%" height="80" color="white" />
        </label>

        <Input
          id="imgFile"
          name="imgFile"
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

      <Grid
        padding="14px"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        {preview && preview[0] && (
          <Grid width="100px">
            <Image
              borderRadius="10px"
              src={preview[0].preview}
              width="100px"
              height="100px"
            />
          </Grid>
        )}

        {preview && preview[1] && (
          <Grid width="100px">
            <Image
              borderRadius="10px"
              src={preview[1].preview}
              width="100px"
              height="100px"
            />
          </Grid>
        )}

        {preview && preview[2] && (
          <Grid width="100px">
            <Image
              borderRadius="10px"
              src={preview[2].preview}
              width="100px"
              height="100px"
            />
          </Grid>
        )}
      </Grid>

      <Text margin="0 auto 3% auto">{fileNum}/3</Text>

      <Grid
        display="flex"
        justifyContent="space-around"
        margin="auto"
        width="90%"
      >
        <CheckGrid>
          <CheckBox
            type="checkbox"
            value="food"
            onChange={(e) => {
              setFood(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <CheckText>사료</CheckText>
        </CheckGrid>

        <CheckGrid>
          <CheckBox
            type="checkbox"
            value="snack"
            onChange={(e) => {
              setSnack(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <CheckText>간식</CheckText>
        </CheckGrid>
        <CheckGrid>
          <CheckBox
            type="checkbox"
            value="water"
            onChange={(e) => {
              setWater(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          <CheckText>급수</CheckText>
        </CheckGrid>
      </Grid>

      <TextArea
        changeEvent={$diary}
        margin="3% auto"
        width="85%"
        type="text"
        placeholder="일기를 입력해주세요."
        addstyle={() => {
          return css`
            border: 2px solid rgb(${(props) => props.theme.palette.olive});
            border-radius: 10px;
          `;
        }}
      ></TextArea>

      <TextArea
        changeEvent={$tag}
        margin="3% auto"
        width="85%"
        height="50px"
        type="text"
        placeholder="태그를 입력해주세요. "
        addstyle={() => {
          return css`
            border: 2px solid rgb(${(props) => props.theme.palette.olive});
            border-radius: 10px;
          `;
        }}
      ></TextArea>

      <Button
        clickEvent={createBtn}
        width="120px"
        margin="2% auto"
        color="white"
        bgColor="olive"
        fontSize="18px"
        fontWeight="800"
        radius="15px"
      >
        작성하기
      </Button>
    </Template>
  );
};

const CheckGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckText = styled.p`
  font-weight: 800;
  font-size: 16px;
  margin: 0px 5px;
`;

const CheckBox = styled.input`
  width: 20x;
  height: 20px;
`;

export default CatDetailInfoWrite;
