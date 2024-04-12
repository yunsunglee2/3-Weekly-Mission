import axios from "axios";

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
  return authInstance;
};

export { instance, getTokenAxios };
