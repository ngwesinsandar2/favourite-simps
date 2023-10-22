import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function SceneCard(props) {
  return (
    <>
      {props.fav_scenes.map((fs) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={fs.id}>
            <Card
              sx={{
                maxWidth: 345,
                height: "100%",
                backgroundColor: "rgb(18, 18, 18)",
                color: "var(--white)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
              key={fs.id}
              variant="outlined"
            >
              <CardMedia
                component="img"
                alt={fs.scene_title}
                height="200"
                image={fs.scene_img}
                sx={{ borderRadius: "4px 4px 0 0" }}
              />
              <CardContent sx={{ padding: "10px !important" }}>
                <Typography variant="h6">{fs.scene_title}</Typography>
                <Typography variant="caption">{fs.caption}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
