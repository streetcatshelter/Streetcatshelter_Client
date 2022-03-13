const makeMap = (kakao) => {
  const mapContainer = document.getElementById("myMap");
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(mapContainer, mapOption);
  const mapTypeControl = new kakao.maps.MapTypeControl();
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  const zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  return map;
};

export default makeMap;
