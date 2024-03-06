const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Header from "@/components/header/index.js";
import Main from "@/components/main/index.js";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

const SharedPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export async function getServerSideProps(context) {
    // context에서 req를 추출합니다.
    const { req } = context;

    // req 객체에서 쿠키를 가져옵니다.
    const cookies = req.cookies;

  const { folderId } = context.query;

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

    const folderResponse = await (await fetch(`${API_BASE_URL}/users/${userId}/folders`)).json();

    const linkResponse = await fetch(
      `${API_BASE_URL}/users/${userId}/links${
        folderId ? `?folderId=${folderId}` : " "
      }`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const linkData = await linkResponse.json();

    return {
      props: {
        folders: folderResponse || null,
        // ownerName: userResponse.data.data[0].name,
        // email: userResponse.data.data[0]?.email || null,
        // image_source: userResponse.data.data[0]?.image_source || null,
        links: linkData,
        accessToken: accessToken 
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

export default function SharedPage({ links, folders, accessToken }) {
  console.log(accessToken)
  return (
    <div className="Shared page" style={SharedPageStyle}>
      <Header serachIsLoading={true} />
      <Main links={links} folders={folders} />
    </div>
  );
}
