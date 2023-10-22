import { Container, Grid, Typography } from "@mui/material";
import SceneCard from "components/SceneCard";
import datasDb from "db/db";

const FavCaseyScenes = ({ datas }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "10px 10px 10px 70px",
            lg: "10px 0",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: datas.primary_color, fontStyle: "italic" }}
        >
          Favourite Movies Scenes
        </Typography>
        <Grid container spacing={3}>
          {datas.scenes.length === 0 ? (
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
              <Typography variant="h5">
                Nothing To Show
              </Typography>
            </Grid>
          ) : (
            <SceneCard fav_scenes={datas.scenes} />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default FavCaseyScenes;

export async function getStaticPaths() {
  const paths = datasDb.map((c) => ({
    params: { fmsId: `${c.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const characterDatas = datasDb.find((d) => d.id === parseInt(params.fmsId));
  return {
    props: {
      datas: characterDatas,
    },
    revalidate: 5,
  };
}
