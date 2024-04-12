import axios from "axios";
import getToken from "../util/getToken";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
  timeout: 1000,
});

const getTokenAxios = (accessToken) => {
  const authInstance = axios.create({
    baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
    timeout: 2000,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status !== 401) {
        return Promise.reject(error);
      }
      const newAccessToken = await getToken("refreshToken");

      config.headers.Authorization = `Bearer ${newAccessToken}`;
      const response = await instance.get("/auth/refresh-token");
      return response.data;
    }
  );
  return authInstance;
};

export { instance, getTokenAxios };
