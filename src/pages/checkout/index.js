import { Container, Grid } from "@mui/material";
import React from "react";
import BillingAddress from "../../components/checkout/billing-address";
import PaymentBackButton from "../../components/checkout/payment-back-button";
import ShippingAddress from "../../components/checkout/shipping-address";
import CheckoutTotal from "../../components/checkout/checkout-total";

const Checkout = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <ShippingAddress />
          <BillingAddress />
          <PaymentBackButton />
        </Grid>
        <Grid item xs={4}>
          <CheckoutTotal />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
