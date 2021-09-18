import React, { useState } from 'react';

/* == components*/
import { Template } from '../components';

/* == Custom - Elements*/
import { Grid, TextArea, Button } from '../elements';

/* == Library - style */
import styled, { css } from 'styled-components';
import { flexBox } from '../shared/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const CatDetailInfoWrite = (props) => {
  const [works, setWorks] = useState([]);
  const changeWorks = (e) => {
    setWorks([...works, e.target.value]);
  };
  // console.log(works);
  return (
    <Template props={props}>
      <Grid
        width="90%"
        height="150px"
        background="#d3d3d3"
        margin="5% auto"
        addstyle={() => {
          return css`
            ${flexBox('center')}
          `;
        }}
      >
        <FontAwesomeIcon icon={faCamera} size="3x" style={{ color: 'white' }} />
      </Grid>

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
        width="140px"
        margin="2% auto"
        color="white"
        bgColor="olive"
        fontSize="18px"
        fontWeight="800"
        addstyle={() => {
          return css`
            border-radius: 20px;
          `;
        }}
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
