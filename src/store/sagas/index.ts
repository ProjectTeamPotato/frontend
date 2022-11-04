import { all } from "redux-saga/effects";
import user from "../../Login/index/user";
import login from "../../../components/Login/state/saga";

const sagas = function* sagas() {
  yield all([user(), login()]);
};

export default sagas;
