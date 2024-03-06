const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import defaultProfile from "@/public/Avatar.svg";
import Header from "@/components/header/index.js";
import Main from "@/components/main/index.js";
import { getUserData } from "@/components/api/Api.js";

const FolderPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.cookies;
  const accessToken = cookies.accessToken;
  console.log(accessToken, '-----------------');

  try {
    const userResponse = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const res = await userResponse.json();
    const userId = res[0].id;
    console.log(userId, '-----------------');

    const { result } = await getUserData(accessToken, userId);
    console.log(result, '--------123---------');
    
    const profile = result[0].image_source;

    console.log(profile, '--------123---------');

    const owner = result[0].name;
    console.log(owner, '---------123--------');
    return {
      props: {
        profile,
        owner,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        profile: defaultProfile,
        owner: '사용자 없음',
      },
    };
  }
}

export default function FolderPage({ profile, owner }) {
  return (
    <div className="FolderPage" style={FolderPageStyle}>
      <Header profile={profile} owner={owner} serachIsLoading={false} />
      <Main />
    </div>
  );
}
