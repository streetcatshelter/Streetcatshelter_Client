import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../shared/auth";

/* == Pages */
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
  CommunityPostWrite,
  CommunityPostEdit,
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
} from "../pages";

// 배포 시 해당 라우트 삭제 예정
import test from "../pages/test";

// * == ( Router ) -------------------- * //
const Router = () => {
  return (
    <Switch>
      {/* == Login */}
      <Route path="/login" component={Auth(Login, false)} exact />
      <Route
        path="/user/kakao/callback"
        component={Auth(LoginRedirectKakao, false)}
        exact
      />
      <Route
        path="/user/naver/callback"
        component={Auth(LoginRedirectNaver, false)}
        exact
      />
      <Route
        path="/user/google/callback"
        component={Auth(LoginRedirectGoogle, false)}
        exact
      />

      {/* == Home */}
      <Route path="/" component={Auth(Home, true)} exact />

      {/* == Slider */}
      <Route path="/slider" exact component={Slider} />

      {/* == MyPage */}
      <Route path="/mypage" component={Auth(MyPageCat, true)} exact />
      <Route
        path="/mypage/notice"
        component={Auth(MyPageNoticeList, true)}
        exact
      />
      <Route
        path="/mypage/notice/:noticeId"
        component={Auth(MyPageNotices, true)}
        exact
      />
      <Route path="/mypage/work" component={Auth(MyPageWork, true)} exact />
      <Route path="/userinfowrite" exact component={UserInfoWrite} />
      <Route path="/userinfoedit" exact component={UserInfoWrite} />
      <Route
        path="/userinfowrite"
        component={Auth(UserInfoWrite, true)}
        exact
      />
      <Route path="/userinfoedit" component={Auth(UserInfoWrite, true)} exact />

      {/* == Cat */}
      <Route path="/catinfowrite" component={Auth(CatInfoWrite, true)} exact />
      <Route
        path="/catinfowrite/:location"
        component={Auth(CatInfoWrite, true)}
        exact
      />
      <Route
        path="/catdetailinfowrite"
        component={Auth(CatDetailInfoWrite, true)}
        exact
      />
      <Route
        path="/catdetailinfowrite/:catId"
        component={Auth(CatDetailInfoWrite, true)}
        exact
      />
      <Route path="/catdetail" component={Auth(CatDetail, true)} exact />
      <Route path="/catdetail/:catId" component={Auth(CatDetail, true)} exact />
      <Route
        path="/catdetailinfo"
        component={Auth(CatDetailInfo, true)}
        exact
      />
      <Route
        path="/catdetailinfo/:catDetailId"
        exact
        component={Auth(CatDetailInfo, true)}
      />

      {/* == Community */}
      <Route
        path="/community/:village/:category/write"
        component={Auth(CommunityPostWrite, true)}
        exact
      />
      <Route
        path="/communitypostedit"
        component={Auth(CommunityPostEdit, true)}
        exact
      />
      <Route
        path="/community/:village/:category/postedit/:communityId"
        component={Auth(CommunityPostEdit, true)}
        exact
      />
      <Route
        path="/community/:village/:category"
        component={Auth(CommunityDetail, true)}
        exact
      />
      <Route
        path="/communitypostdetail"
        component={Auth(CommunityPostDetail, true)}
        exact
      />
      <Route
        path="/community/:village/:category/postdetail/:communityId"
        component={Auth(CommunityPostDetail, true)}
        exact
      />
      <Route path="/community" component={Auth(Community, true)} exact />

      {/* Map */}
      <Route path="/map" component={Auth(Map, true)} exact />
      <Route path="/map/:village" component={Auth(Map, true)} exact />

      {/* Chat */}
      <Route path="/chat" component={Auth(ChatMainPage, true)} exact />
      <Route
        path="/api/chat/enter/:roomId"
        component={Auth(ChatRoomPage, true)}
        exact
      />

      <Route path="/test" component={Auth(test, true)} exact />
      <Route path={"*"} exact component={NotFound} />
    </Switch>
  );
};

export default Router;
