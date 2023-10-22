import {
  Container,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import datasDb from "db/db";
import { getCsrfToken, SessionProvider } from "next-auth/react";
import Head from "next/head";
import Loader from "components/Loader";
import Footer from "components/Footer";
import { useRouter } from "next/router";

export default function Login({ csrfToken }) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: {
            xs: "70px",
          },
        }}
      >
        <Grid
          container
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "auto",
                height: {
                  xs: "50vh",
                  md: "98vh",
                },
              }}
            >
              <img
                src="http://showbizclan.com/wp-content/uploads/2021/09/Best-Korean-Drama-of-all-time-scaled-e1633088177941.jpg"
                alt="Login Photo"
                className="image_class"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: "100%",
              height: {
                xs: "30%",
                md: "100%",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h4"
                sx={{
                  color: "",
                  fontStyle: "italic",
                }}
              >
                Login
              </Typography>
              <form method="post" action="/api/auth/callback/credentials">
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
                  <InputLabel
                    htmlFor="username"
                    sx={{
                      color: "var(--white) !important",
                    }}
                  >
                    User Name
                  </InputLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    sx={{
                      color: "var(--white)",
                      "&:before": {
                        borderBottom: "1px solid var(--white)",
                      },
                      "&:after": {
                        borderBottom: "1px solid var(--white)",
                      },
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{ m: 1, width: "100%", marginBottom: "2.5rem" }}
                  variant="standard"
                >
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    sx={{
                      color: "var(--white) !important",
                    }}
                  >
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          sx={{
                            color: "var(--white)",
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{
                      color: "var(--white)",
                      "&:before": {
                        borderBottom: "1px solid var(--white)",
                      }
                    }}
                  />
                </FormControl>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => router.back()}
                    sx={{
                      backgroundColor: "var(--white)",
                      color: "var(--whole-bg)",
                      width: "200px",
                      border: "1px solid var(--white)",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "var(--white)",
                      },
                    }}
                  >
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "var(--white)",
                      color: "var(--whole-bg)",
                      width: "200px",
                      border: "1px solid var(--white)",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "var(--white)",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Login.getLayout = function getLayout(page) {
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

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
