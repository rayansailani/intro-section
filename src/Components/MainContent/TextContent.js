import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Sponsors from "./Sponsors";
import {
  textContentContainer,
  textContentHeader,
  textContentPara,
  learnMoreButton,
} from "../../Classes/classes";

const TextContent = () => {
  return (
    <Box
      sx={{
        ...textContentContainer,
      }}
    >
      <Typography variant="h2" sx={{ ...textContentHeader }}>
        Make Remote Work
      </Typography>

      <Typography variant="body1" sx={{ ...textContentPara }}>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </Typography>

      <Button
        sx={{
          ...learnMoreButton,
        }}
      >
        <Typography variant="body1">Learn more</Typography>
      </Button>
      <Sponsors />
    </Box>
  );
};

export default TextContent;
