import { Grid, Box } from "@mui/material";
import loader_gifs from "db/loader_gifs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1800);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    loading && (
      <>
        <Grid
          container
          sx={{ position: "fixed", top: "0", height: "100vh", zIndex: "2" }}
        >
          {loader_gifs.map((gif) => {
            return (
              <Grid item xs={6} sm={3} key={gif.id}>
                <img
                  src={gif.loader_gif}
                  alt="Loader Gif"
                  className="image_class"
                />
              </Grid>
            );
          })}

          <Grid
            item
            xs={12}
            sx={{
              position: "absolute",
              top: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              width: "100vw",
              height: "100vh",
              background: "#33333360",
              fontSize: "1.5rem",
            }}
          >
            <Box>
              <h1>Loading...</h1>
            </Box>
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Loader;
