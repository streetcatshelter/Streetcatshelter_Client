// LIBRARY
import React from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import {
  MyPageDetail,
  Profile,
  Template,
  MyPageCat,
  Spinner,
} from "../../components";

const MyPage = (props) => {
  const location = props.location.state?.location;
  const isLoaded = useSelector((state) => state.mypage.isLoaded);

  return (
    <>
      <Spinner visible={isLoaded} />
      <Template props={props}>
        <div
          style={{
            overflowX: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ margin: "10px auto" }}>
            <Profile location={location}/>
          </div>
          <MyPageDetail menu="myCat" location={location}/>
          <MyPageCat location={location}/>
        </div>
      </Template>
    </>
  );
};

export default MyPage;
