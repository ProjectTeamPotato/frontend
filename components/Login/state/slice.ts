import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "./type";

const initialState: UserType = {
  userDetails: null,
  token: null,
};

export const loginslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticationToken: (
      state = initialState,
      { payload }: PayloadAction<any>
    ) => {
      return { ...state, token: payload };
    },
    loginAction: (state = initialState, { payload }: PayloadAction<any>) => {
      return { ...state, userDetails: payload };
    },
  },
});
