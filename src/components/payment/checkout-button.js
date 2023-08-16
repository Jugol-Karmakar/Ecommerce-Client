import { Box, Button, Grid } from "@mui/material";
import React from "react";

const CheckoutButton = () => {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Button fullWidth variant="outlined">
            Back To Checkout Details
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button fullWidth variant="contained">
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutButton;
