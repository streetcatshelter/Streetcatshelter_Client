function locationCheck(location, userInfo, props, villageList, userLocation, page) {
  const homeCheck = (num) => {
    return villageList[num] && userLocation === villageList[num]?.split(" ")[2];
  }
  const catInfoWriteCheck = (num) => {
    return location === villageList[num]?.split(" ")[2];
  }
  const catDetailCheck = (num) => {
    return userInfo.locationList &&
      location === userInfo.locationList[num]?.split(" ")[2];
  }
  if (page === 'CatDetail' || page === 'CatDetailInfo') {
    if (location === undefined) {
      location = props.match.params.village;
    } 
    if (catDetailCheck(0)) {
      location = userInfo.locationList[0];
    } else if (catDetailCheck(1)) {
      location = userInfo.locationList[1];
    } else if (catDetailCheck(2)) {
      location = userInfo.locationList[2];
    }
  } else if (page === 'Home' || page === 'CatInfoWrite') {
    if (homeCheck(0) || catInfoWriteCheck(0)) {
      location = villageList[0];
    } else if (homeCheck(1) || catInfoWriteCheck(1)) {
      location = villageList[1];
    } else if (homeCheck(2) || catInfoWriteCheck(2)) {
      location = villageList[2];
    }
  } 
  return location;
}

export default locationCheck;
