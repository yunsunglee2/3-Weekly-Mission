import Header from "@/components/header/Header.js" ;
import Link from 'next/link';

const HomePageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
}

export default function HomePage() {
  return(
    <div className="HomePage" style={HomePageStyle}>
      {/* <Header serachIsLoading={true}/> */}
      <Link href="shared">MV SHARED</Link><br/>
      <Link href="folder">MV FOLDER</Link>
    </div>
  )
}