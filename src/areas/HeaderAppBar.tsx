import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { mainMenuItems, SocialMediaIconType } from "../data/dummyData";
import { StyledToolbar } from "./SecondaryHeaderAppBar";

export const HeaderAppBar = () => {
  const socialIcons: SocialMediaIconType[] = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "Twitter,", icon: <Twitter /> },
    { name: "YouTube", icon: <YouTube /> },
  ];

  return (
    <AppBar position="static">
      <StyledSecondaryToolbar>
        <Grid
          alignContent={"center"}
          container
          justifyContent={"flex-end"}
          marginY={"auto"}
        >
          {socialIcons.map((socialIcon) => (
            <IconButton
              color="inherit"
              onClick={() => console.log("social icon clicked")}
              size="large"
            >
              {socialIcon.icon}
            </IconButton>
          ))}

          {mainMenuItems.map((menuItem) => (
            <MenuItem onClick={() => console.log(menuItem)}>
              <Typography paddingY={0}>{menuItem.name}</Typography>
            </MenuItem>
          ))}

          <Grid item marginY={"auto"}>
            <StyledButton onClick={() => console.log("button clicked")}>
              Donate
            </StyledButton>
          </Grid>
        </Grid>
      </StyledSecondaryToolbar>
    </AppBar>
  );
};

export const StyledButton = styled(Button)`
  font-size: medium;
`;
// We're extending the SecondaryHeaderAppBar's styled component,
// and adding a z-index
export const StyledSecondaryToolbar = styled(StyledToolbar)`
  z-index: 1;
`;
