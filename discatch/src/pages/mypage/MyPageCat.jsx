// LIBRARY
import React, { useEffect } from "react";

// COMPONENTS
import {
  MyPageDetail,
  Profile,
  Template,
  MyPageCat,
  SecondSpinner,
} from "../../components";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "../../redux/modules/mypage";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const location = props.location.state?.location;
  const isLoaded = useSelector((state) => state.mypage.itemLoaded);
  useEffect(() => {
    dispatch(mypageActions._getLikedAllCat());
  }, [dispatch]);

  return (
    <>
      <Template props={props}>
        <div
          style={{
            overflowX: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ margin: "10px auto" }}>
            <Profile location={location} />
          </div>

          <MyPageDetail menu="myCat" location={location} />
          <SecondSpinner visible={isLoaded}>
            <MyPageCat location={location} />
          </SecondSpinner>
        </div>
      </Template>
    </>
  );
};

export default MyPage;
