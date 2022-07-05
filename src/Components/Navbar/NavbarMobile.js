import React, { useState } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  navbarBrand,
  hamburgerButton,
  dropDownButton,
  outLinedButton,
} from "../../Classes/classes";
import { dropDownConfig } from "../../Models/DropDowns";
import DropdownMobile from "./DropdownMobile";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        display: {
          xs: "block !important",
          md: "none !important",
        },
      }}
    >
      <Toolbar sx={{ padding: "0.6rem 1.2rem !important" }}>
        <Typography variant="h4" sx={{ ...navbarBrand, flexGrow: 1 }}>
          snap
        </Typography>
        <IconButton
          disableRipple
          sx={{ ...hamburgerButton, color: "black" }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer}
          sx={{
            ".MuiDrawer-paper": {
              padding: "1.4rem !important",
              width: "50vw !important",
            },
          }}
        >
          <Box display="flex" flexDirection="row" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer}>
              <img
                src="intro-section-with-dropdown-navigation-main\intro-section-with-dropdown-navigation-main\images\icon-close-menu.svg"
                alt=""
              />
            </IconButton>
          </Box>
          {dropDownConfig.map((config, index) => {
            return <DropdownMobile key={index} config={config} />;
          })}
          <Button
            variant="text"
            sx={{
              ...dropDownButton,
              marginBottom: "0.8rem !important",
            }}
          >
            <Typography sx={{ textAlign: "left !important", width: "100%" }}>
              Careers
            </Typography>
          </Button>
          <Button sx={{ ...dropDownButton, marginBottom: "0.8rem !important" }}>
            <Typography sx={{ textAlign: "left !important", width: "100%" }}>
              About
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              ...outLinedButton,
              marginBottom: "0.4rem !important",
              marginTop: "2rem !important",
              borderColor: "white",
            }}
          >
            Login
          </Button>
          <Button variant="outlined" sx={{ ...outLinedButton }}>
            Register
          </Button>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default NavbarMobile;
