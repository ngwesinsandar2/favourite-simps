import { Container, Typography } from "@mui/material";
import Footer from "components/Footer";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

const Custom404 = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "10px",
            md: "10px 70px 10px 70px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 70px)"
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "var(--white)", fontStyle: "italic" }}
        >
          404 | Can&rsquo;t Find
        </Typography>
      </Container>
    </>
  );
};

export default Custom404;

Custom404.getLayout = function getLayout(page) {
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
        {page}
        <Footer />
      </SessionProvider>
    </>
  );
};
