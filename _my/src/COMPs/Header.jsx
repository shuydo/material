import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import React from "react";

function Header({ handleCart }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            MUI Shop
          </Typography>
          <IconButton color="inherit" onClick={handleCart}>
            <ShoppingBasket />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
