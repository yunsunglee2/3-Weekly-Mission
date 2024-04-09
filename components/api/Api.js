const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

export async function isSignupValid(info) {
  const res = await fetch(`${API_BASE_URL}/api/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const result = await res.json();
  return result;
}

export async function checkUserInfo(info) {
  const res = await fetch(`${API_BASE_URL}/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const result = await res.json();
  return result;
}

export async function postUserInfo(info) {
  const res = await fetch(`${API_BASE_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const result = await res.json();
  return { res, result };
}

// userId를 가져오기 위해 accessToken으로 서버에 유저 정보 조회
export async function getUserResponse(accessToken) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const userResponseResult = await response.json();
  return userResponseResult[0].id;
}

// 현재 유저 조회
export async function getUserData(accessToken, userId) {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const userData = await response.json();
  const profile = userData[0].image_source;
  const owner = userData[0].name;
  const email = userData[0].email;
  return { profile, owner, email };
}

// 유저 폴더 목록 가져오기
export async function getUserFolders(userId) {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/folders`);
  return await response.json();
}

// 유저 전체 링크 가져오기
export async function getUserLinks(userId) {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/links`);
  return await response.json();
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
