import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/components/footer/Footer.js";
import Nav from "@/components/nav";
import React, { useEffect, useState } from "react";

export const tokenContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState('토큰없음');
  console.log(token);
  return (
    <tokenContext.Provider value={{token, setToken}}>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Nav/>
      <Component {...pageProps} />
      <Footer />
    </tokenContext.Provider>
  );
}
