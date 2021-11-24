/*global kakao*/
import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchKeywordMap } from "../../redux/modules/map";

// ROUTE
import { useLocation } from 'react-router-dom';

// STYLE
import styled, { css } from "styled-components";
import { Map } from "react-feather";

// ELEMENTS
import { Button } from '../../elements';

// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// REDUX
import { history } from '../../redux/configureStore';
import { __getAllCatLocation } from '../../redux/modules/cat';

const Location = (props) => {
  const dispatch = useDispatch();
  const path = useLocation();
  const catId = props.props.match.params.id;
  const pathLength = path.pathname.split('/').length;
  let vKeyword;

  const pathVillage = path.pathname.split('/')[2];
  let location = pathVillage;
  let userVillage;
  const userVillage0 = useSelector((state) => state.mypage.userVillage[0]?.split('@')[0]?.split('(')[0]);
  const userVillageA = useSelector((state) => state.mypage.userVillage[0]?.split('@')[1]?.split('(')[0]);
  
  const userVillage1 = useSelector((state) => state.mypage.userVillage[1]?.split('@')[0]?.split('(')[0]);
  const userVillageB = useSelector((state) => state.mypage.userVillage[1]?.split('@')[1]?.split('(')[0]);
  
  const userVillage2 = useSelector((state) => state.mypage.userVillage[2]?.split('@')[0]?.split('(')[0]);
  const userVillageC = useSelector((state) => state.mypage.userVillage[2]?.split('@')[1]?.split('(')[0]);
  
  const villageKeyword = useSelector((state) => state.map.keywordList[0]);

  if (villageKeyword === userVillage0) {
    userVillage = userVillageA;
  } else if (villageKeyword === userVillage1) {
    userVillage = userVillageB
  } else if (villageKeyword === userVillage2) {
    userVillage = userVillageC
  } else if (userVillage0 === pathVillage) {
    userVillage = userVillageA;
  } else if (userVillage1 === pathVillage) {
    userVillage = userVillageB;
  } else if (userVillage2 === pathVillage) {
    userVillage = userVillageC;
  }

  if (userVillage0 === villageKeyword) {
    location = userVillage0;
  } else if (userVillage1 === villageKeyword) {
    location = userVillage1;
  } else if (userVillage2 === villageKeyword) {
    location = userVillage2;
  }

  if (villageKeyword === undefined) {
    if (userVillage0 === pathVillage) {
      vKeyword = userVillageA;
    } else if (userVillage1 === pathVillage) {
      vKeyword = userVillageB;
    } else if (userVillage2 === pathVillage) {
      vKeyword = userVillageC;
    }
  } else {
    if (userVillage0 === villageKeyword) {
      vKeyword = userVillageA;
    } else if (userVillage1 === villageKeyword) {
      vKeyword = userVillageB;
    } else if (userVillage2 === villageKeyword) {
      vKeyword = userVillageC;
    }
  }

  const pathLocation = location;

  if (location === userVillage0) {
    location = userVillageA;
  } else if (location === userVillage1) {
    location = userVillageB;
  } else if (location === userVillage2) {
    location = userVillageC;
  }

  const secondUserVillage = `${userVillage?.split(' ')[0]} ${userVillage?.split(' ')[1]} ${userVillage?.split(' ')[2]}`;
  location = location?.substring(0, location.length - 1);
  const catList = useSelector((state) => state.cat.list);

  useEffect(() => {
    dispatch(__getAllCatLocation(location));
  },[location, dispatch]);

  const showCats = () => {
    const mapContainer = document.getElementById("myMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 지도 마커 표시하기
    const marker = new kakao.maps.Marker({ position: map.getCenter() });

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
      for (let i = 0; i < position.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        const iwContent = `
        <div style="display:flex">
          <div style="width: 80px; height: 80px; border-radius:80px;">
            <img width="80" 
                 height="80"
                 border-radius="80"
                 src="${position[i].catImage}" 
                 alt="고양이 사진">
          </div>
          <div style="display: flex; 
                      width: 80px; 
                      height: 80px; 
                      justify-content: center; 
                      align-items: center;">
            <button 
              onclick="location.href='/catdetail/${villageKeyword}/${position[i].catId}/1'" 
              style="width: 70px;
                     height: 70px;
                     box-shadow: 3px 3px lightgray;
                     border: 0;
                     border-radius: 10px;
                     background-color: #fbd986;
                     cursor: pointer;">
                    ${position[i].catName}
                    <div>보러 가기</div>
            </button>
          </div>
        </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  
        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
        });

        // 마커를 생성합니다
        const markers = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position[i].latlng, // 마커를 표시할 위치
            title : catList[i].catName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
  
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(markers, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, markers);  
        });
        markers.setMap(map)
      }
    
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




    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(userVillage, placesSearchCB);
    
    // 고양이 마커 가져오기
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        ps.keywordSearch(secondUserVillage, placesSearchCB);
      }
    } 
  }


  const positions = [];
  const makePosition = () => {
      for (let i = 0; i < catList.length; i ++) {
        positions.push({
          catName : catList[i].catName, 
          latlng : new kakao.maps.LatLng(catList[i].latitude, catList[i].longitude),
          catId : catList[i].catId,
          catImage : catList[i].catImage,
        });
      }
      return positions;
  }
  const position = useMemo(() => makePosition(), [catList]);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [Pagination, SetPagination] = useState("");
  const [Places, setPlaces] = useState([]);

  const PlaceVisible = Places.length === 0 ? 0 : 1;
  const [listvisible, setListVisible] = useState(0);
  const [modal, setModal] = useState(0);

  const typeVillageKeyword = vKeyword + searchKeyword;

  const ChangeKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const CreateKeyword = () => {
    setSearchKeyword('')
    if (searchKeyword === "") {
      window.alert("검색어를 입력해주세요!");
      return;
    }
    dispatch(searchKeywordMap(searchKeyword));

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
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
      } else {
        alert('검색 결과가 없습니다!');
        showCats();
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
      // 지도 마커 표시하기
    const catMarker = new kakao.maps.Marker({ position: map.getCenter() });

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
      for (let i = 0; i < position.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
  
        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        let iwContent = `<button 
                           onclick="location.href='/catdetail/${location}/${position[i].catId}'" 
                           style="padding:5px; 
                                  margin:0 10px;
                                  border: 0;
                                  background-color: white;">
                          ${position[i].catName}보러가기
                          </button>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  
        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
        });
        
        // 마커를 생성합니다
        const markers = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position[i].latlng, // 마커를 표시할 위치
            title : catList[i].catName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
  
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(markers, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.open(map, markers);  
        });
        markers.setMap(map)
      }
    
      // 지도에 마커를 표시합니다.
      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      //클릭한 위도, 경도 정보를 가져옵니다.
      const latlng = mouseEvent.latLng;
      //위도 경도 값을 useState를 이용해서 useEffect 밖으로 빼냅니다.
      setLatitude(latlng.getLat());
      setLongitude(latlng.getLng());
      //마커 위치를 클릭한 위치로 옮깁니다.
      catMarker.setPosition(latlng);
      //마커를 지도상에 보여줍니다.
      catMarker.setMap(map);
    });




    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(userVillage, placesSearchCB);

    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      } 
    }
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
    setModal(1);
    setListVisible(1);
    setSearchKeyword('');
  };

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();


  useEffect(() => {
    showCats(userVillage, vKeyword, catList, position, location)
  }, [userVillage, vKeyword, catList, position, location, dispatch]);

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
        <button
          style={{
            border: 0,
            backgroundColor: "#FBD986",
            width: "50px",
            borderRadius: "15px",
          }}
          type="submit"
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
        </button>
      </div>
      <div
        id="myMap"
        style={{ width: "100%", height: "500px", margin: "auto" }}
      />
      <MapIcon
        listvisible={listvisible}
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
      <Button
        addstyle={() => {
          return css`
          `;
        }}
        is_float="is_float"
        clickEvent={() => {
          if(latitude !== undefined && longitude !== undefined && pathLength === 3) {
            history.push({
              pathname:`/catinfowrite/${pathLocation}`, 
              state: {latitude, longitude}});
          } else if (latitude !== undefined && longitude !== undefined && pathLength === 4) {
            history.push({
              pathname:`/catdetailinfowrite/${catId}`, 
              state: {latitude, longitude, location}});
          } else if (latitude === undefined && longitude === undefined && pathLength === 4) {
            history.push({
              pathname:`/catdetailinfowrite/${catId}`, 
              state: {location}});
          } else if (latitude === undefined && longitude === undefined && pathLength === 3) {
            alert('지도에 위치를 표시해주세요!');
          }
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} style={{ width: '20px' }} />
      </Button>
    </MapWrap>
  );
};

const MapIcon = styled(Map)`
  display: ${(props) => (props.listvisible ? "block" : "none")};
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
