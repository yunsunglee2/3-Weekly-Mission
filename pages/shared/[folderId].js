import Nav from "@/components/nav";
import { Main } from "@/components/main";
import Header from "@/components/header";
import {
  getUserResponse,
  getUserData,
  getUserFolders,
  getUserLinks,
  getFolderLinks,
} from "@/components/api/Api";

const SharedPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export async function getServerSideProps(context) {
  const { req } = context;
  const { folderId } = context.query;
  const cookies = req.cookies;
  const accessToken = cookies.accessToken;
  let links;

  try {
    const userId = await getUserResponse(accessToken);
    const { profile, owner, email } = await getUserData(accessToken, userId);
    const folders = await getUserFolders(userId);
    
    if (folderId === "0") {
      links = await getUserLinks(userId);
    } else {
      links = await getFolderLinks(folderId);
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
