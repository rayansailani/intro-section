import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import {
  navbarBrand,
  dropDownButton,
  outLinedButton,
} from "../../Classes/classes";
import Dropdown from "./Dropdown";
import { dropDownConfig } from "../../Models/DropDowns";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        display: {
          md: "block !important",
          xs: "none !important",
        },
      }}
    >
      <Toolbar sx={{ padding: "0 1.6rem !important" }}>
        <Box display="flex" flexGrow={1}>
          <Typography variant="h4" sx={{ ...navbarBrand }}>
            snap
          </Typography>
          {dropDownConfig.map((item, index) => {
            return <Dropdown key={index} config={item} />;
          })}
          <Button sx={{ ...dropDownButton }}>Careers</Button>
          <Button sx={{ ...dropDownButton }}>About</Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              ...outLinedButton,
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
              },
            }}
          >
            Login
          </Button>
          <Button variant="outlined" sx={{ ...outLinedButton }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
