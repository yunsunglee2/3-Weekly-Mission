import Link from "next/link";
import Header from "@/components/header/index.js" ;

const HomePageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export default function HomePage() {
  return (
    <>
      <Header serachIsLoading={true} />
      <div className="HomePage" style={HomePageStyle}>
        <Link href="SharedPage">MV SHARED</Link>
        <br />
        <Link href="FolderPage">MV FOLDER</Link>
      </div>
    </>
  );
}
