import '@/styles/globals.css'
import Header from "@/components/header/Header.js" ;
import Footer from "@/components/footer/Footer.js" ;

export default function App({ Component, pageProps }) {
  return(
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}
