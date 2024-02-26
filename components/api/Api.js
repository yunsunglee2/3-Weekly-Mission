const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export async function isSignupValid(info) {
  const res = await fetch(`${API_BASE_URL}/api/sign-up`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  })
  const result = await res.json();
  console.log(result)
  return result;
}

export async function checkUserInfo(info) {
  const res = await fetch(`${API_BASE_URL}/api/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const result = await res.json();
  console.log(result);
  return result;
}

export async function postUserInfo(info) {
  const res = await fetch(`${API_BASE_URL}/api/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const result = await res.json();
  return { res, result };
}

export async function getUserData() {
  const API_BASE_URL_USER = `${API_BASE_URL}/api/sample/user`;
  const response = await fetch(API_BASE_URL_USER);
  const result = await response.json();
  return result;
}

export async function getMyFolders() {
  const API_BASE_URL_FOLDER = `${API_BASE_URL}/api/users/1/folders`;
  const response = await fetch(API_BASE_URL_FOLDER);
  const alreadyFolders = await response.json();
  return alreadyFolders;
}

export async function getOwner() {
  const API_BASE_URL_OWNER = `${API_BASE_URL}/api/sample/folder`;
  const response = await fetch(API_BASE_URL_OWNER);
  const folders = await response.json();
  return folders;
}

export async function getLinks(id) {
  const API_BASE_URL_LINKS = `${API_BASE_URL}/api/users/1/links${
    id ? `?folderId=${id}` : " "
  }`;
  const response = await fetch(API_BASE_URL_LINKS);
  const folders = await response.json();
  return folders;
}
