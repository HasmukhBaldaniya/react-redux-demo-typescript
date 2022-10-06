import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authApi } from "./auth.action";
type InitialStateType = {
  userDetails: string;
  token: string | null;
};
const initialState: InitialStateType = {
  userDetails: "",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, payload) => {
      state.token = payload.payload.token
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authApi.pending, (state, payload) => ({
      ...state,
      loading: true,
      error: null,
    })),
    builder.addCase(authApi.fulfilled, (state, payload) => ({
      ...state,
      loading: false,
      error: null,
      token: payload.payload.data.token,
    })),
    builder.addCase(authApi.rejected, (state, payload) => ({
      ...state,
      loading: false,
      error: payload,
    }));
  },
});

export const { setToken } = authSlice.actions;

export const getUserDetails = (state: RootState) => state.auth;

export default authSlice;
