// LIBRARY
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// STYLE
import { css } from "styled-components";

// COMPONENTS
import { CommunityCategoryCard, Template, Spinner } from "../../components";

// ELEMENTS
import { Grid } from "../../elements/index";

// REDUX
import { history } from "../../redux/configureStore";
import { pageLoading } from "../../redux/modules/community";
// IMAGES
import Community1 from "../../styles/images/Community1.png";
import Community2 from "../../styles/images/Community2.png";
import Community3 from "../../styles/images/Community3.png";

const Community = (props) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.community.pageLoaded);
  const village = useSelector((state) => state.map.keywordList[0]);

  const requestLocationInfo = () => {
    history.push("/userinfoedit");
    alert("동네 정보를 입력해주세요!");
  };
  useEffect(() => {
    dispatch(pageLoading(true));
    setTimeout(() => {
      dispatch(pageLoading(false));
    }, 300);
  }, [dispatch]);
  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props}>
        {village !== undefined ? (
          <Grid
            margin="10vh 0 0 0"
            addstyle={() => {
              return css`
                @media screen and (max-height: 1366px) {
                  margin: 30vh 0 0 0;
                }
                @media screen and (max-height: 1024px) {
                  margin: 20vh 0 0 0;
                }
                @media screen and (max-height: 823px) {
                  margin: 15vh 0 0 0;
                }
                @media screen and (max-height: 812px) {
                  margin: 14vh 0 0 0;
                }
                @media screen and (max-height: 736px) {
                  margin: 10vh 0 0 0;
                }
                @media screen and (max-height: 731px) {
                  margin: 10vh 0 0 0;
                }
                @media screen and (max-height: 667px) {
                  margin: 7vh 0 0 0;
                }
                @media screen and (max-height: 600px) {
                  margin: 4vh 0 0 0;
                }
                @media screen and (max-height: 568px) {
                  margin: 10px 0 0 0;
                }
              `;
            }}
          >
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
      </Template>
    </>
  );
};

export default Community;
