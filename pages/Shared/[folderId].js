import Header from "@/components/header/index.js";
import Main from "@/components/main/index.js";
import { notFound } from "next/navigation";
const API_BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

const SharedPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export async function getServerSideProps(context) {
  // const userId = context.query["userId"];
  const folderId = context.query["folderId"];
  let links = [];
  let folders = [];

  // 링크 불러오기
  try {
    const response = await fetch(
      // `${API_BASE_URL}/users/1/links?folderId=${folderId}`
      `${API_BASE_URL}/users/1/links${
        folderId ? `?folderId=${folderId}` : " "
      }`
    );
    const result = await response.json();
    if(result) {
      links = result;
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }

  // 폴더 불러오기
  try {
    const res = await fetch(`${API_BASE_URL}/users/1/folders`);
    const result = await res.json();
    if(result) {
      folders = result;
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      links,
      folders,
    },
  };
}

export default function SharedPage({ links, folders }) {
  return (
    <div className="Shared page" style={SharedPageStyle}>
      <Header serachIsLoading={true} />
      <Main links={links} folders={folders} />
    </div>
  );
}
