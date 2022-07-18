import React, { FC } from "react";
import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { HeaderMenuItemType } from "../data/dummyData";

export type SecondaryHeaderMenuItemProps = {
  menuItem: HeaderMenuItemType;
};

export const SecondaryHeaderMenuItem: FC<SecondaryHeaderMenuItemProps> = ({
  menuItem,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenDropdownMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdownMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item key={menuItem.name}>
      <StyledMenuItem onClick={handleOpenDropdownMenu}>
        {menuItem.name}
      </StyledMenuItem>

      <StyledMenu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        id="menu-appbar"
        keepMounted
        onClose={handleCloseDropdownMenu}
        open={Boolean(anchorEl)}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {menuItem.subMenuItemList?.map((subItem) => (
          <MenuItem key={subItem} onClick={handleCloseDropdownMenu}>
            <Typography variant={"body1"} textAlign="center">
              {subItem}
            </Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </Grid>
  );
};

const StyledMenu = styled(Menu)`
  margin-top: 2rem;
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0;
`;
