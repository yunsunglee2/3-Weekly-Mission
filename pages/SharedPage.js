import Header from "@/components/header/index.js" ;
import Main from "@/components/main/index.js";

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