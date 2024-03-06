import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/components/footer/Footer.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
