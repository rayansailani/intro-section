import { Container, Grid } from "@mui/material";
import React from "react";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
const MainContent = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        margin: "auto !important",
      }}
    >
      <Grid
        container
        spacing={10}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} md={6}>
          <TextContent />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageContent />
        </Grid>
      </Grid>
    </Container>
  );
};
export default MainContent;
