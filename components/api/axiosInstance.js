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
        response: { status },
      } = error;
      if (status !== 401) {
        return Promise.reject(error);
      }
      const newAccessToken = await getToken("refreshToken");
      const response = await instance.get("/auth/refresh-token", {
        "refresh-token": newAccessToken
      });
      return response.data;
    }
  );
  return authInstance;
};
// 발급 받은 토큰이 만료 -> 만료된 토큰으로 요청 -> 401에러 발생 -> 

export { instance, getTokenAxios };
