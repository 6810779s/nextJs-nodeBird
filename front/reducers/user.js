import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
} from "../constants/user";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../constants/post";
import produce from "immer";

export const initialState = {
  logInLoading: false, //로그인 시도중
  logInDone: false,
  logInFailure: null,
  logOutLoading: false, //로그아웃 시도중
  logOutdone: false,
  logOutFailure: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameFailure: null,
  followingLoading: false,
  followingDone: false,
  followingFailure: null,
  unfollowingLoading: false,
  unfollowingDone: false,
  unfollowingFailure: null,
  me: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: "eunhee",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { id: 1, nickname: "aa" },
    { id: 2, nickname: "bb" },
  ],
  Followers: [
    { id: 3, nickname: "a" },
    { id: 4, nickname: "c" },
    { id: 5, nickname: "b" },
  ],
});

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const signUpRequestAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data,
  };
};

const rootReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followingLoading = true;
        draft.followingFailure = null;
        draft.followingDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followingLoading = false;
        draft.followingDone = true;
        draft.me.Followings.push(action.data);
        break;
      case FOLLOW_FAILURE:
        draft.followingLoading = false;
        draft.followingDone = false;
        draft.followingFailure = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.unfollowingLoading = true;
        draft.unfollowingFailure = null;
        draft.unfollowingDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowingLoading = false;
        draft.unfollowingDone = true;
        draft.me.Followings = draft.me.Followings.filter(
          (v) => v.id !== action.data.id
        );
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowingLoading = false;
        draft.unfollowingDone = false;
        draft.logInFailure = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInFailure = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInFailure = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutFailure = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutFailure = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpFailure = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpFailure = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameFailure = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameFailure = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default rootReducer;
