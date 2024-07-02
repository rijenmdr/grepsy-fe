import { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// Request interceptor: Modifies the request configuration before the request is sent
const onRequest = async (config: InternalAxiosRequestConfig) => {
  // Set the base URL for the API requests
  config.baseURL = import.meta.env.VITE_API_URL;

  return config;
};

// Request error handler: Handles errors during the request configuration phase
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

// Response interceptor: Processes the response data before it is handed over to the calling code
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// Response error handler: Handles errors that occur during the response phase
const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

// Function to set up Axios interceptors
export function setupInterceptorsToInspection(axiosInstance: AxiosInstance): AxiosInstance {
  // Add request interceptors
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  // Add response interceptors
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
}
