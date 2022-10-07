import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../store/types/user";

const initialState: UserType = {
  userDetails: null,
  token: null,
};

export const userslice = createSlice({
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
