import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import SectionTitle from "components/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios_default/axios";
import Head from "next/head";
import Footer from "components/Footer";
import {
  MyTextField,
  TextFieldImage,
  TextFieldVideo,
} from "components/MyTextField";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loader from "components/Loader";

const NewCharacter = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  const [sceneForm, setSceneForm] = useState({
    id: "",
    scene_img: "",
    scene_title: "",
  });
  const [galleryForm, setGalleryForm] = useState({
    id: "",
    gallery_img: "",
  });
  const [postForm, setPostForm] = useState({
    id: "",
    movie_title: "",
    video: "",
    ori_video_link: "",
    primary_color: "",
    scenes: [],
    about_title: "",
    about_img: "",
    about_bio_dob: "",
    about_bio_age: "",
    about_bio_gender: "",
    about_bio_sex: "",
    about_bio_occupation: "",
    about_bio_alias: "",
    about_description: "",
    about_link: "",
    admire_img: "",
    admire_reason: "",
    gallery_imgs: [],
    login_img: "",
  });

  const submitScenes = () => {
    postForm.scenes.push(sceneForm);
  };

  const submitGallery = () => {
    postForm.gallery_imgs.push(galleryForm);
  };

  const handlePostCharacter = (e) => {
    e.preventDefault();
    // axios
    //   .post("/characters", postForm)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    if (!loading && !session) {
      router.push("/auth/1");
    }
  }, [session, loading]);

  if (loading || !session) {
    return <Loader />;
  }

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "10px 10px 10px 70px",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: "var(--white)", fontStyle: "italic" }}
        >
          Add New Character
        </Typography>
        <form onSubmit={handlePostCharacter}>
          <Grid container spacing={3} sx={{ color: "var(--white)" }}>
            <Grid item xs={12} my={5}>
              <MyTextField
                type="color"
                label="Primary Color"
                id="pc"
                setPostData={(val) =>
                  setPostForm({ ...postForm, primary_color: val })
                }
              />
            </Grid>
            {/* For Home Page */}
            <Grid item xs={12}>
              <SectionTitle section_title="For Home Page" />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="id"
                id="hid"
                setPostData={(val) => setPostForm({ ...postForm, id: val })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="Movie Name"
                id="mn"
                setPostData={(val) =>
                  setPostForm({ ...postForm, movie_title: val })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldVideo id="vl" setPostData={(val) => console.log(val)} />
            </Grid>
            <Grid item xs={12} mb={5}>
              <MyTextField
                label="Original Video Link"
                id="ovl"
                setPostData={(val) =>
                  setPostForm({ ...postForm, ori_video_link: val })
                }
              />
            </Grid>

            {/* For Fav Scenes */}
            <Grid item xs={12}>
              <SectionTitle section_title="For Favourite Scenes" />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="id"
                id="fsid"
                setPostData={(val) => setSceneForm({ ...sceneForm, id: val })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="Scene Title"
                id="st"
                setPostData={(val) =>
                  setSceneForm({ ...sceneForm, scene_title: val })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldImage
                id="simg"
                helperText="Please Upload Scene Photo"
                setPostData={(val) =>
                  setSceneForm({ ...sceneForm, scene_img: val })
                }
              />
            </Grid>
            <Grid item xs={12} py={5}>
              <Button
                type="button"
                variant="contained"
                sx={{ float: "right" }}
                onClick={submitScenes}
              >
                Submit Scene
              </Button>
            </Grid>

            {/* For About Character */}
            <Grid item xs={12}>
              <SectionTitle section_title="For About Character" />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Title"
                id="at"
                setPostData={(val) =>
                  setPostForm({ ...postForm, about_title: val })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldImage
                id="ail"
                helperText="Please Upload About Photo"
                setPostData={(val) =>
                  setPostForm({ ...postForm, about_img: val })
                }
              />
            </Grid>
            {/* About Bio */}
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Bio Birthday"
                id="abb"
                setPostData={(val) =>
                  setPostForm({ ...postForm, about_bio_dob: val })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Bio Age"
                id="aba"
                setPostData={(val) =>
                  setPostForm({ ...postForm, about_bio_age: val })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Bio Gender"
                id="abg"
                setPostData={(val) =>
                  setPostForm({
                    ...postForm,
                    about_bio_gender: val,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Bio Sexual"
                id="abs"
                setPostData={(val) =>
                  setPostForm({ ...postForm, about_bio_sex: val })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Bio Occupation"
                id="abo"
                setPostData={(val) =>
                  setPostForm({
                    ...postForm,
                    about_bio_occupation: val,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="About Bio Alias"
                id="abalias"
                setPostData={(val) =>
                  setPostForm({
                    ...postForm,
                    about_bio_alias: val,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="About Description"
                id="ades"
                required
                onChange={(e) => {
                  setPostForm({
                    ...postForm,
                    about_description: e.target.value,
                  });
                }}
                sx={{
                  label: { color: "var(--white) !important" },
                  input: { color: "var(--white)" },
                  fieldset: { borderColor: "var(--white) !important" },
                }}
              />
            </Grid>
            <Grid item xs={12} mb={5}>
              <MyTextField
                label="About Link"
                id="alink"
                setPostData={(val) =>
                  setPostForm({ ...postForm, about_link: val })
                }
              />
            </Grid>

            {/* Why I Admire? */}
            <Grid item xs={12}>
              <SectionTitle section_title="For Why I Admire?" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldImage
                id="admireImg"
                helperText="Please Upload Photo For Why I Admire? Page"
                setPostData={(val) =>
                  setPostForm({ ...postForm, admire_img: val })
                }
              />
            </Grid>
            <Grid item xs={12} mb={5}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Admire Reason"
                id="admireReason"
                required
                onChange={(e) => {
                  setPostForm({
                    ...postForm,
                    admire_reason: e.target.value,
                  });
                }}
                sx={{
                  label: { color: "var(--white) !important" },
                  input: { color: "var(--white)" },
                  fieldset: { borderColor: "var(--white) !important" },
                }}
              />
            </Grid>

            {/* For Gallery */}
            <Grid item xs={12}>
              <SectionTitle section_title="For Gallery" />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyTextField
                label="id"
                id="gid"
                setPostData={(val) =>
                  setGalleryForm({ ...galleryForm, id: val })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldImage
                id="gil"
                helperText="Please Upload Gallery Photo"
                setPostData={(val) =>
                  setGalleryForm({
                    ...galleryForm,
                    gallery_img: val,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} py={5}>
              <Button
                type="button"
                variant="contained"
                sx={{ float: "right" }}
                onClick={submitGallery}
              >
                Submit Gallery
              </Button>
            </Grid>

            {/* For Login */}
            <Grid item xs={12}>
              <SectionTitle section_title="For Login" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldImage
                id="lil"
                helperText="Please Upload Login Photo"
                setPostData={(val) =>
                  setPostForm({ ...postForm, login_img: val })
                }
              />
            </Grid>

            {/* For Submit Button */}
            <Grid
              item
              xs={6}
              sx={{ padding: "70px 24px 0 24px !important", margin: "0 auto" }}
            >
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Submit New Character
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default NewCharacter;

NewCharacter.getLayout = function getLayout(page) {
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
