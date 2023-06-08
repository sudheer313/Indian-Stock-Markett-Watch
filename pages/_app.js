import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/footer.css";
import "../styles/hamburger.css";
import AdComponent from "../components/AdComponent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("G-9CW1J527WZ");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="DvvW_KExAZyAtNmd_jn-aMyTCnRWR8s0LjLqNvpwRys"
        />
      </Head>
      <div className="flex min-h-screen">
        <div className="w-1/4">
          <AdComponent />
        </div>
        <div className="flex flex-col w-1/2">
          <Header />
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <div className="w-1/4">
          <AdComponent />
        </div>
      </div>
    </>
  );
}

export default MyApp;
