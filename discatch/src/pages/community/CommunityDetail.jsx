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
  EmptyPost,
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
  resetList,
} from "../../redux/modules/community";
import { history } from "../../redux/configureStore";

const CommunityDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const communityList = useSelector((state) =>
    params.category === "catinfo"
      ? state.community.catInfo
      : params.category === "gathering"
      ? state.community.gathering
      : state.community.sharing
  );
  const loading = useSelector((state) => state.community.itemLoaded);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const pathLocation = props.match.params.village;
  let location = pathLocation;

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

  useEffect(() => {
    setPage(1);
    dispatch(resetList());
    dispatch(getCommunityDB(category, location, page));
  }, [category, location, dispatch]);

  useEffect(() => {
    if (
      inView &&
      communityList.length > 9 &&
      communityList.length / 10 === page
    ) {
      setPage((prevState) => prevState + 1);
      dispatch(getMoreCommunityDB(category, location, page + 1));
    } else {
      return;
    }
  }, [inView, dispatch]);

  return (
    <Template props={props}>
      <SecondHeader title={category} path="scroll" />
      <CommunityDetailStyle>
        {communityList && communityList.length > 0 ? (
          communityList.map((community, idx) => {
            return (
              <div style={{ width: "100%" }} key={idx} ref={ref}>
                <CommunityPost community={community} />
              </div>
            );
          })
        ) : (
          <EmptyPost path="community" />
        )}
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
