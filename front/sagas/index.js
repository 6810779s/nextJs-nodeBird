import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./post";
import userSaga from "./user";

//중복된 주소 줄이기
axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
// axios.defaults.baseURL = `${NEXT_PUBLIC_API_URL}`;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
