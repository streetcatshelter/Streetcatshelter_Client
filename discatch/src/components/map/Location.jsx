/*global kakao*/
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import { Toast } from "components";

// ROUTE
import { useLocation } from "react-router-dom";

// STYLE
import * as S from "./Location.styled";

// REDUX
import { history } from "redux/configureStore";
import { __getAllCatLocation } from "redux/modules/cat";

// HOOKS
import useToast from "hooks/useToast";

import ShowCats from "./ShowCat";
import MapModal from "./MapModal";
import { makeKaKaoMap } from "utils";
import MakeMarker from "./MakeMarker";
import SearchPlace from "./SearchPlace";

const Location = (props) => {
  const dispatch = useDispatch();
  const path = useLocation();
  const villageKeyword = useSelector((state) => state.map.keywordList[0]);
  const villageList = useSelector((state) => state.mypage.userVillage);
  const catId = props.props.match.params.id;
  const pathLength = path.pathname.split("/").length;
  const catLists = useSelector((state) => state.cat.list);
  //지도
  const [newMap, setNewMap] = useState("");
  const [location, setLocation] = useState("");

  // 고양이 정보 작성 페이지로 이동할 때 넘겨줄 위도와 경도
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // 토스트 모달
  const [toastState, setToastState] = useState(false);
  const [searchToastState, setSearchToastState] = useState(false);
  const [keywordToastState, setKeywordToastState] = useState(false);

  // 검색에 필요한 정보
  const [searchKeyword, setSearchKeyword] = useState("");
  const [modal, setModal] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [pagination, setPagination] = useState([]);

  const ChangeKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    setNewMap(makeKaKaoMap(kakao));
  }, []);

  useEffect(() => {
    newMap && MakeMarker(kakao, newMap, setLatitude, setLongitude);
  }, [newMap, setLatitude, setLongitude]);

  useEffect(() => {
    villageList.forEach(
      (village) =>
        villageKeyword === village.split(" ")[2] && setLocation(village)
    );
  }, [villageList, villageKeyword]);

  // 모든 고양이 기본 정보 가져오기
  useEffect(() => {
    location && dispatch(__getAllCatLocation(location));
  }, [location, dispatch]);

  // 고양이 지도에 표시하기
  useEffect(() => {
    if (catLists && location && newMap) {
      ShowCats(villageKeyword, catLists, location, kakao, newMap);
    }
  }, [newMap, villageKeyword, catLists, location, dispatch]);

  // 토스트 모달
  useToast(toastState, setToastState);
  useToast(keywordToastState, setKeywordToastState);
  useToast(searchToastState, setSearchToastState);

  return (
    <S.MapWrap>
      <S.SearchBox>
        <S.RefreshBtn onClick={() => history.go(0)} size="50" />
        <S.SearchInput
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchKeyword}
          onChange={ChangeKeyword}
        />
        <S.SumbmitBtn
          type="submit"
          onClick={() => {
            SearchPlace(
              kakao,
              newMap,
              location,
              searchKeyword,
              setModal,
              setPlaceList,
              setPagination
            );
            ShowCats(villageKeyword, catLists, location, kakao, newMap);
          }}
        ></S.SumbmitBtn>
      </S.SearchBox>
      <S.Map id="myMap" />

      {modal && <MapModal placeList={placeList} pagination={pagination} />}
      <S.FloatBtn
        is_float="is_float"
        clickEvent={() => {
          if (
            latitude !== undefined &&
            longitude !== undefined &&
            pathLength === 3
          ) {
            history.push({
              pathname: `/catinfowrite/${location?.split(" ")[2]}`,
              state: { latitude, longitude, location },
            });
          } else if (
            latitude !== undefined &&
            longitude !== undefined &&
            pathLength === 4
          ) {
            history.push({
              pathname: `/catdetailinfowrite/${catId}`,
              state: { latitude, longitude, location },
            });
          } else if (
            latitude === undefined &&
            longitude === undefined &&
            pathLength === 4
          ) {
            history.push({
              pathname: `/catdetailinfowrite/${catId}`,
              state: { location },
            });
          } else if (
            latitude === undefined &&
            longitude === undefined &&
            pathLength === 3
          ) {
            setToastState(true);
          }
        }}
      />
      {keywordToastState && <Toast message="검색 결과가 없습니다." />}
      {toastState && <Toast message="지도에 위치를 표시해 주세요!" />}
      {searchToastState && <Toast message="검색어를 입력해 주세요!" />}
    </S.MapWrap>
  );
};

export default Location;
