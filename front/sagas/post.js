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
} from "../constants/post";
import { all, fork, put, takeLatest, delay, call } from "redux-saga/effects";
import axios from "axios";
import shortId from "shortid";
import { generateDummyPost } from "../reducers/post";
function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    const id = shortId.generate();
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: { id, content: action.data },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* removePost(action) {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
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

// function addPostAPI(data) {
//   return axios.post(`/api/post/${data.postId}/comments`, data);
// }

function* addComments(action) {
  try {
    yield delay(1000);
    // const result = yield call(addCommentsAPI, action.data);
    yield put({
      type: ADD_COMMENTS_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: ADD_COMMENTS_FAILURE,
      error: err.response.data,
    });
  }
}

// function addPostAPI(data) {
//   return axios.post(`/api/post/${data.postId}/comments`, data);
// }

function* loadPost(action) {
  try {
    yield delay(1000);
    // const result = yield call(addCommentsAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_POST_FAILURE,
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

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComments),
    fork(warchRemovePost),
    fork(warchLoadPost),
  ]);
}
