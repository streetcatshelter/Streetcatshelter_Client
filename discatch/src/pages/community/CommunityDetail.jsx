// LIBRARY
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import {
  Template,
  CommunityPost,
  SecondHeader,
  SecondSpinner,
} from "../../components";

// STYLE
import styled from "styled-components";

// ELEMENTS
import { Button } from "../../elements/index";

// ROUTE
import { useLocation, useParams } from "react-router-dom";

//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// REDUX
import {
  getCommunityDB,
  getMoreCommunityDB,
} from "../../redux/modules/community";
import { history } from "../../redux/configureStore";

const CommunityDetail = (props) => {
  const dispatch = useDispatch();
  const Params = useParams();

  const communityList = useSelector((state) =>
    Params.category === "catinfo"
      ? state.community.catInfo
      : Params.category === "gathering"
      ? state.community.gathering
      : state.community.sharing
  );
  const loading = useSelector((state) => state.community.itemLoaded);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const pathLocation = props.match.params.village.split("@")[0];
  let location;
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

  if (pathLocation === userVillage0) {
    location = userVillageA;
  } else if (pathLocation === userVillage1) {
    location = userVillageB;
  } else if (pathLocation === userVillage2) {
    location = userVillageC;
  }

  const path = useLocation();
  let category = null;
  let nextPath = null;
  if (path.pathname === `/community/${pathLocation}/catinfo`) {
    category = "고양이 정보글";
    nextPath = "catinfo";
  } else if (path.pathname === `/community/${pathLocation}/gathering`) {
    category = `${pathLocation} 동네 모임`;
    nextPath = "gathering";
  } else if (path.pathname === `/community/${pathLocation}/sharing`) {
    category = `${pathLocation} 고양이 용품 나눔`;
    nextPath = "sharing";
  }

  location = location?.substring(0, location.length - 1);

  useEffect(() => {
    if (communityList.length === 0) {
      dispatch(getCommunityDB(category, location, page));
    }
  }, []);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있다면,
    if (inView && communityList.length % (page * 10) === 0) {
      setPage((prevState) => prevState + 1);
      dispatch(getMoreCommunityDB(category, location, page));
    } else {
      return;
    }
  }, [inView]);

  return (
    <Template props={props}>
      <SecondHeader title={category} />
      <CommunityDetailStyle>
        {communityList &&
          communityList.length > 0 &&
          communityList.map((community, idx) => {
            return (
              <div style={{ width: "100%" }} key={idx} ref={ref}>
                <CommunityPost community={community} />
              </div>
            );
          })}
      </CommunityDetailStyle>
      <SecondSpinner visible={loading} path="scroll" />
      <Button
        clickEvent={() =>
          history.push(`/community/${pathLocation}/${nextPath}/write`)
        }
        is_float="is_float"
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: "20px" }} />
      </Button>
    </Template>
  );
};

const CommunityDetailStyle = styled.div`
  height: 80%;
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CommunityDetail;
