import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from 'react-toastify';


type ToastType = {
    message: string,
    type: 'success' | 'info' | 'warning' | 'error'
};

const initialState = {};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toastMessage: (state, payload: { payload: ToastType}) => {
        toast(payload.payload.message, {type: payload.payload.type});
    },
  },
});

export const { toastMessage } = toastSlice.actions;

export const getUserDetails = (state: RootState) => state.auth;

export default toastSlice;
