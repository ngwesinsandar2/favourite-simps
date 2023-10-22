import { Box, Container, Grid, Typography } from "@mui/material";
import datasDb from "db/db";

const AboutCharacter = ({ datas }) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "10px 0" }}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            color: datas.primary_color,
            fontStyle: "italic",
            paddingLeft: {
              xs: "70px",
            },
          }}
        >
          Why I admire this character?
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            paddingLeft: {
              xs: "70px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              height: {
                xs: "300px",
                sm: "600px",
              },
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={datas.admire_img}
                alt="Admire Photo"
                className="image_class border-radius-10"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{ fontSize: "1rem" }}
              >
                {datas.admire_reason}
                <br />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutCharacter;

export async function getStaticPaths() {
  const paths = datasDb.map((c) => ({
    params: { admireId: `${c.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const characterDatas = datasDb.find(
    (d) => d.id === parseInt(params.admireId)
  );
  return {
    props: {
      datas: characterDatas,
    },
    revalidate: 5,
  };
}
