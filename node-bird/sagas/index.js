import { all, fork, take } from "redux-saga/effects";

function* watchLogin() {
  yield take("LOG_IN");
}

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
