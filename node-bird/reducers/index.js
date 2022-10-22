import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

//async action creator
//action creator

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  //combineReducers는 reducer를 합쳐줌
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: //서버 사이드 렌더링을 위해 사용
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
