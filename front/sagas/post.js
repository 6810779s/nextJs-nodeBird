import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
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
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  RETWEET_FAILURE,
  LOAD_USER_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_HASHTAG_POSTS_FAILURE,
} from "../constants/post";
import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

function addPostAPI(data) {
  return axios.post("/post", data);
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

function loadPostsAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios.get(`/user/${data}/posts/?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data, action.lastId);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_USER_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios.get(
    `/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`
  );
} //만약 data에 한글이 들어가서 에러나면, ${encodeURIComponent(data)}로 써줌
//decodeURIComponent를 사용하면 다시 한글로 돌아옴

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(data) {
  return axios.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
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

function uploadImagesAPI(data) {
  return axios.post("/post/images", data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function retweetAPI(data) {
  return axios.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    const result = yield call(retweetAPI, action.data);
    
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      //put은 액션 dispatch와 비슷한것
      type: RETWEET_FAILURE,
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

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchLikeButton() {
  yield takeLatest(LIKE_BUTTON_REQUEST, likeButton);
}

function* watchUnlikeButton() {
  yield takeLatest(UNLIKE_BUTTON_REQUEST, unlikeButton);
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
}

// function* watchRetweetCount() {
//   yield takeLatest(RetweetCount_REQUEST,)
// }

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComments),
    fork(warchRemovePost),
    fork(watchLoadPosts),
    fork(watchLoadUserPosts),
    fork(watchLoadHashtagPosts),
    fork(watchLoadPost),
    fork(watchLikeButton),
    fork(watchUnlikeButton),
    fork(watchUploadImages),
    fork(watchRetweet),
  ]);
}
