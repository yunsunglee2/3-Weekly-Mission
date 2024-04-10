const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import axios from "axios";

export async function isSignupValid(info) {
  const response = await axios.post(`${API_BASE_URL}/auth/sign-up`, info);
  console.log(response.data);
  return response.data;
}

export async function checkUserInfo(info) {
  const response = await axios.post(`${API_BASE_URL}/users/check-email`, info);
  return response.data;
}

export async function postUserInfo(info) {
  const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, info);
  console.log(response);
  return response
}

// userId를 가져오기 위해 accessToken으로 서버에 유저 정보 조회
export async function getUserResponse(accessToken) {
  const userResponseResult = await axios.get(`${API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return userResponseResult.data[0].id;
}

// 현재 유저 조회
export async function getUserData(accessToken, userId) {
  const userData = await axios.get(`${API_BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const profile = userData.data[0].image_source;
  const owner = userData.data[0].name;
  const email = userData.data[0].email;
  return { profile, owner, email };
}

// 유저 폴더 목록 가져오기
export async function getUserFolders(userId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/folders`);
    return response.data;
  } catch (error) {
    console.log("Error fetching userFolders", error);
    throw error;
  }
}

// 유저 전체 링크 가져오기
export async function getUserLinks(userId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/links`);
    return response.data;
  } catch (error) {
    console.log("Error fetching userFolders", error);
    throw error;
  }
}

// 특정 폴더 링크 가져오기
export async function getFolderLinks(folderId) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/folders/${folderId}/links`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching userFolders", error);
    throw error;
  }
}

/**
 * modalApi
 */

export async function changeFolderName(folderId, content, token) {
  try {
    const response = await fetch(`${API_BASE_URL}/folders/${folderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: content,
      }),
    });
    if (!response.ok) {
      console.log("changeFolderName failed!");
    } else {
      console.log("changeFolderName success!");
      console.log(response);
    }
  } catch (error) {
    throw error;
  }
}

export async function addFolder(token, content) {
  const response = await fetch(`${API_BASE_URL}/folders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: content,
    }),
  });
}

export async function deleteFolder(token, folderId) {
  const response = await fetch(`${API_BASE_URL}/folders/${folderId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export async function deleteLink(token, linkId) {
  const response = await fetch(`${API_BASE_URL}/links/${linkId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export async function addLink(url, folderId, token) {
  const response = await fetch(`${API_BASE_URL}/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      url: url,
      folderId: folderId,
    }),
  });
}
