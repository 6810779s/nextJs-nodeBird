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
} from "../constants/user";
import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
//takeEvery : 두번 눌렀을때 , 두개가 올라가게됨
//takeLatest: 두번 연속 눌렀을때도 마지막 액션만 올라감.
//takeLeading: 맨처음 하나만 올라감.
//throttle: 설정한 시간동안 누른 동작이 여러개면, 하나만 액션동작

// function logInAPI(data) {
//   return axios.post('/api/login', data);
// }

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

// function logOutAPI() {
//   return axios.post('/api/logout');
// }

function* logOut() {
  try {
    yield delay(1000);
    // const result = yield call(logOutAPI);
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

// function signUpAPI() {
//   return axios.post('/api/signup');
// }

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// function followingAPI() {
//   return axios.post('/api/signup');
// }

function* following(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

// function unfollowingAPI() {
//   return axios.post('/api/signup');
// }

function* unfollowing(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  //   while (true) {
  //     yield take('LOG_IN_REQUEST', logIn);
  //   }

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
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollowing),
    fork(watchUnfollowing),
  ]);
}
