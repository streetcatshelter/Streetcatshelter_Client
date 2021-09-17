// library
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

// component
import { Template } from '../components';

// element
import { Grid, TextArea, Button, Input, Image } from '../elements';

// style
import { flexBox } from '../shared/style';

// icon
import { Camera } from 'react-feather';

// redux
import { imgActions } from '../redux/modules/image';

const CatDetailInfoWrite = (props) => {
  const dispatch = useDispatch();
  const [works, setWorks] = useState([]);
  const changeWorks = (e) => {
    setWorks([...works, e.target.value]);
  };
  // console.log(works);

  const [fileUrl, setFileUrl] = useState(null);
  // S3
  const handleInputFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    dispatch(imgActions.setInitialState());
    dispatch(imgActions.setFile([file]));
    setFileUrl(imageUrl);
  };

  return (
    <Template props={props}>
      <Grid width="80%" bgColor="lightGray" padding="12px" margin="5% auto">
        <label htmlFor="imgFile">
          <Camera width="100%" height="100" color="white" />
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

      <Grid
        display="flex"
        justifyContent="space-around"
        margin="auto"
        width="90%"
      >
        <CheckGrid>
          <CheckBox type="checkbox" value="water" onClick={changeWorks} />
          <CheckText>급수</CheckText>
        </CheckGrid>
        <CheckGrid>
          <CheckBox type="checkbox" value="feed" onClick={changeWorks} />
          <CheckText>사료</CheckText>
        </CheckGrid>
        <CheckGrid>
          <CheckBox type="checkbox" value="treat" onClick={changeWorks} />
          <CheckText>간식</CheckText>
        </CheckGrid>
      </Grid>

      <TextArea
        margin="3% auto"
        width="85%"
        type="text"
        placeholder="일기를 입력해주세요. "
        addstyle={() => {
          return css`
            border: 2px solid rgb(${(props) => props.theme.palette.olive});
            border-radius: 10px;
          `;
        }}
      />

      <TextArea
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
      />

      <Button
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
