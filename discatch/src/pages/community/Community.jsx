// LIBRARY
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// STYLE
import { css } from "styled-components";

// COMPONENTS
import {
  CommunityCategoryCard,
  Template,
  SecondSpinner,
  Toast,
} from "../../components";

// ELEMENTS
import { Grid } from "../../elements/index";

// REDUX
import { history } from "../../redux/configureStore";

// IMAGES
import Community1 from "../../styles/images/Community1.png";
import Community2 from "../../styles/images/Community2.png";
import Community3 from "../../styles/images/Community3.png";

const Community = (props) => {
  const isLoaded = useSelector((state) => state.community.pageLoaded);
  const userLocation = useSelector((state) => state.map.keywordList[0]);
  const village = userLocation ? userLocation : props.location.state?.location;
  const [villageState, setVillageState] = useState(false);

  const requestLocationInfo = () => {
    setVillageState(true);
    setTimeout(() => {
      history.push("/userinfoedit");
    }, 1000);
  };

  useEffect(() => {
    if (villageState) {
      setTimeout(() => {
        setVillageState(false);
      }, 1500);
    }
  }, [villageState]);

  return (
    <>
      <SecondSpinner visible={isLoaded} />
      <Template props={props}>
        {village !== undefined ? (
          <Grid
            addstyle={() => {
              return css`
                width: 100%;
                max-width: 420px;
                height: 80vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                @media screen and (max-height: 736px) {
                  height: 78vh;
                }
              `;
            }}
          >
            <CommunityCategoryCard
              src={Community1}
              clickEvent={() =>
                history.push({
                  pathname: `/community/${village}/catinfo`,
                  state: { location: village },
                })
              }
              width="100px"
              height="100px"
              title="고양이 정보글!"
              subtitle="고양이는 집사를 좋아해요~"
            />

            <CommunityCategoryCard
              src={Community2}
              clickEvent={() =>
                history.push({
                  pathname: `/community/${village}/gathering`,
                  state: { location: village },
                })
              }
              width="100px"
              height="100px"
              title={`${village} 동네 모임`}
              subtitle="동네 고양이에 대해 얘기 나눠봐요!"
            />
            <CommunityCategoryCard
              src={Community3}
              clickEvent={() =>
                history.push({
                  pathname: `/community/${village}/sharing`,
                  state: { location: village },
                })
              }
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
              title={`동네 모임`}
              subtitle="동네 고양이에 대해 얘기 나눠봐요!"
            />
            <CommunityCategoryCard
              src={Community3}
              clickEvent={() => requestLocationInfo()}
              width="100px"
              height="100px"
              title={`고양이 물건 나눔`}
              subtitle="고양이를 위한 물건을 나눠봐요!"
            />
          </Grid>
        )}
        {villageState && <Toast message="동네 정보를 입력해주세요!" />}
      </Template>
    </>
  );
};

export default Community;
