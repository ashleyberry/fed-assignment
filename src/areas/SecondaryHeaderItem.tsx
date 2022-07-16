import React, { FC } from "react";
import { Grid, Menu, MenuItem, Typography } from "@mui/material";
import { HeaderMenuItem } from "./SecondaryHeaderAppBar";

export type SecondaryHeaderMenuItemProps = {
  menuItem: HeaderMenuItem;
};

export const SecondaryHeaderMenuItem: FC<SecondaryHeaderMenuItemProps> = ({
  menuItem,
}) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Grid item key={menuItem.name}>
      <MenuItem onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {menuItem.name}
      </MenuItem>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuItem.subMenuItemList?.map((subItem) => (
          <MenuItem key={subItem} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{subItem}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};
