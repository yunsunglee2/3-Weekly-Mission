const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Nav from "@/components/nav/index.js";
import Main from "@/components/main/index.js";
import Header from "@/components/header";

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

  // req 객체에서 쿠키를 가져옵니다.
  const cookies = req.cookies;


  // 필요한 쿠키만 추출합니다.
  const accessToken = cookies.accessToken;

  // 2. 액세스 토큰 확인 후 유저데이터 요청 보내기
  try {
    const userResponse = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = await userResponse.json();
    const userId = userData[0].id;

    const getUserData = await fetch(`${API_BASE_URL}/users/${userId}`)
    const result = await getUserData.json();
    const profile = result[0].image_source;
    const owner = result[0].name;
    const email = result[0].email;

    const folderResponse = await (
      await fetch(`${API_BASE_URL}/users/${userId}/folders`)
    ).json();

    const linkResponse = await fetch(
      `${API_BASE_URL}/users/${userId}/links${folderId ? `?folderId=${folderId}` : ''}``${API_BASE_URL}/users/${userId}/links${folderId ? `?folderId=${folderId}` : ''}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const linkData = await linkResponse.json();

    return {
      props: {
        folders: folderResponse,
        links: linkData,
        accessToken: accessToken,
        profile,
        owner,
        email
      },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        email: null,
        image_source: null,
        folders: [],
        errorMessage: "서버에서 데이터를 가져오는 중에 문제가 발생했습니다.",
      },
    };
  }
}

export default function SharedPage({ profile, owner, email, links, folders }) {
  return (
    <>
      <Header profileImage={profile} name={owner} email={email} />
      <div className="Shared page" style={SharedPageStyle}>
        <Nav serachIsLoading={true} />
        <Main links={links} folders={folders} page="Shared" />
      </div>
    </>
  );
}
