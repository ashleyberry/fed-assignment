import React, { FC } from "react";
import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import { HeaderMenuItem } from "./SecondaryHeaderAppBar";

export type SecondaryHeaderMenuItemProps = {
  menuItem: HeaderMenuItem;
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
      <MenuItem onClick={handleOpenDropdownMenu} sx={{ p: 0 }}>
        {menuItem.name}
      </MenuItem>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseDropdownMenu}
      >
        {menuItem.subMenuItemList?.map((subItem) => (
          <MenuItem key={subItem} onClick={handleCloseDropdownMenu}>
            <Typography textAlign="center">{subItem}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};
