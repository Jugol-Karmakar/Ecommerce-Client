import { Container, Grid } from "@mui/material";
import React from "react";
import DeliveryTime from "../../components/quick-checkout/delivery-time";
import DeliveryAddress from "../../components/quick-checkout/delivery-address";
import PaymentDetails from "../../components/quick-checkout/payment-details";
import CheckoutOrder from "../../components/quick-checkout/checkout-order";

const QuickCheckout = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <DeliveryTime />
          <DeliveryAddress />
          <PaymentDetails />
        </Grid>
        <Grid item md={4}>
          <CheckoutOrder />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QuickCheckout;
