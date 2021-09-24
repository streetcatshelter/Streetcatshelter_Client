/*global kakao*/
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMap, searchKeywordMap } from "../../redux/modules/map";

/* == Library - style */
import styled from "styled-components";
import { Place } from "@material-ui/icons";
import { Map } from "react-feather";

const Location = (props) => {
  const dispatch = useDispatch();
  //리덕스에서 키워드를 받아옵니다.
  const villageKeyword = useSelector((state) => state.map.keywordList[0]);
  const typeKeyword = useSelector((state) => state.map.typeKeywordList[0]);
  const typeVillageKeyword = villageKeyword + typeKeyword;

  const [searchKeyword, setSearchKeyword] = useState();
  const [Pagination, SetPagination] = useState("");
  const [Places, setPlaces] = useState([]);

  const PlaceVisible = Places.length === 0 ? false : true;
  const [listVisible, setListVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const ChangeKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const CreateKeyword = () => {
    if (searchKeyword === "") {
      window.alert("검색어를 입력해주세요!");
      return;
    }
    dispatch(searchKeywordMap(searchKeyword));
    setModal(true);
    setListVisible(true);
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(typeVillageKeyword, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      SetPagination(pagination);
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
    setSearchKeyword("");
  };

  //위도 저장
  const [latitude, setLatitude] = useState();
  //경도 저장
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    setPlaces([]);
    var mapContainer = document.getElementById("myMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //지도 마커 표시하기//
    const marker = new kakao.maps.Marker({ position: map.getCenter() });

    // 지도에 마커를 표시합니다.
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      //클릭한 위도, 경도 정보를 가져옵니다.
      const latlng = mouseEvent.latLng;
      //위도 경도 값을 useState를 이용해서 useEffect 밖으로 빼냅니다.
      setLatitude(latlng.getLat());
      setLongitude(latlng.getLng());
      //마커 위치를 클릭한 위치로 옮깁니다.
      marker.setPosition(latlng);
      //마커를 지도상에 보여줍니다.
      marker.setMap(map);
    });

    //가져온 키워드를 검색합니다.
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(villageKeyword, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          // displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      }
    }
  }, [villageKeyword]);

  return (
    <MapWrap>
      <div
        style={{
          display: "flex",
          border: "1px solid #FBD986",
          width: "300px",
          height: "30px",
          borderRadius: "15px",
          margin: "10px auto",
        }}
      >
        <input
          style={{
            width: "250px",
            border: "none",
            marginLeft: "10px",
          }}
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchKeyword}
          onChange={ChangeKeyword}
        />
        <div
          style={{
            backgroundColor: "#FBD986",
            width: "50px",
            borderRadius: "15px",
          }}
          type="summit"
          onClick={CreateKeyword}
        >
          <p
            style={{
              margin: "5px auto",
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            검색
          </p>
        </div>
      </div>
      <div
        id="myMap"
        style={{ width: "100%", height: "500px", margin: "auto" }}
      />
      <MapIcon
        listVisible={listVisible}
        onClick={() => {
          setModal(!modal);
        }}
      />
      {modal ? (
        <ListWrap visible={PlaceVisible}>
          {Pagination === "" ? (
            ""
          ) : (
            <TotalPage>
              총<span> {Pagination.totalCount}</span> 개의 결과가 있습니다.
            </TotalPage>
          )}
          <div id="result-list">
            {Places.map((item, i) => (
              <List props={Places} key={i}>
                <ListNum>{i + 1}</ListNum>
                <ListDesc>
                  <p>{item.place_name}</p>
                  {item.road_address_name ? (
                    <div>
                      <span>{item.road_address_name}</span>
                      <span>{item.address_name}</span>
                    </div>
                  ) : (
                    <span>{item.address_name}</span>
                  )}
                  <span>{item.phone}</span>
                </ListDesc>
              </List>
            ))}
            <PagenationWrap id="pagination"></PagenationWrap>
          </div>
        </ListWrap>
      ) : (
        ""
      )}
      <div>
        여기는 경도 {latitude} 위도{longitude}입니다!
      </div>
    </MapWrap>
  );
};

const MapIcon = styled(Map)`
  display: ${(props) => (props.listVisible ? "block" : "none")};
  position: fixed;
  top: 110px;
  margin: 10px;
  background: #fbd986;
  padding: 5px;
  border-radius: 10px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background: #cbcf52;
  }
`;
const ListWrap = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 150px;
  width: 200px;
  height: 400px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
`;
const MapWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const List = styled.div`
  margin-top: 20px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: rgba(251, 216, 134, 0.7);
    border-radius: 10px;
  }
`;

const ListNum = styled.span`
  font-weight: 900;
  margin: 0px 10px;
`;
const ListDesc = styled.div`
  p {
    margin: 0px;
    font-weight: 900;
    font-size: 12px;
  }
  span {
    font-size: 10px;
  }
`;

const TotalPage = styled.p`
  display: flex;
  font-weight: 900;
  span {
    background: #fbd986;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    padding: 1px 1px 2px 1px;
  }
`;

const PagenationWrap = styled.div`
  margin: 10px auto;
  text-align: center;
  a {
    display: inline-block;
    margin: 2px;
    text-decoration: none;
    color: #000000;
    width: 15px;
    height: 15px;
  }
  .on {
    font-weight: 900;
    cursor: pointer;
    background: #fbd986;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

export default Location;
