import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

const PriceFilter = () => {
  return (
    <>
      <Typography
        sx={{ marginBottom: "16px", fontSize: "16px", fontWeight: 600 }}
      >
        Price Range
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="outlined-number"
          type="number"
          placeholder="0"
          size="small"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "4px",
            width: "100%",
          }}
        />
        <Typography sx={{ fontSize: "16px", fontWeight: 600, px: "8px" }}>
          -
        </Typography>
        <TextField
          id="outlined-number"
          type="number"
          placeholder="0"
          size="small"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "4px",
            width: "100%",
          }}
        />
      </Box>
    </>
  );
};

export default PriceFilter;
