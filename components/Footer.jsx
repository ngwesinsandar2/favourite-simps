import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer>
        <Grid container sx={{ paddingTop: "2rem" }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="subtitle2">
              &copy; 2023 Copyright: MyFavouriteSimps
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
