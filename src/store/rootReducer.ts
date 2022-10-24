import { combineReducers } from "@reduxjs/toolkit";
import { userslice } from "../Login/index/userslice";
import { loginslice } from "../../components/Login/state/slice";

const reducers = combineReducers({
  user: userslice.reducer,
  login: loginslice.reducer,
});

export default reducers;
