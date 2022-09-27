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
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
} from "../constants/user";
import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
//takeEvery : 두번 눌렀을때 , 두개가 올라가게됨
//takeLatest: 두번 연속 눌렀을때도 마지막 액션만 올라감.
//takeLeading: 맨처음 하나만 올라감.
//throttle: 설정한 시간동안 누른 동작이 여러개면, 하나만 액션동작

function loadMyInfoAPI() {
  return axios.get("/user");
  //baseURL = "http://localhost:3065";
}
function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);

    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserInfoAPI(data) {
  return axios.get(`/user/${data}`);
  //baseURL = "http://localhost:3065";
}
function* loadUserInfo(action) {
  try {
    const result = yield call(loadUserInfoAPI, action.data);
    
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error("error", err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowersAPI(data) {
  return axios.get("/user/followers", data);
  //baseURL = "http://localhost:3065";
}
function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data);

    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_FOLLOWERS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowingsPI(data) {
  return axios.get("/user/followings", data);
  //baseURL = "http://localhost:3065";
}
function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsPI, action.data);
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_FOLLOWINGS_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post("/user/login", data);
  //baseURL = "http://localhost:3065";
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/user/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error("err:", err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

//proxy, cors를 피해가는 방법중 하나. 브라우저=>프론트=>백엔드=>프론트=>브라우저

function signUpAPI(data) {
  return axios.post("/user", data);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function followingAPI(data) {
  return axios.patch(`/user/${data}/follow`);
}
function* following(action) {
  try {
    const result = yield call(followingAPI, action.data);
    yield put({
      type: FOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowingAPI(data) {
  return axios.delete(`/user/${data}/follow`);
}

function* unfollowing(action) {
  try {
    const result = yield call(unfollowingAPI, action.data);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  return axios.patch("/user/nickname", { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn); // 위에 반복문 쓴것과 똑같이 작동
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchFollowing() {
  yield takeLatest(FOLLOW_REQUEST, following);
}

function* watchUnfollowing() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollowing);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchLoadUserInfo() {
  yield takeLatest(LOAD_USER_REQUEST, loadUserInfo);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}
function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollowing),
    fork(watchUnfollowing),
    fork(watchLoadMyInfo),
    fork(watchLoadUserInfo),
    fork(watchLoadFollowers),
    fork(watchLoadFollowings),
    fork(watchChangeNickname),
  ]);
}
