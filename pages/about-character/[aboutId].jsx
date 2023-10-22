import { Box, Container, Grid, Typography } from "@mui/material";
import datasDb from "db/db";

const AboutCharacter = ({ datas }) => {
  const about_bio = [
    {
      id: 1,
      title: "Birthday",
      about: datas.about_bio_dob,
    },
    {
      id: 2,
      title: "Age",
      about: datas.about_bio_age,
    },
    {
      id: 3,
      title: "Gender",
      about: datas.about_bio_gender,
    },
    {
      id: 4,
      title: "Sexual",
      about: datas.about_bio_sex,
    },
    {
      id: 5,
      title: "Occupation",
      about: datas.about_bio_occupation,
    },
    {
      id: 6,
      title: "Alias1",
      about: datas.about_bio_alias,
    },
  ];

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
          {datas.about_title}
        </Typography>

        <Grid
          container
          sx={{
            paddingLeft: {
              xs: "70px",
            },
          }}
        >
          <Grid item xs={12} sx={{ height: "400px" }} mb={3}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={datas.about_img}
                alt="About Photo"
                className="image_class"
              />
            </Box>
          </Grid>

          {about_bio.map((b) => {
            return (
              <Grid item xs={12} md={6} key={b.id}>
                <Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontSize: { xs: "20px", md: "24px" } }}
                  >
                    <strong>{b.title}</strong> - {b.about}
                  </Typography>
                </Box>
              </Grid>
            );
          })}

          <Grid item xs={12} mt={3}>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{ fontSize: "1rem" }}
              >
                {datas.about_description}
                <br />
                From{" "}
                <a href={datas.about_link} target="_blank" rel="noreferrer">
                  <em style={{ color: datas.primary_color }}>this link</em>
                </a>
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
    params: { aboutId: `${c.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const characterDatas = datasDb.find((d) => d.id === parseInt(params.aboutId));
  return {
    props: {
      datas: characterDatas,
    },
    revalidate: 5,
  };
}
