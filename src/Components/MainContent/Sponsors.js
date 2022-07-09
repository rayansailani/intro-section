import { Box, Grid } from "@mui/material";
import React from "react";
import { sponsors } from "../../Models/Sponsors";

const Sponsors = () => {
  return (
    <Grid container spacing={6}>
      {sponsors.map((sponsor, index) => {
        return (
          <Grid key={index} item xs={3} sx={{ textAlign: "center" }}>
            <img src={sponsor} alt="" />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Sponsors;
