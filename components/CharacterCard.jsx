import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function CharacterCard(props) {
  return (
    <>
      {props.fav_characters.map((fc) => {
        return (
          <Grid
            item
            xs={12}
            key={fc.id}
            sx={{ position: "relative", marginBottom: "2rem" }}
          >
            {/* Image */}
            <Box sx={{ height: "600px" }}>
              <img
                src={fc.about_img}
                alt="Character Photo"
                className="image_class border-radius-10"
              />
            </Box>

            {/* About */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#fff",
                width: "100%",
                height: "100%",
                background: "#33333370",
                padding: {
                  xs: "10px",
                  md: "50px",
                },
              }}
              className="border-radius-10"
            >
              <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                {fc.about_title}
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  width: "200px",
                  paddingBlock: "15px",
                  backgroundColor: fc.primary_color,
                  borderColor: fc.primary_color,
                  color: "var(--white)",
                  boxShadow:
                    "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
                  transition: ".3s",
                  "&:hover": {
                    backgroundColor: fc.primary_color,
                    borderColor: fc.primary_color,
                    opacity: 0.7,
                    // boxShadow:
                    //   "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
                  },
                }}
              >
                <Link
                  href={`/home/${fc.id}`}
                  style={{ textDecoration: "none" }}
                >
                  View Details
                </Link>
              </Button>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
