import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// const rootReducer = combineReducers({
//   user,
//   post,
// });
/* 원래는 이렇게 들어가지만 아래와 같이 한 이유는 ,
서버사이드 렌더링을 위해 hydrate 액션이 필요해서! */

// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case "HYDRATE":
//         console.log("HYDRATE", action);
//         return {
//           ...state,
//           ...action.payload,
//         };

//       default:
//         return state;
//     }
//   },
//   user,
//   post,
// });

const rootReducer = (state, action) => {
  //맨위 주석단 것과 똑같은데 확장하기 위해 더 복잡하게 만들음
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
