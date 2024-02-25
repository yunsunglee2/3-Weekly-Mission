import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/components/footer/Footer.js";
import Nav from "@/components/nav";
import React, { useEffect, useState } from "react";

const tokenContext = React.createContext(null);

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState('');
  
  useEffect(()=> {
    const TOKEN = localStorage.getItem('login');
    setToken(TOKEN)
    console.log(token)
  },[token])

  const handleToken = () => {
    console.log('토큰삭제')
    localStorage.removeItem('login')
    setToken('')
  }

  return (
    <tokenContext.Provider value={{token, setToken}}>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Nav token={token} handleToken={handleToken} />
      <Component {...pageProps} />
      <Footer />
    </tokenContext.Provider>
  );
}
