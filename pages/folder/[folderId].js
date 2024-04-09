import Nav from "@/components/nav/index.js";
import { Main } from "@/components/main";
import Header from "@/components/header";
import {
  getUserResponse,
  getUserData,
  getUserFolders,
  getUserLinks,
} from "@/components/api/Api";
import styles from "@/styles/folderPage.module.css";

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.cookies;
  const accessToken = cookies.accessToken;
  try {
    const { userId } = await getUserResponse(accessToken);
    const { profile, owner, email } = await getUserData(accessToken, userId);
    const { folders } = await getUserFolders(userId);
    const { links } = await getUserLinks(userId);

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
      <div className={styles.folderPage}>
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
