import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utils/axios';
import { baseUrl, getProductUrl } from '../../utils/endpoints';

export const userApi = createApi({
  reducerPath: 'testUser',
  baseQuery: axiosBaseQuery({ baseUrl: baseUrl() }),
  tagTypes: [],
  endpoints: (builder) => ({
    getUserDetails: builder.query<any, any>({
      query: (qParams) => {
        return {
          url: getProductUrl(),
          method: `GET`,
          params: qParams,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ',
          },
        };
      },
    }),
    addUserDetails: builder.mutation({
      query: (params) => {
        return {
          url: 'product',
          method: 'POST',
          data: params,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ',
          },
        };
      },
    }),

    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: 'auth/login',
          method: 'POST',
          data: body,
        };
      },
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useLazyGetUserDetailsQuery,
  useAddUserDetailsMutation,
  useLoginUserMutation,
} = userApi;