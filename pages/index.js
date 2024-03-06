const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
import Link from "next/link";
import Header from "@/components/nav/index";
import Nav from "@/components/header";

const HomePageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
  padding: "10px",
  minHeight: "35vh",
};

export async function getServerSideProps(context) {
  // context에서 req를 추출합니다.
  const { req } = context;

  // req 객체에서 쿠키를 가져옵니다.
  const cookies = req.cookies;

  // 필요한 쿠키만 추출합니다.
  const accessToken = cookies.accessToken;

  // 액세스 토큰 확인 후 유저데이터 요청 보내기
  try {
    const userResponse = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const result = await userResponse.json();
    const userId = result[0].id;
    
    const getUserData = await fetch (`${API_BASE_URL}/users/${userId}`)
    const userData = await getUserData.json();

    const owner = userData[0].name;
    const profile = userData[0].image_source;
    const email = userData[0].email;
    console.log(email, '------email-----')

    return {
      props: {
        userId,
        owner,
        profile,
        email,
      },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        userId: null,
        profile: null,
        email: null,
        owner: null,
      },
    };
  }
}

export default function HomePage({ userId, profile, owner, email }) {

  return (
    <>
      <Nav profileImage={profile} name={owner} email={email} />
      <Header serachIsLoading={true} />
      <div className="HomePage" style={HomePageStyle}>
        <Link href={`/Shared/${userId}`}>MV SHARED</Link>
        <br />
        <Link href={`/folder/${userId}`}>MV FOLDER</Link>
      </div>
    </>
  );
}
