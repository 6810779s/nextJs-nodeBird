import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENTS_REQUEST,
  ADD_COMMENTS_SUCCESS,
  ADD_COMMENTS_FAILURE,
  ADD_POST_TO_ME,
  REMOVE_POST_OF_ME,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  LIKE_BUTTON_REQUEST,
  LIKE_BUTTON_SUCCESS,
  LIKE_BUTTON_FAILURE,
  UNLIKE_BUTTON_REQUEST,
  UNLIKE_BUTTON_SUCCESS,
  UNLIKE_BUTTON_FAILURE,
} from "../constants/post";
import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
function addPostAPI(data) {
  return axios.post("/post", { content: data });
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error("err:", err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentsAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComments(action) {
  try {
    const result = yield call(addCommentsAPI, action.data);
    yield put({
      type: ADD_COMMENTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: ADD_COMMENTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(data) {
  return axios.get(`/posts`, data);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function likeButtonAPI(data) {
  return axios.patch(`/post/${data}/like`);
}

function* likeButton(action) {
  try {
    const result = yield call(likeButtonAPI, action.data);
    console.log(result);
    //result에 postid와 userid가 들어가 있음
    yield put({
      type: LIKE_BUTTON_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error("likeerror", err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LIKE_BUTTON_FAILURE,
      error: err.response.data,
    });
  }
}

function unlikeButtonAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

function* unlikeButton(action) {
  try {
    const result = yield call(unlikeButtonAPI, action.data);
    yield put({
      type: UNLIKE_BUTTON_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: UNLIKE_BUTTON_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* warchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComments() {
  yield takeLatest(ADD_COMMENTS_REQUEST, addComments);
}

function* warchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchLikeButton() {
  yield takeLatest(LIKE_BUTTON_REQUEST, likeButton);
}

function* watchUnlikeButton() {
  yield takeLatest(UNLIKE_BUTTON_REQUEST, unlikeButton);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComments),
    fork(warchRemovePost),
    fork(warchLoadPost),
    fork(watchLikeButton),
    fork(watchUnlikeButton),
  ]);
}
