// library
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

// component
import { Template } from '../components';

// element
import { Grid, Image, TextArea, Input, Button } from '../elements/index';

// stlye
import { flexBox } from '../shared/style';

// icon
import { Camera } from 'react-feather';

// redux
import { imgActions } from '../redux/modules/image';
import { __createCatInfo } from '../redux/modules/cat';

const CatInfoWrite = (props) => {
  const dispatch = useDispatch();

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
    { key: 1, value: '중성화 여부' },
    { key: 2, value: 'YES' },
    { key: 3, value: 'NO' },
    { key: 4, value: 'UNDEFINED' },
  ];

  const [userName, setUserName] = useState('');
  const $userName = (e) => {
    setUserName(e.target.value);
  };

  const [catName, setCatName] = useState('');
  const $catName = (e) => {
    setCatName(e.target.value);
  };

  const [location, setLocation] = useState('');
  const $location = (e) => {
    setLocation(e.target.value);
  };

  const [neutering, setNeutering] = useState('중성화 여부');
  const $neutering = (e) => {
    setNeutering(e.target.value);
  };

  const [catTag, setCatTag] = useState();
  const $catTag = (e) => {
    setCatTag(e.target.value);
  };

  const latitude = 0;
  const longitude = 0;

  const createBtn = () => {
    dispatch(
      __createCatInfo(
        catName,
        [catTag],
        neutering,
        location,
        userName,
        latitude,
        longitude,
      ),
    );
  };

  return (
    <Template props={props}>
      <Grid>
        <Grid width="80%" bgColor="lightGray" padding="12px" margin="5% auto">
          <label htmlFor="imgFile">
            <Camera width="100%" height="100" color="white" />
          </label>

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

        {fileUrl && (
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
        )}

        <Grid width="80%" margin="10% auto">
          <Input
            padding="6px"
            width="96%"
            radius="10px"
            placeholder="닉네임"
            changeEvent={$userName}
          />

          <Input
            margin="5% 0"
            padding="6px"
            width="96%"
            radius="10px"
            placeholder="고양이 이름"
            changeEvent={$catName}
          />

          <Input
            padding="6px"
            width="96%"
            radius="10px"
            placeholder="지역"
            changeEvent={$location}
          />

          <Select value={neutering} onChange={$neutering}>
            {Options.map((item, index) => (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            ))}
          </Select>

          <TextArea
            margin="5% 0 0 0"
            width="91%"
            placeholder="태그"
            changeEvent={$catTag}
          ></TextArea>

          <Button
            clickEvent={createBtn}
            bgColor="olive"
            color="white"
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
  background: white;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 100%;
  border-radius: 10px;
  padding: 6px;
  margin-top: 5%;
  outline: none;
`;
export default CatInfoWrite;
