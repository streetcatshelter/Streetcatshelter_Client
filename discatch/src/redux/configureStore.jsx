// LIBRARY
import { createStore, combineReducers, applyMiddleware } from "redux";

// MIDDLEWARE
import thunk from "redux-thunk";
import logger from "redux-logger";

// REDUX ROUTER
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

// REDUCER
import image from "./modules/image";
import map from "./modules/map";
import community from "./modules/community";
import user from "./modules/user";
import cat from "./modules/cat";
import mypage from "./modules/mypage";
import chat from "./modules/chat";
import comment from "./modules/comment";
import spinner from "./modules/spinner";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  map: map.reducer,
  community: community.reducer,
  user: user.reducer,
  image: image,
  router: connectRouter(history),
  cat: cat.reducer,
  mypage: mypage.reducer,
  chat: chat.reducer,
  comment: comment.reducer,
  spinner: spinner.reducer,
});

// history 넣기, 로거사용
const middleware = [thunk.withExtraArgument({ history }), logger];

// 미들웨어와 리듀서 묶어서 store생성
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
