import React from 'react';

// STYLE
import styled, { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Input, TextArea, Text } from '../elements/index';

// ROUTE
import { Link } from 'react-router-dom';

// ICON
import { Camera } from "react-feather";

const CommunityPostWrite = () => {
  const Options = [
    {key: 1, value:'게시글 주제를 선택해주세요!'},
    {key: 2, value:'고양이 정보글'},
    {key: 3, value:'평창동 동네 모임'},
    {key: 4, value:'평창동 고양이 용품 나눔'},
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
      <CommunityWriteStyle>
      <Grid width="335px" height="auto" margin="0 0 16px 0">
          <Select 
            onChange={onChangeHandler} 
            value={content}
            style={{height:"32px"}}>
          {Options.map((item, index)=>(
              <option key={item.key} value={item.value}>{item.value}</option>
            ))}
          </Select>
        </Grid>
        <Grid width="335px" height="10%">
        <Input 
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
                /* display:flex; */
                white-space:nowrap; 
                overflow-x: auto; 
                height:120px;
                -ms-overflow-style: none;
                &::-webkit-scrollbar { 
                  display: none; 
                }
              `;
            }}
            >
              
            <Grid
              width={'90px'} 
              height={'90px'} 
              margin={'5.5px'} 
              addstyle={() => {
                return css`
                  position:relative;
                  background:lightgray;
                  display:inline-block;
                  text-align:center;
                  top:-34px;
                  cursor:pointer;
                `;
              }}>
                <Grid
                addstyle={() => {
                  return css`
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                  `;
                }}>
                <Camera width="50%" height="50%"color="white"/>
                <Text size="9px" fontWeight="bold">0/5</Text>
                </Grid>
            </Grid>
            <Grid
              width={'90px'} 
              height={'90px'} 
              margin={'5.5px'} 
              addstyle={() => {
                return css`
                  background:lightgray;
                  display:inline-block; 
                `;
              }}></Grid>
            <Grid
              width={'90px'} 
              height={'90px'} 
              margin={'5.5px'} 
              addstyle={() => {
                return css`
                  background:lightgray;
                  display:inline-block; 
                `;
              }}></Grid>
            <Grid
              width={'90px'} 
              height={'90px'}
              margin={'5.5px'} 
              addstyle={() => {
                return css`
                  background:lightgray;
                  display:inline-block; 
                `;
              }}></Grid>
            <Grid
              width={'90px'} 
              height={'90px'}
              margin={'5.5px'} 
              addstyle={() => {
                return css`
                  background:lightgray;
                  display:inline-block; 
                `;
              }}></Grid>
              
              
          </Grid>
          <TextArea 
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
        
        <Grid width="325px">
          
        </Grid>
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
          addstyle={() => {
            return css`
            display: flex;
            height: 24px;
            border-radius: 10px;
            align-items:center;
            justify-content: center;
            position:relative;
            top:-65px;
            left:130px;
            `;
          }}>작성하기</Button>
          <Link to='/communitydetail' style={{textDecoration:'none'}}>
          <Button 
          width="108px"
          margin="auto"
          fontSize="14px"
          fontWeight="bold"
          bgColor="D_yellow"
          addstyle={() => {
            return css`
            display: flex;
            height: 24px;
            border-radius: 10px;
            align-items:center;
            justify-content: center;
            position:relative;
            top:-62px;
            left:137px;
            `;
          }}>취소하기</Button>
          </Link>
          </Grid>
      </CommunityWriteStyle>
    </Grid>
  );
};

const CommunityWriteStyle = styled.div`
  /* border: 2px solid rgb(${(props) => props.theme.palette.olive}); */
  width: 350px;
  height: 60vh;
  margin: 10px auto;
  border-radius: 30px;
`;

const Select = styled.select`
  background: rgb(${(props) => props.theme.palette.bgColor});;
  height: 50px;
  border: 1px solid rgb(${(props) => props.theme.palette.olive});
  width: 350px;
  border-radius: 10px;
`;

export default CommunityPostWrite;
