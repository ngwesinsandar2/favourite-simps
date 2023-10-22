import { Typography } from "@mui/material";

const SectionTitle = ({section_title}) => {
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: ".7rem",
          textTransform: "uppercase",
          backgroundColor: "var(--white)",
          display: "inline-block",
          color: "var(--whole-bg)",
          padding: "0 .3rem",
          borderRadius: "3px",
        }}
      >
        {section_title}
      </Typography>
    </>
  );
};

export default SectionTitle;
