// library
import { createStore, combineReducers, applyMiddleware } from "redux";

// middleware
import thunk from "redux-thunk";
import logger from "redux-logger";

// redux router
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

// reducer
import image from "./modules/image";
import map from "./modules/map";
import community from './modules/community';
import comment from './modules/comment';
import user from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  image: image.reducer,
  map: map.reducer,
  community: community.reducer,
  commnet: comment.reducer,
  user: user.reducer,
  router: connectRouter(history),
});

// history 넣기, 로거사용
const middleware = [thunk.withExtraArgument({ history }), logger];

// 미들웨어와 리듀서 묶어서 store생성
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
