import Head from "next/head";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

// SIUX Studio @ CSS Extend
import "../public/siux/assets/css/siux.extend.css";
import "../public/siux/assets/css/siux.icon.remixicon.css";

function MyApp({ Component, pageProps, data }) {
  return (
    <>
      <Head>
        <title>SIUX Studio — Portfolio</title>
        <meta name="description" content="SIUX Studio — Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
