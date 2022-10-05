import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utils/axios';
import { baseUrl, getProductUrl } from '../../utils/endpoints';
import { Params, Product } from './types';

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: axiosBaseQuery({ baseUrl: baseUrl() }),
  tagTypes: [],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], Partial<Params> | void>({
      query: (qParams) => {
        return {
          url: getProductUrl(),
          method: `GET`,
          params: qParams,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
