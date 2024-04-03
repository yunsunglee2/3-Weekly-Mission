import Nav from "@/components/nav";
import { Main } from "@/components/main";
import Header from "@/components/header";

const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

const SharedPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export async function getServerSideProps(context) {
  // context에서 req를 추출합니다.
  const { req } = context;
  const { folderId } = context.query;
  const cookies = req.cookies;
  const accessToken = cookies.accessToken;
  let links;

  // 2. 액세스 토큰 확인 후 유저데이터 요청 보내기
  try {
    const userResponse = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userData = await userResponse.json();
    const userId = userData[0].id;

    const getUserData = await fetch(`${API_BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const result = await getUserData.json();
    const profile = result[0].image_source;
    const owner = result[0].name;
    const email = result[0].email;

    const getUserFolders = await fetch(
      `${API_BASE_URL}/users/${userId}/folders`
    );
    const folders = await getUserFolders.json();
    // 전체는 folderId를 null로 설정
    // 특정 폴더는 folderId: number 이므로 truthy 값이 들어온다
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

export default function SharedPage({
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
      <div className="Shared page" style={SharedPageStyle}>
        <Nav folders={folders} serachIsLoading={true} />
        <Main
          accessToken={accessToken}
          links={links}
          folders={folders}
          page="shared"
        />
      </div>
    </>
  );
}
