import type { Link, MyFolders } from "types";

const API_BASE_URL: string = "https://bootcamp-api.codeit.kr";

export async function getUserData(): Promise<any> {
  const API_BASE_URL_USER= `${API_BASE_URL}/api/sample/user`;
  const response = await fetch(API_BASE_URL_USER);
  const result = response.json();
  return result;
}

export async function getMyFolders(): Promise<any> {
  const API_BASE_URL_FOLDER = `${API_BASE_URL}/api/users/1/folders`;
  const response = await fetch(API_BASE_URL_FOLDER)
  const folders = await response.json();
  return folders;
}

export async function getOwner(): Promise<any> {
  const API_BASE_URL_OWNER = `${API_BASE_URL}/api/sample/folder`;
  const response = await fetch(API_BASE_URL_OWNER)
  const folders = await response.json();
  return folders;
}

export async function getLinks(id: number | null): Promise<{ data: Link[] }> {
  const API_BASE_URL_LINKS = `${API_BASE_URL}/api/users/1/links${ id ? `?folderId=${id}` : " "}`
  const response = await fetch(API_BASE_URL_LINKS)
  const folders = await response.json();
  return folders;
}
