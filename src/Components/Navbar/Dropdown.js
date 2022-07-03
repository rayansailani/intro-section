import React, { useState } from "react";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import { dropDownButton, dropDownItem } from "../../Classes/classes";
import { Box } from "@mui/system";
const Dropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ marginRight: "1rem !important" }}>
      <Button
        disableRipple
        onClick={handleClick}
        sx={{ ...dropDownButton, marginBottom: "-20px !important" }}
      >
        <Typography
          variant="body2"
          sx={{
            marginRight: "0.5rem !important",
          }}
        >
          {props?.config.head}
        </Typography>
        <img
          src={`intro-section-with-dropdown-navigation-main/intro-section-with-dropdown-navigation-main/images/icon-arrow-${
            !open ? "up" : "down"
          }.svg`}
        />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {props.config.items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              sx={{ ...dropDownItem }}
              onClick={handleClose}
            >
              <img alt="" src={item.src} />
              <Typography
                sx={{
                  marginLeft: "0.6rem !important",
                  marginBottom: "-8px !important",
                }}
                variant="body1"
              >
                {item.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default Dropdown;
