import { Container, Grid } from "@mui/material";
import React from "react";
import CheckoutPayment from "../../components/payment/checkout-payment";
import CheckoutButton from "../../components/payment/checkout-button";
import CheckoutPaymentTotal from "../../components/payment/checkout-payment-total";

const Payment = () => {
  const [showPayment1Card, setShowPayment1Card] = React.useState(false);
  const [showPayment2Card, setShowPayment2Card] = React.useState(false);
  const handleCard1 = () => {
    setShowPayment1Card((e) => !e);
    setShowPayment2Card(false);
  };
  const handleCard2 = () => {
    setShowPayment2Card((e) => !e);
    setShowPayment1Card(false);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <CheckoutPayment
            handleCard1={handleCard1}
            handleCard2={handleCard2}
            showPayment1Card={showPayment1Card}
            showPayment2Card={showPayment2Card}
          />
          <CheckoutButton />
        </Grid>
        <Grid item xs={4}>
          <CheckoutPaymentTotal />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
