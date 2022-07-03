import React, { useState } from "react";
import { AppBar, Typography, IconButton, Toolbar, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navbarBrand, hamburgerButton } from "../../Classes/classes";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  console.log(open);
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
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default NavbarMobile;
