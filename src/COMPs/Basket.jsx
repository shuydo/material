import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BasketItem from "./BasketItem";

const Basket = props => {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order = [], // foolish defence
    removeFromOrder,
  } = props;
  console.log("order.length: ", order.length);
  return (
    <Drawer
      anchor="right" // +l/t/b
      open={cartOpen}
      onClose={closeCart}
    >
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
      </List>
      <Divider />

      {!order.length ? (
        <ListItem>Empty</ListItem>
      ) : (
        <>
          {order.map(item => (
            <BasketItem
              key={item.name}
              removeFromOrder={removeFromOrder}
              {...item}
            />
          ))}
          <Divider />
          <ListItem>
            <Typography sx={{ fontWeight: 700 }}>
              Общая стоимость:{" "}
              {order.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}{" "}
              рублей.
            </Typography>
          </ListItem>
        </>
      )}
    </Drawer>
  );
};

export default Basket;
