import datasDb from "db/db";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function Home({ datas }) {
  return (
    <>
      <main>
        <Container
          maxWidth="lg"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4">
                  I watched{" "}
                  <a href={datas.movie_link} target="_blank" rel="noreferrer">
                    <em style={{ color: datas.primary_color }}>
                      {datas.movie_title}
                    </em>
                  </a>{" "}
                  for the plot
                </Typography>
                <Typography variant="h6">The plot :</Typography>
                <Typography variant="caption" display="block">
                  (video is from pinterest. I don&rsquo;t own this video. crd to
                  original owner)
                </Typography>
                <Typography variant="caption" display="block">
                  Original Video from pinterest -
                  <a
                    href={datas.ori_video_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em style={{ color: datas.primary_color }}>
                      Original Video Link
                    </em>
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "90%",
                  display: "flex",
                  alignItems: {
                    lg: "center",
                  },
                  justifyContent: {
                    xs: "flex-start",
                    lg: "flex-end",
                  },
                }}
              >
                <video
                  width="70%"
                  height="100%"
                  controls
                  autoPlay
                  muted
                  style={{ cursor: "pointer" }}
                >
                  <source src={datas.video} type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = datasDb.map((c) => ({
    params: { index: `${c.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const characterDatas = datasDb.find((d) => d.id === parseInt(params.index));
  return {
    props: {
      datas: characterDatas,
    },
    revalidate: 5,
  };
}
