import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

import React from 'react';

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            MUI Shop
          </Typography>
          <IconButton color="inherit">
            <ShoppingBasket />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
