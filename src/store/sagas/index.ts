import { all } from "redux-saga/effects";
import user from "../../Login/index/user";

const sagas = function* sagas() {
  yield all([user()]);
};

export default sagas;
