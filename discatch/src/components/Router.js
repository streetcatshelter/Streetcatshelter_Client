// LIBRARY
import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import { history } from "redux/configureStore";

// COMPONENTS
import PrivateRoute from "components/route/PrivateRoute";
import PublicRoute from "components/route/PublicRoute";

// PAGES
import {
  Home,
  Slider,
  MyPageCat,
  MyPageWork,
  MyPageNoticeList,
  MyPageNotices,
  UserInfoWrite,
  CatInfoWrite,
  CatDetailInfoWrite,
  CatDetail,
  CatDetailInfo,
  CommunityPostWriteEdit,
  CommunityDetail,
  NotFound,
  CommunityPostDetail,
  Community,
  Login,
  Map,
  ChatMainPage,
  ChatRoomPage,
  LoginRedirectKakao,
  LoginRedirectNaver,
  LoginRedirectGoogle,
  RandomUserProfile,
} from "pages";

// * == ( Router ) -------------------- * //
const Router = () => {
  const Onboarding = localStorage.getItem("onboarding");
  useEffect(() => {
    if (!Onboarding || Onboarding === null) {
      history.push("/slider");
    } else {
      history.push("login");
    }
  });

  return (
    <Switch>
      {/* == Login */}
      <PublicRoute component={Login} path={"/login"} exact/>
      <PublicRoute component={LoginRedirectKakao} path={"/user/kakao/callback"} exact/>
      <PublicRoute component={LoginRedirectNaver} path={"/user/naver/callback"} exact/>
      <PublicRoute component={LoginRedirectGoogle} path={"/user/google/callback"} exact/>

      {/* == Home */}
      <PrivateRoute component={Home} path={"/"} exact/>

      {/* == Slider */}
      <PublicRoute component={Slider} path={"/slider"} exact/>

      {/* == MyPage */}
      <PrivateRoute component={MyPageCat} path={"/mypage"} exact/>
      <PrivateRoute component={RandomUserProfile} path={"/user/:userRandomId"} exact/>
      <PrivateRoute component={MyPageNoticeList} path={"/mypage/notice"} exact/>
      <PrivateRoute component={MyPageNotices} path={"/mypage/notice/:noticeId"} exact/>
      <PrivateRoute component={MyPageWork} path={"/mypage/work"} exact/>
      <PrivateRoute component={UserInfoWrite} path={"/userinfowrite"} exact/>
      <PrivateRoute component={UserInfoWrite} path={"/userinfoedit"} exact/>

      {/* == Cat */}
      <PrivateRoute component={CatInfoWrite} path={"/catinfowrite"} exact/>
      <PrivateRoute component={CatInfoWrite} path={"/catinfoedit/:catId"} exact/>
      <PrivateRoute component={CatInfoWrite} path={"/catinfowrite/:location"} exact/>
      <PrivateRoute component={CatDetailInfoWrite} path={"/catdetailinfowrite"} exact/>
      <PrivateRoute component={CatDetailInfoWrite} path={"/catdetailinfowrite/:catId"} exact/>
      <PrivateRoute component={CatDetailInfoWrite} path={"/catdetailinfoedit/:catDetailId"} exact/>
      <PrivateRoute component={CatDetail} path={"/catdetail/:menu/:village/:catId"} exact/>
      <PrivateRoute component={CatDetail} path={"/catdetail/:menu/:village/:catId/1"} exact/>
      <PrivateRoute component={CatDetail} path={"/catdetail/:menu/:village/:catId/2"} exact/>
      <PrivateRoute component={CatDetail} path={"/catdetail/:menu/:village/:catId/3"} exact/>
      <PrivateRoute component={CatDetailInfo} path={"/catdetailinfo"} exact/>
      <PrivateRoute component={CatDetailInfo} path={"/catdetailinfo/:village/:catDetailId"} exact/>

      {/* == Community */}
      <PrivateRoute component={CommunityPostWriteEdit} path={"/community/:village/:category/write"} exact/>
      <PrivateRoute component={CommunityPostWriteEdit} path={"/communitypostedit"} exact/>
      <PrivateRoute component={CommunityPostWriteEdit} path={"/community/:village/:category/postedit/:communityId"} exact/>
      <PrivateRoute component={CommunityDetail} path={"/community/:village/:category"} exact/>
      <PrivateRoute component={CommunityPostDetail} path={"/communitypostdetail"} exact/>
      <PrivateRoute component={CommunityPostDetail} path={"/community/:village/:category/postdetail/:communityId"} exact/>
      <PrivateRoute component={Community} path={"/community"} exact/>

      {/* Map */}
      <PrivateRoute component={Map} path={"/map/:village"} exact/>
      <PrivateRoute component={Map} path={"/map/:village/:id"} exact/>

      {/* Chat */}
      <PrivateRoute component={ChatMainPage} path={"/chat"} exact/>
      <PrivateRoute component={ChatRoomPage} path={"/api/chat/enter/:roomId"} exact/>
      <PublicRoute component={NotFound} path={"*"} exact/>
    </Switch>
  );
};

export default Router;