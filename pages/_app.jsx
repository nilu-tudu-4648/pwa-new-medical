import Head from "next/head";
import "../styles/global.css";
import "../styles/login.css";
import "../styles/homepage.css";
import "../styles/bottomBar.css";
import "../styles/profile.css";
import "../styles/tutorial.css";
import "../styles/oncoChat.css";
import "../styles/treatmentRecom.css";
import "../styles/treatmentDiary.css";
import "../styles/news.css";
import "../styles/symptoms.css";
import "../styles/labs.css";
import "../styles/popUp.css";
import "../styles/disclamirPopup.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
