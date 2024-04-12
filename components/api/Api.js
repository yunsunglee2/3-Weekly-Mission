import { instance, getTokenAxios } from "@/components/api/axiosInstance";

export async function isSignupValid(info) {
  const response = await instance.post("/auth/sign-up", info);
  return response.data;
}

export async function checkUserInfo(info) {
  const response = await instance.post("/users/check-email", info);
  console.log(response);
  return response.data;
}

// export async function checkUserInfo(info) {
//   const response = await fetch(`/users/check-email`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(info),
//   });
//   console.log(response);
//   return response.data;
// }

export async function postUserInfo(info) {
  const response = await instance.post("/auth/sign-in", info);
  return response;
}

// userId를 가져오기 위해 accessToken으로 서버에 유저 정보 조회
export async function getUserResponse(accessToken) {
  const tokenInstance = getTokenAxios(accessToken);
  const userResponseResult = await tokenInstance.get("/users", {});
  return userResponseResult.data[0].id;
}

// 현재 유저 조회
export async function getUserData(accessToken, userId) {
  const tokenInstance = getTokenAxios(accessToken);
  const userData = await tokenInstance.get(`/users/${userId}`, {});
  const profile = userData.data[0].image_source;
  const owner = userData.data[0].name;
  const email = userData.data[0].email;
  return { profile, owner, email };
}

// 유저 폴더 목록 가져오기
export async function getUserFolders(userId) {
  try {
    const response = await instance.get(`/users/${userId}/folders`);
    return response.data;
  } catch (error) {
    console.log("Error fetching userFolders", error);
    throw error;
  }
}
// export async function getUserFolders(userId) {
//   try {
//     const response = await fetch(`/users/${userId}/folders`);
//     if(response.ok) {
//       console.log('Promise resolved and http status good')
//       return response.data;
//     } else {
//       console.error('Promise resolved but http status failed')
//     }

//   } catch (error) {
//     console.error("Promise rejected", error);
//     throw error;
//   }
// }
// export async function getUserFolders(userId) {
//   try {
//     const response = await fetch(`/users/${userId}/folders`);
//     if (response.ok) {
//       console.log("Promise resolved and http status good");
//       return response.data;
//     } else {
//       if (response.status === 404) throw new Error("404에러 발생!");
//       if (response.status === 500) throw new Error("500에러 발생!");
//       throw new Error(response.status);
//     }
//   } catch (error) {
//     console.error("Fetch error", error);
//   }
// }

// 유저 전체 링크 가져오기
export async function getUserLinks(userId) {
  try {
    const response = await instance.get(`/users/${userId}/links`);
    return response.data;
  } catch (error) {
    console.log("Error fetching userFolders", error);
    throw error;
  }
}

// 특정 폴더 링크 가져오기
export async function getFolderLinks(folderId) {
  try {
    const response = await instance.get(`/folders/${folderId}/links`);
    return response.data;
  } catch (error) {
    console.log("Error fetching userFolders", error);
    throw error;
  }
}

/**
 * modalApi
 */

export async function changeFolderName(folderId, content, accessToken) {
  const tokenInstance = getTokenAxios(accessToken);
  try {
    await tokenInstance.put(`/folders/${folderId}`, {
      name: content,
    });
  } catch (error) {
    throw error;
  }
}

export async function addFolder(accessToken, content) {
  const tokenInstance = getTokenAxios(accessToken);
  await tokenInstance.post("/folders", {
    name: content,
  });
}

export async function deleteFolder(accessToken, folderId) {
  const tokenInstance = getTokenAxios(accessToken);
  const response = await tokenInstance.delete(`/folders/${folderId}`);
  return response;
}

export async function deleteLink(accessToken, linkId) {
  const tokenInstance = getTokenAxios(accessToken);
  const response = await tokenInstance.delete(`/links/${linkId}`);
  return response;
}

export async function addLink(url, folderId, accessToken) {
  const tokenInstance = getTokenAxios(accessToken);
  const response = await tokenInstance.post(`/links`, {
    url: url,
    folderId: folderId,
  });
}
