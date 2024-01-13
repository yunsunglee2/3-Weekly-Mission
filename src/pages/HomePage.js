import Header from "../components/header/Header" ;
import { Link } from "react-router-dom";

const HomePageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
}

export default function HomePage() {
  return(
    <div className="HomePage" style={HomePageStyle}>
      <Header serachIsLoading={true}/>
      <Link to="shared">MV SHARED</Link><br/>
      <Link to="folder">MV FOLDER</Link>
    </div>
  )
}