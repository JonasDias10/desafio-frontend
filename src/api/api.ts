import axios from "axios";

const LOCAL_STORAGE_KEY = "cached_response";

export const api = axios.create({
  baseURL: "https://homologacao3.azapfy.com.br/api/ps",
});

// Add a response interceptor to cache the response data in local storage //
api.interceptors.response.use(
  (response) => {
    const responseDataString = JSON.stringify(response.data);
    localStorage.setItem(LOCAL_STORAGE_KEY, responseDataString);

    return response;
  },
  (error) => {
    const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (cachedData) {
      const mockResponse = {
        data: JSON.parse(cachedData),
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      };

      return Promise.resolve(mockResponse);
    }

    return Promise.reject(error);
  }
);
