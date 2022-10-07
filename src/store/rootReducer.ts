import { combineReducers } from "@reduxjs/toolkit";
import { userslice } from "../Login/index/userslice";

const reducers = combineReducers({
  user: userslice.reducer,
});

export default reducers;
