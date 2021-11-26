// LIBRARY
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// STYLE
import { css } from "styled-components";

// COMPONENTS
import { Template, CatPost, SecondHeader, Spinner } from "../../components";

// ELEMENTS
import { Button, Grid } from "../../elements";

// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// REDUX
import { history } from "../../redux/configureStore";
import { __getCatLocation, __getMoreCat } from "../../redux/modules/cat";

// FUNCTION
import InfinityScroll from "../../shared/InfinityScroll";

const Home = (props) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.mypage.isLoaded);
  const menuLocation = props.location.state?.location;
  const catList = useSelector((state) => state.cat.list);

  const userLocation = useSelector((state) => state.map.keywordList[0]);

  const userVillage = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[0]
  );
  const pathLocation = userLocation
    ? userLocation
    : menuLocation || userVillage;

  const userVillage0 = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[0]?.split("(")[0]
  );

  const userVillageA = useSelector(
    (state) => state.mypage.userVillage[0]?.split("@")[1]?.split("(")[0]
  );

  const userVillage1 = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[0]?.split("(")[0]
  );

  const userVillageB = useSelector(
    (state) => state.mypage.userVillage[1]?.split("@")[1]?.split("(")[0]
  );

  const userVillage2 = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[0]?.split("(")[0]
  );

  const userVillageC = useSelector(
    (state) => state.mypage.userVillage[2]?.split("@")[1]?.split("(")[0]
  );

  let location;
  if (pathLocation === userVillage0) {
    location = userVillageA;
  } else if (pathLocation === userVillage1) {
    location = userVillageB;
  } else if (pathLocation === userVillage2) {
    location = userVillageC;
  }

  location = location?.substring(0, location.length - 1);

  const requestLocationInfo = () => {
    history.push("/userinfoedit");
    alert("동네 정보를 입력해주세요!");
  };

  useEffect(() => {
    dispatch(__getCatLocation(location));
  }, [location, dispatch]);

  const getMoreCat = () => {
    dispatch(__getMoreCat(location));
  };
  
  return (
    <>
      <Spinner visible={isLoaded} />
      {location !== undefined ? (
        <Template props={props} location={pathLocation}>
        <SecondHeader title={`${pathLocation} 고양이들을 소개합니다!`} />
        
        {catList.length ? (
          catList.map((cat, idx) => {
            return (
              <Grid
                addstyle={() => {
                  return css`
                    position:relative;
                    bottom: 10px;
                  `;
                }}>
              <InfinityScroll
                next={getMoreCat}
                index={idx}
                length={catList.length}
                key={cat.catId}
              >
                <CatPost cat={cat} location={pathLocation} />
              </InfinityScroll>
              </Grid>
            );
          })
        ) : (
          <></>
        )}

        <Button
          is_float="is_float"
          clickEvent={() => {
            history.push({
              pathname: `/map/${pathLocation}`,
              state: { location : pathLocation },
            });
          }}
        >
          <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
        </Button>
      </Template>
      ) : (
        <Template props={props} location={pathLocation}>
        <SecondHeader title={'고양이들을 소개합니다!'} />
        <Button
          is_float="is_float"
          clickEvent={() => {requestLocationInfo()}}>
          <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
        </Button>
      </Template>
      )}
    </>
  );
};

export default Home;
