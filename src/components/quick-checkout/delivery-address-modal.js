import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";

const DeliveryAddressModal = (props) => {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  return (
    <>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Add New Address Information</DialogTitle>
        <DialogContent sx={{ paddingTop: "18px!important" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField size="small" label="Enter your name" />
                {/* <FormHelperText>
              Some important helper text
            </FormHelperText> */}
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            pb: 2,
            px: 3,
          }}
        >
          <Button
            onClick={() => setLoading(!loading)}
            loading={loading}
            variant="outlined"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeliveryAddressModal;
