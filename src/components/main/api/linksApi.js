export async function getLinks(id) {
  const API_BASE_URL_LINKS = `https://bootcamp-api.codeit.kr/api/users/1/links${ id ? `?folderId=${id}` : " "}`
  const response = await fetch(API_BASE_URL_LINKS)
  const folders = await response.json();
  return folders;
}