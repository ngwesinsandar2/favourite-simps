import {
  Container,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import datasDb from "db/db";
import CharacterCard from "components/CharacterCard";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Footer from "components/Footer";
import Head from "next/head";
import { SessionProvider, useSession } from "next-auth/react";
import Loader from "components/Loader";

const Characters = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "10px",
            md: "10px 70px 10px 70px",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            variant="h4"
            sx={{ color: "var(--white)", fontStyle: "italic" }}
          >
            Favourite Characters
          </Typography>

          {session && (
            <Tooltip
              title="ADD NEW CHARACTER"
              placement="left"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "var(--white)",
                    color: "var(--whole-bg)",
                  },
                },
              }}
            >
              <Link href="/new-character">
                <IconButton>
                  <AddCircleIcon
                    sx={{ color: "var(--white)", fontSize: "2.5rem" }}
                  />
                </IconButton>
              </Link>
            </Tooltip>
          )}
        </Stack>
        <Grid container>
          <CharacterCard fav_characters={datasDb} />
        </Grid>
      </Container>
    </>
  );
};

export default Characters;

Characters.getLayout = function getLayout(page) {
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
        {page}
        <Footer />
      </SessionProvider>
    </>
  );
};
