/*global kakao*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Location = (props) => {
  //위도 저장
  const [latitude, setLatitude] = useState();
  //경도 저장
  const [longitude, setLongitude] = useState();
  // const keyword = useSelector((state) => state.map.list[0]);
  // console.log(keyword);
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
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

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch("망원동", placesSearchCB);

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
    //해당 키워드에 마커를 표시//
    // function displayMarker(place) {
    //   let marker = new kakao.maps.Marker({
    //     map: map,
    //     position: new kakao.maps.LatLng(place.y, place.x),
    //   });
    // }
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: "100%", height: "500px", margin: "auto" }}
      ></div>
      <div>
        여기는 경도 {latitude} 위도{longitude}입니다!
      </div>
    </div>
  );
};

export default Location;
