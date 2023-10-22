import { Container, ImageList, ImageListItem } from "@mui/material";
import datasDb from "db/db";

const Gallery = ({ datas }) => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "10px 10px 10px 70px",
          },
        }}
      >
        <ImageList
          variant="masonry"
          gap={30}
          sx={{
            columnCount: {
              xs: "1 !important",
              sm: "2 !important",
              md: "3 !important",
            },
          }}
        >
          {datas.gallery_imgs.map((g) => (
            <ImageListItem key={g.id}>
              <img
                src={`${g.gallery_img}?w=248&fit=crop&auto=format`}
                srcSet={`${g.gallery_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt="gallery_image"
                className="border-radius-10"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Gallery;

export async function getStaticPaths() {
  const paths = datasDb.map((c) => ({
    params: { galleryId: `${c.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const characterDatas = datasDb.find(
    (d) => d.id === parseInt(params.galleryId)
  );
  return {
    props: {
      datas: characterDatas,
    },
    revalidate: 5,
  };
}
