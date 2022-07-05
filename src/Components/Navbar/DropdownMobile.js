import { Box, Button, MenuItem, Typography } from "@mui/material";
import { dropDownButton, dropDownItemMobile } from "../../Classes/classes";
import React, { useState } from "react";
const DropdownMobile = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Box>
      <Button
        disableRipple
        onClick={handleOpen}
        sx={{ ...dropDownButton, marginBottom: "0.8rem !important" }}
      >
        <Typography
          variant="body1"
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
      {open &&
        props.config.items.map((item, index) => {
          return (
            <Box key={index} sx={{ marginLeft: "1.4rem !important" }}>
              <MenuItem sx={{ ...dropDownItemMobile }} onClick={handleOpen}>
                {item.src && <img alt="" src={item.src} />}
                <Typography
                  sx={{
                    marginLeft: `${
                      item.src ? "0.6rem !important" : "0 !important"
                    }`,
                    marginBottom: "-8px !important",
                  }}
                  variant="body2"
                >
                  {item.title}
                </Typography>
              </MenuItem>
            </Box>
          );
        })}
    </Box>
  );
};
export default DropdownMobile;
