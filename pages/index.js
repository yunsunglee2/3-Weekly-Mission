import Link from "next/link";
import Header from "@/components/header/index";
import { useRouter } from "next/router";

const HomePageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
  padding: "10px",
  minHeight: "35vh",
};

export default function HomePage() {
  const router = useRouter();
  const { folderId } = router.query;

  return (
    <>
      <Header serachIsLoading={true} />
      <div className="HomePage" style={HomePageStyle}>
        <Link href={`/Shared/${folderId}`}>MV SHARED</Link>
        <br />
        <Link href={`/folder/${folderId}`}>MV FOLDER</Link>
      </div>
    </>
  );
}
