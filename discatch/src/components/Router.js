import React from "react";
import { Switch, Route } from "react-router-dom";
// import Auth from "../shared/auth";
/* == Pages */
import {
  Home,
  Slider,
  MyPage,
  UserInfoWrite,
  CatInfoWrite,
  CatDetailInfoWrite,
  CatDetail,
  CatDetailInfo,
  CommunityPostWrite,
  CommunityPostEdit,
  CommunityDetail,
  NotFound,
  CommunityPostDetail,
  Community,
  Login,
  Map,
  LoginRedirect,
} from "../pages";
// 배포 시 해당 라우트 삭제 예정
import test from "../pages/test";

// * == ( Router ) -------------------- * //
const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/slider" exact component={Slider} />
      <Route path="/mypage" exact component={MyPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/user/kakao/callback" exact component={LoginRedirect} />
      {/* <Route path="/login" component={Auth(Login, false)} exact /> */}
      {/* <Route
        path="/user/kakao/callback"
        component={Auth(LoginRedirect, false)}
        exact
      /> */}
      <Route path="/userinfowrite" exact component={UserInfoWrite} />
      <Route path="/userinfoedit" exact component={UserInfoWrite} />
      <Route path="/catinfowrite" exact component={CatInfoWrite} />
      <Route path="/catdetailinfowrite" exact component={CatDetailInfoWrite} />
      <Route path="/catdetail" exact component={CatDetail} />
      <Route path="/catdetailinfo" exact component={CatDetailInfo} />
      <Route path="/community/catinfo/write" exact component={CommunityPostWrite} />
      <Route path="/community/gathering/write" exact component={CommunityPostWrite} />
      <Route path="/community/sharing/write" exact component={CommunityPostWrite} />
      <Route path="/communitypostedit" exact component={CommunityPostEdit} />
      <Route
        path="/communitypostedit/:communityId"
        exact
        component={CommunityPostEdit}
      />
      <Route path="/community/catinfo" exact component={CommunityDetail} />
      <Route path="/community/gathering" exact component={CommunityDetail} />
      <Route path="/community/sharing" exact component={CommunityDetail} />
      <Route
        path="/communitypostdetail"
        exact
        component={CommunityPostDetail}
      />
      <Route
        path="/communitypostdetail/:communityId"
        exact
        component={CommunityPostDetail}
      />
      <Route path="/community" exact component={Community} />
      <Route path="/map" exact component={Map} />
      <Route path="/test" exact component={test} />
      <Route path={"*"} exact component={NotFound} />
    </Switch>
  );
};

export default Router;
