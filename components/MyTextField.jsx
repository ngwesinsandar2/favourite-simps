import { Box, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MyTextField = ({ label, id, setPostData, type = "text" }) => {
  return (
    <>
      <TextField
        fullWidth
        type={type}
        label={label}
        id={id}
        required
        onChange={(e) => setPostData(e.target.value)}
        sx={{
          label: { color: "var(--white) !important" },
          input: { color: "var(--white)" },
          fieldset: { borderColor: "var(--white) !important" },
        }}
      />
    </>
  );
};

export const TextFieldVideo = ({ id, setPostData }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handleChange = (e) => {
    setShowVideo(true);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    let file = e.target.files[0];
    // let blobURL = URL.createObjectURL(file);
    setVideoUrl(URL.createObjectURL(file));
    reader.onload = (e) => {
      setPostData(e.target.result);
    };
  };

  return (
    <>
      <Box>
        <TextField
          fullWidth
          type="file"
          id={id}
          required
          inputProps={{ accept: "video/*" }}
          helperText="Please Upload Video*"
          onChange={handleChange}
          sx={{
            label: { color: "var(--white) !important" },
            input: { color: "var(--white)" },
            fieldset: { borderColor: "var(--white) !important" },
          }}
          FormHelperTextProps={{ style: { color: "var(--white)" } }}
        />

        {showVideo && (
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ width: "250px", height: "500px" }}>
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                muted
                style={{ cursor: "pointer" }}
              >
                <source src={videoUrl} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
};

export const TextFieldImage = ({ id, helperText, setPostData }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleChange = (e) => {
    setShowImage(true);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      setImageUrl(e.target.result);
      setPostData(e.target.result);
    };
  };

  return (
    <>
      <Box>
        <TextField
          fullWidth
          type="file"
          id={id}
          required
          inputProps={{ accept: "image/*" }}
          helperText={helperText}
          onChange={handleChange}
          sx={{
            label: { color: "var(--white) !important" },
            input: { color: "var(--white)" },
            fieldset: { borderColor: "var(--white) !important" },
          }}
          FormHelperTextProps={{ style: { color: "var(--white)" } }}
        />

        {showImage && (
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ width: "250px", height: "250px" }}>
              <img src={imageUrl} alt="" className="image_class" />
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
};
