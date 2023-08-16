import React from "react";
import CartCheckoutWrapper from "../../components/shared/cart-checkout-wrapper";
import { Grid } from "@mui/material";
import CartProduct from "../../components/cart/cart-product";
import CartProductTotal from "../../components/cart/cart-product-total";

const Cart = () => {
  return (
    <CartCheckoutWrapper>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <CartProduct />
        </Grid>
        <Grid item xs={4}>
          <CartProductTotal />
        </Grid>
      </Grid>
    </CartCheckoutWrapper>
  );
};

export default Cart;
