import "styles/globals.css";
import Head from "next/head";
import Nav from "components/Nav";
import Footer from "components/Footer";
import { Box } from "@mui/material";
import Loader from "components/Loader";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <SessionProvider>
        <Head>
          <title>My Favourite Simps</title>
          <meta name="title" content="My Favourite Simps" />
          <meta
            name="description"
            content="One of my hobbies is watching movies, especially kdramas. And I deeply love these characters."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="My Favourite Simps" />
          <meta
            property="og:description"
            content="One of my hobbies is watching movies, especially kdramas. And I deeply love these characters."
          />
          <meta property="og:image" content="/metaimg.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="My Favourite Simps" />
          <meta
            property="twitter:description"
            content="One of my hobbies is watching movies, especially kdramas. And I deeply love these characters."
          />
          <meta property="twitter:image" content="/metaimg.png" />
        </Head>
        <Loader />
        <Nav />
        <Box sx={{ minHeight: "calc(100vh - 70px)" }}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </SessionProvider>
    </>
  );
}
