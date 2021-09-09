import React from 'react';

// STYLE
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Input, TextArea } from '../elements/index';

// ROUTE
import { Link } from 'react-router-dom';

const CommunityPostEdit = () => {
  const Options = [
    {key: 1, value:'게시글 주제를 선택해주세요!'},
    {key: 2, value:'고양이 정보글'},
    {key: 3, value:'동네 모임'},
    {key: 4, value:'고양이 용품 나눔'},
  ]
  const [content, setContent] = React.useState('게시글 주제를 선택해주세요!');
  const onChangeHandler=(e)=> {
    setContent(e.currentTarget.value);
  }

  return (
    <Grid 
      bgColor="bgColor"
      margin="-10vh auto"
      addstyle={() => {
        return css`
          position:relative;
          top:80px;
        `;
      }}
      >
      <CommunityEditStyle>
        <Grid width="335px" height="10%" margin="0 0 30px 0">
          <Select onChange={onChangeHandler} value={content}>
          {Options.map((item, index)=>(
              <option key={item.key} value={item.value}>{item.value}</option>
            ))}
          </Select>
        </Grid>
        <Grid width="335px" height="10%">
          <Input 
            placeholder="제목을 입력해주세요."
            addstyle={() => {
              return css`
                border-radius: 10px;
              `;
            }}
            />
        </Grid>
        <Grid width="325px">
          <TextArea 
            placeholder="내용을 입력해주세요." 
            height="300px"
            addstyle={() => {
              return css`
                resize: none;
              `;
            }}
            />
        </Grid>
        <Grid 
          width="225px"
          height="30px"
          addstyle={() => {
            return css`
            display: flex;
            margin: 30px 0 0 -60px;
            `;
          }}
        >
        <Button 
          width="108px"
          margin="-300px auto"
          color="white"
          fontSize="14px"
          bgColor="brown"
          addstyle={() => {
            return css`
            display: flex;
            height: 24px;
            border-radius: 50px;
            align-items:center;
            justify-content: center;
            position:relative;
            top:80px;
            left:130px;
            `;
          }}>완료하기</Button>
          <Link to='/communitypostdetail' style={{textDecoration:'none'}}>
          <Button 
          width="108px"
          margin="-300px auto"
          color="white"
          fontSize="14px"
          bgColor="brown"
          addstyle={() => {
            return css`
            display: flex;
            height: 24px;
            border-radius: 50px;
            align-items:center;
            justify-content: center;
            position:relative;
            top:80px;
            left:130px;
            `;
          }}>취소하기</Button>
          </Link>
          </Grid>
      </CommunityEditStyle>
    </Grid>
  );
};

const CommunityEditStyle = styled.div`
  position:relative;
  /* border: 2px solid rgb(${(props) => props.theme.palette.olive}); */
  width: 360px;
  height: 80vh;
  margin: 10px auto;
  overflow:hidden;
  left:4px;
`;

const Select = styled.select`
  background: rgb(${(props) => props.theme.palette.bgColor});;
  height: 50px;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 350px;
  border-radius: 10px;
`;

export default CommunityPostEdit;
