// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import { CommunityCategoryCard, Template } from "../../components";

// ELEMENTS
import { Grid } from "../../elements/index";

// REDUX
import { history } from "../../redux/configureStore";

// IMAGES
import Community1 from "../../styles/images/Community1.svg";
import Community2 from "../../styles/images/Community2.svg";
import Community3 from "../../styles/images/Community3.svg";

const Community = (props) => {
  const village = useSelector((state) => state.map.keywordList[0]);

  const requestLocationInfo = () => {
    history.push("/userinfoedit");
    alert("동네 정보를 입력해주세요!");
  };

  return (
    <Template props={props}>
      {village !== undefined ? (
        <Grid margin="10vh 0 0 0">
          <CommunityCategoryCard
            src={Community1}
            clickEvent={() => history.push(`/community/${village}/catinfo`)}
            width="100px"
            height="100px"
            title="고양이 정보글!"
            subtitle="고양이는 집사를 좋아해요~"
          />
          <CommunityCategoryCard
            src={Community2}
            clickEvent={() => history.push(`/community/${village}/gathering`)}
            width="100px"
            height="100px"
            title={`${village} 동네 모임`}
            subtitle="동네 고양이에 대해 얘기 나눠봐요!"
          />
          <CommunityCategoryCard
            src={Community3}
            clickEvent={() => history.push(`/community/${village}/sharing`)}
            width="100px"
            height="100px"
            title={`${village} 고양이 물건 나눔`}
            subtitle="고양이를 위한 물건을 나눠봐요!"
          />
        </Grid>
      ) : (
        <Grid margin="10vh 0 0 0">
          <CommunityCategoryCard
            src={Community1}
            clickEvent={() => requestLocationInfo()}
            width="100px"
            height="100px"
            title="고양이 정보글!"
            subtitle="고양이는 츄르를 좋아해요~"
          />
          <CommunityCategoryCard
            src={Community2}
            clickEvent={() => requestLocationInfo()}
            width="100px"
            height="100px"
            title={`${village} 동네 모임`}
            subtitle="동네 고양이에 대해 얘기 나눠봐요!"
          />
          <CommunityCategoryCard
            src={Community3}
            clickEvent={() => requestLocationInfo()}
            width="100px"
            height="100px"
            title={`${village} 고양이 물건 나눔`}
            subtitle="고양이를 위한 물건을 나눠봐요!"
          />
        </Grid>
      )}
    </Template>
  );
};

export default Community;
