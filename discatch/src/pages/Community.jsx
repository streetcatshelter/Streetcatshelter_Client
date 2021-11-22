// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import { CommunityCategoryCard, Template } from "../components";

// ELEMENTS
import { Grid } from "../elements/index";

// REDUX
import { history } from "../redux/configureStore";

// IMAGES
import Community1 from '../styles/images/Community1.jpg';
import Community2 from '../styles/images/Community2.jpg';
import Community3 from '../styles/images/Community3.jpg';

const Community = (props) => {
  const location = useSelector((state) => state.map.keywordList[0]);

  const requestLocationInfo = () => {
    history.push('/userinfoedit');
    alert('동네 정보를 입력해주세요!')
  }
  
  return (
    <Template props={props}>
      {location !== undefined ? (
      <Grid margin="10vh 0 0 0">
          <CommunityCategoryCard
            src={Community1}
            clickEvent={()=>history.push({pathname:`/community/${location}/catinfo`, state : { location }})}
            width="100px"
            height="100px"
            title="고양이 정보글!"
            subtitle="고양이는 츄르를 좋아해요~"
          />
          <CommunityCategoryCard
            src={Community2}
            clickEvent={()=>history.push({pathname:`/community/${location}/gathering`, state : { location }})}
            width="100px"
            height="100px"
            title="동네 모임"
            subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
          />
          <CommunityCategoryCard
            src={Community3}
            clickEvent={()=>history.push({pathname:`/community/${location}/sharing`, state : { location }})}
            width="100px"
            height="100px"
            title="고양이 용품 나눔"
          />
      </Grid>) : (
      <Grid margin="10vh 0 0 0">
          <CommunityCategoryCard
            src={Community1}
            clickEvent={()=>requestLocationInfo()}
            width="100px"
            height="100px"
            title="고양이 정보글!"
            subtitle="고양이는 츄르를 좋아해요~"
          />
          <CommunityCategoryCard
            src={Community2}
            clickEvent={()=>requestLocationInfo()}
            width="100px"
            height="100px"
            title="동네 모임"
            subtitle="동네 고양이님들에 대해 얘기 나눠 보아요~"
          />
          <CommunityCategoryCard
            src={Community3}
            clickEvent={()=>requestLocationInfo()}
            width="100px"
            height="100px"
            title="고양이 용품 나눔"
          />
      </Grid>
        )}
    </Template>
  );
};

export default Community;