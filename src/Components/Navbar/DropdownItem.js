import React from "react";
import { Box, MenuItem, Menu, Typography } from "@mui/material";
import { dropDownItem } from "../../Classes/classes";
const DropdownItems = (props) => {
  return (
    // <Menu
    //   anchorEl={props.anchorEl}
    //   open={props.open}
    //   onClose={props.handleClose}
    // >
    //   {props.items.map((item, index) => {
    //     return (
    //       <MenuItem
    //         key={index}
    //         sx={{ ...dropDownItem }}
    //         onClick={props.handleClose}
    //       >
    //         <img alt="" src={item.src} />
    //         <Typography
    //           sx={{
    //             marginLeft: "0.6rem !important",
    //             marginBottom: "-8px !important",
    //           }}
    //           variant="body1"
    //         >
    //           {item.title}
    //         </Typography>
    //       </MenuItem>
    //     );
    //   })}
    // </Menu>
      <Box>
        {props.items.map((item, index)=>{
          return 
        })}
      </Box>
  );
};
export default DropdownItems;
