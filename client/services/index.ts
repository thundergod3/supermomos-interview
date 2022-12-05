import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const baseAxios = () => {
  return {
    get: (url: string, options = {}) => httpClient.get(url, { ...options }),
    post: (url: string, data: any, options = {}) =>
      httpClient.post(url, data, { ...options }),
    put: (url: string, data: any, options = {}) =>
      httpClient.put(url, data, { ...options }),
    delete: (url: string, options = {}) =>
      httpClient.delete(url, { ...options }),
  };
};

const HTTPMethod = baseAxios();

export default HTTPMethod;
