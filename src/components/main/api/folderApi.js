const API_BASE_URL_FOLDER = 'https://bootcamp-api.codeit.kr/api/users/1/folders';

export async function getMyFolders() {
  const response = await fetch(API_BASE_URL_FOLDER)
  const alreadyFolders = await response.json();
  return alreadyFolders;
}