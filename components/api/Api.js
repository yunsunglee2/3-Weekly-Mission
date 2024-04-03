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

// 현재 유저 조회
export async function getUserData(accessToken, userId) {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const result = await response.json();

  return result;
}

export async function getMyFolders({userId}) {
  const API_BASE_URL_FOLDER = `${API_BASE_URL}/users/${userId}/folders`;
  const response = await fetch(API_BASE_URL_FOLDER);
  const alreadyFolders = await response.json();
  return alreadyFolders;
}

export async function getLinks(folderId) {
  const API_BASE_URL_LINKS = `${API_BASE_URL}/users/1/links${
    folderId ? `?folderId=${folderId}` : " "
  }`;
  const response = await fetch(API_BASE_URL_LINKS);
  const folders = await response.json();
  return folders;
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
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url: url,
      folderId: folderId,
    }),
  });
}
