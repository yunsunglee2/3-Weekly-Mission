import Head from 'next/head'
import '@/styles/globals.css'
import Footer from "@/components/footer/Footer.js" ;
import Nav from '@/components/nav';

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>
          Linkbrary
        </title>
      </Head>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}
