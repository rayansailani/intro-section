import { Box } from "@mui/material";
import React from "react";

const ImageContent = () => {
  const source =
    "intro-section-with-dropdown-navigation-main/intro-section-with-dropdown-navigation-main/images/image-hero-";
  const small = source + "mobile.png";
  const large = source + "desktop.png";
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        background: {
          sm: `url(${small})`,
          md: `url(${large})`,
        },
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "contain !important",
      }}
    ></Box>
  );
};

export default ImageContent;
