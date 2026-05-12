import type { AxiosRequestConfig } from 'axios';

import type { ApiPaginatedResponse, ApiResponse } from './api.types';
import { axiosInstance } from './axios-instance';

export const apiClient = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.get<ApiResponse<T>>(url, config);
    return response.data;
  },

  async getPaginated<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiPaginatedResponse<T>> {
    const response = await axiosInstance.get<ApiPaginatedResponse<T>>(url, config);
    return response.data;
  },

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.post<ApiResponse<T>>(url, data, config);
    return response.data;
  },

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await axiosInstance.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  },

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.put<ApiResponse<T>>(url, data, config);
    return response.data;
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await axiosInstance.delete<ApiResponse<T>>(url, config);
    return response.data;
  },
};
