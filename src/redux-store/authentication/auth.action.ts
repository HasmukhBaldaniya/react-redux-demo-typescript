import { createAsyncThunk } from "@reduxjs/toolkit";
import { Instance } from "../../utils/axios";
import { loginUrl } from "../../utils/endpoints";
import { getHeaders } from "../../utils/constant";

export const authApi = createAsyncThunk<
  { data: { token: string } },
  { username: string; password: string }
>("auth", async (params) => {
  try {
    return await Instance.post(`${loginUrl()}`, params, {
      headers: getHeaders(),
    });
  } catch (error: unknown) {
    throw Error("auth api call error");
  }
});
