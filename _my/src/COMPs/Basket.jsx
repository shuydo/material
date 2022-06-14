import { ShoppingBasket } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const Basket = props => {
  const {
    cartOpen,
    closeCart = Function.prototype,
    // order,
    // removeFromOrder,
  } = props;
  return (
    <Drawer
      anchor="right" // +l/t/b
      open={cartOpen}
      onClose={closeCart}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина"/>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Basket;
