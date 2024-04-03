import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/components/footer/Footer.js";
import { Providers } from "@/components/providers";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
      <Footer />
    </>
  );
}
