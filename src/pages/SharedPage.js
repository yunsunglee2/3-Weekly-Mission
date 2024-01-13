import Header from "../components/header/Header" ;
import Main from "../components/main/Main";

const SharedPageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
}

export default function SharedPage() {
  return(
    <div className="Shared page" style={SharedPageStyle}>
      <Header serachIsLoading={false}/>
      <Main/>
      
    </div>
  )
}