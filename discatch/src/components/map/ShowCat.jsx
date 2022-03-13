const ShowCat = (
  villageKeyword,
  catLists,
  location,
  kakao,
  setLatitude,
  setLongitude,
  newMap
) => {
  console.log(catLists);
  // 지도 마커 표시하기
  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  for (let i = 0; i < catLists.length; i++) {
    const imageSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const iwContent = `
        <S.InfoWindow>
          <div style="width: 80px; height: 80px; border-radius:80px;">
            <img width="80" 
                 height="80"
                 border-radius="80"
                 src="${catLists[i].catImage}" 
                 alt="고양이 사진">
          </div>
          <div style="display: flex; 
                      width: 80px; 
                      height: 80px; 
                      justify-content: center; 
                      align-items: center;">
            <button 
              onclick="location.href='/catdetail/calendar/${villageKeyword}/${catLists[i].catId}/2'" 
              style="width: 70px;
                     height: 70px;
                     box-shadow: 3px 3px lightgray;
                     border: 0;
                     border-radius: 10px;
                     background-color: #fbd986;
                     cursor: pointer;">
                    ${catLists[i].catName}
                    <div>보러 가기</div>
            </button>
          </div>
        </div>`,
      iwRemoveable = true;
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      map: newMap, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(
        catLists[i].latitude,
        catLists[i].longitude
      ), // 마커를 표시할 위치
      title: catLists[i].catName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
    console.log(catLists[i].latlng);

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(newMap, marker);
    });

    // 지도에 마커를 표시합니다.
    kakao.maps.event.addListener(newMap, "click", function (mouseEvent) {
      infowindow.close();
    });
  }

  // 사용자의 주소 지도에 표시
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch(location, placesSearchCB);

  // 고양이 마커 가져오기
  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      let bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < data.length; i++) {
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      newMap.setBounds(bounds);
    }
  }
  // 지도에 마커를 표시합니다.
  kakao.maps.event.addListener(newMap, "click", function (mouseEvent) {
    const markers = new kakao.maps.Marker({
      map: newMap, // 마커를 표시할 지도
    });
    //클릭한 위도, 경도 정보를 가져옵니다.
    const latlng = mouseEvent.latLng;
    //위도 경도 값을 useState를 이용해서 useEffect 밖으로 빼냅니다.
    setLatitude(latlng.getLat());
    setLongitude(latlng.getLng());
    //마커 위치를 클릭한 위치로 옮깁니다.
    markers.setPosition(latlng);
    //마커를 지도상에 보여줍니다.
    markers.setMap(newMap);
    // 지도에 마커를 표시하면 인포윈도우 닫기
  });
};

export default ShowCat;
