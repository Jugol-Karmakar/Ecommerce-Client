import { Box, Button, Grid } from "@mui/material";
import React from "react";

const PaymentBackButton = () => {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Button fullWidth variant="outlined">
            Back To Cart
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button fullWidth variant="contained">
            Proceed To Payment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentBackButton;
