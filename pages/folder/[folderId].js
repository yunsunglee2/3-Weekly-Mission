const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Nav from "@/components/nav/index.js";
import { Main } from "@/components/main";
import Header from "@/components/header";
import styles from "@/styles/folderPage.module.css";

export async function getServerSideProps(context) {
  // 로그인해서 쿠키에 저장된 accessToken을 getServerSideProps의 context로 조회하기
  const { req } = context;
  const cookies = req.cookies;
  const accessToken = cookies.accessToken;
  const { folderId } = context.query;
  let links;

  // userId를 가져오기 위해 accessToken으로 서버에 유저 정보 조회
  try {
    const userResponse = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const res = await userResponse.json();
    const userId = res[0].id;
    // 가져온 userId로 유저의 데이터 조회
    const getUserData = await fetch(`${API_BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userData = await getUserData.json();
    // userData의 프사, 닉네임 가져오기
    const profile = userData[0].image_source;
    const owner = userData[0].name;
    const email = userData[0].email;

    // userId로 유저의 폴더와 링크들 받아오기
    const getUserFolders = await fetch(
      `${API_BASE_URL}/users/${userId}/folders`
    );
    const folders = await getUserFolders.json();

    if (folderId === "0") {
      const getUserLinks = await fetch(`${API_BASE_URL}/users/${userId}/links`);
      links = await getUserLinks.json();
    } else {
      const getFolderLinks = await fetch(
        `${API_BASE_URL}/folders/${folderId}/links`
      );
      links = await getFolderLinks.json();
    }

    return {
      props: {
        accessToken,
        profile,
        owner,
        email,
        links,
        folders,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        folders: [],
        links: [],
        accessToken: "",
        profile: "",
        owner: "",
        email: "",
      },
    };
  }
}
// 서버 사이드 렌더링으로 받아온 profile과 owner를 props로 폴더 페이지에 내려줌
export default function FolderPage({
  accessToken,
  profile,
  owner,
  email,
  links,
  folders,
}) {
  return (
    <>
      <Header profileImage={profile} name={owner} email={email} />
      <div className={styles.FolderPage}>
        <Nav profile={profile} owner={owner} serachIsLoading={false} />
        <Main
          accessToken={accessToken}
          links={links}
          folders={folders}
          page="folder"
        />
      </div>
    </>
  );
}
