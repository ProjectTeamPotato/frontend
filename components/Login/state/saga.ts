import { all, takeLatest } from "redux-saga/effects";
import { LOGIN, REGISTER } from "./actions";
import axios from "axios";
import * as Effects from "redux-saga/effects";
const call: any = Effects.call;

const login = async (payload: { email: string; password: string }) => {
  const { data } = await axios.post(
    "https://test/api/login",
    { email: payload.email, password: payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

const signup = async (payload: { email: string; password: string }) => {
  const { data } = await axios.post(
    "https://test/api/register",
    { ...payload },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

function* registerHandler({ payload: { data, callback } }: any) {
  try {
    const response: { token: string } = yield call(signup, { ...data });
    if (callback) {
      callback({ success: true, data: response.token });
    }
  } catch (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  }
}

function* loginSaga({ payload: { data, callback } }: any) {
  try {
    const response: { token: string } = yield call(login, { ...data });
    if (callback) {
      callback({ success: true, data: response.token });
    }
  } catch (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  }
}

function* authSaga() {
  yield all([takeLatest(LOGIN, loginSaga)]);
  yield all([takeLatest(REGISTER, registerHandler)]);
}

export default authSaga;
