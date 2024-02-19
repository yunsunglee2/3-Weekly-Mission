import Header from "components/header/Header.js";
import Main from "components/main/Main.js";

const FolderPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
};

export default function FolderPage() {
  return (
    <div className="FolderPage" style={FolderPageStyle}>
      <Header serachIsLoading={true} />
      <Main />
    </div>
  );
}