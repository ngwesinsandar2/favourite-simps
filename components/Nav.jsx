import { Container, Grid, Box, Tooltip, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PersonIcon from "@mui/icons-material/Person";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CollectionsIcon from "@mui/icons-material/Collections";
import NavStyle from "styles/Nav.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { useRouter } from "next/router";
import datas from "db/db";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const router = useRouter();
  const c_id = router.asPath.slice(-1);

  const { data: session, status } = useSession();
  const loading = status === "loading";

  const navbarDatas = [
    {
      title: "HOME",
      toLink: `/home/${c_id}`,
      icon: HomeIcon,
    },
    {
      title: "FAV MOVIE SCENES",
      toLink: `/fav-movies-scenes/${c_id}`,
      icon: MovieFilterIcon,
    },
    {
      title: "ABOUT",
      toLink: `/about-character/${c_id}`,
      icon: PersonIcon,
    },
    {
      title: "WHY I ADMIRE?",
      toLink: `/why-admire/${c_id}`,
      icon: QuestionMarkIcon,
    },
    {
      title: "GALLERY",
      toLink: `/gallery/${c_id}`,
      icon: CollectionsIcon,
    },
    {
      title: "CHARACTERS",
      toLink: "/characters",
      icon: FavoriteIcon,
    },
  ];

  return (
    <>
      <Container maxWidth="lg" className={NavStyle.navbarCon}>
        <Box className={NavStyle.navbarBox}>
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navbarDatas.map((n) => {
              return (
                <Grid
                  item
                  key={n.title}
                  xs={12}
                  md={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip
                    title={n.title}
                    placement="right"
                    arrow
                    componentsProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: datas[c_id - 1].primary_color,
                        },
                      },
                    }}
                  >
                    <Link
                      href={n.toLink}
                      className={
                        router.asPath === n.toLink && `${NavStyle.active}`
                      }
                    >
                      <IconButton>
                        <n.icon sx={{ color: datas[c_id - 1].primary_color }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
              );
            })}

            {/* Login & Logout */}
            {/* Login */}
            {!loading && !session && (
              <Box sx={{ display: "none" }}>
                <Grid
                  item
                  xs={12}
                  md={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip
                    title="LOGIN"
                    placement="right"
                    arrow
                    componentsProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: "",
                        },
                      },
                    }}
                  >
                    <Link href="/auth/login">
                      <IconButton>
                        <LoginIcon sx={{ color: "var(--white)" }} />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
              </Box>
            )}
            {/* Logout */}
            {session && (
              <Grid
                item
                xs={12}
                md={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Tooltip
                  title="LOGOUT"
                  placement="right"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "",
                      },
                    },
                  }}
                >
                  <Link href="/api/auth/signout">
                    <IconButton
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <LogoutIcon sx={{ color: "var(--white)" }} />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
            )}

            {/* Dark Mode Light Mode */}
            {/* <Grid
              item
              xs={12}
              md={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip
                title={value?.theme === "light" ? "DARK MODE" : "LIGHT MODE"}
                placement="right"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "var(--primary-color)",
                    },
                  },
                }}
              >
                <IconButton onClick={value?.switchTheme}>
                  {value?.theme === "light" ? (
                    <DarkModeIcon sx={{ color: "var(--primary-color)" }} />
                  ) : (
                    <LightModeIcon sx={{ color: "var(--primary-color)" }} />
                  )}
                </IconButton>
              </Tooltip>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Nav;
