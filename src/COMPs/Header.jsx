import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

import React from "react";

function Header({ handleCart, orderLen }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            MUI Shop
          </Typography>
          <IconButton color="inherit" onClick={handleCart}>
            <Badge color="secondary" badgeContent={orderLen}>
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
