const MakeMarker = (kakao, newMap, setLatitude, setLongitude) => {
  const marker = new kakao.maps.Marker();

  kakao.maps.event.addListener(newMap, "click", function (mouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;
    setLatitude(latlng.getLat());
    setLongitude(latlng.getLng());
    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
    marker.setMap(newMap);
  });
};

export default MakeMarker;
