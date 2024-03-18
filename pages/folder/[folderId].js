const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import defaultProfile from "@/public/Avatar.svg";
import Nav from "@/components/nav/index.js";
import Main from "@/components/main/index.js";
import Header from "@/components/header";

const FolderPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export async function getServerSideProps(context) {
  // 로그인해서 쿠키에 저장된 accessToken을 getServerSideProps의 context로 조회하기
  const { req } = context;
  const cookies = req.cookies;
  const accessToken = cookies.accessToken;
  const { folderId } = context.query;

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
    const userFolders = await getUserFolders.json();

    const getUserLinks = await fetch(`${API_BASE_URL}/users/${userId}/links/${folderId ? `?folderId=${folderId}` : ''}`);
    console.log(getUserLinks,'---------getUserLinks---------');
    const userLinks = await getUserLinks.json();

    return {
      props: {
        profile,
        owner,
        email,
        folders: userFolders,
        links: userLinks,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        profile: defaultProfile,
        owner: "사용자 없음",
      },
    };
  }
}
// 서버 사이드 렌더링으로 받아온 profile과 owner를 props로 폴더 페이지에 내려줌
export default function FolderPage({ email, profile, owner, folders, links }) {
  return (
    <>
      <Header profileImage={profile} name={owner} email={email} />
      <div className="FolderPage" style={FolderPageStyle}>
        <Nav profile={profile} owner={owner} serachIsLoading={false} />
        <Main links={links} folders={folders} page="folder" />
      </div>
    </>
  );
}
