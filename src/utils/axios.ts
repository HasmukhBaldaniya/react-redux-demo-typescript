import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig, AxiosError } from "axios"
import { baseUrl } from './endpoints';

type BaseUrlType = {
    baseUrl: string;
}

export const Instance = axios.create({
  baseURL: `${baseUrl()}`,
})

export const axiosBaseQuery = ({ baseUrl }: BaseUrlType = { baseUrl: '' }): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }