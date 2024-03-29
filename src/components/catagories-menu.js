import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { HOME_CATAGORIES } from "../shared/constants/constants";
import Link from "next/link";
import Image from "next/image";
import product from "../../public/product.jpg";

const CatagoriesMenu = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <Box>
          <GridViewRoundedIcon
            sx={{
              color: "#1976d2",
              fontSize: "1.5rem",
            }}
          />
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
          Product Categories
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {HOME_CATAGORIES.map((catagory) => (
          <Grid key={catagory.id} item md={3}>
            <Link href={catagory.route} style={{ textDecoration: "none" }}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  overflow: "unset",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  "&:hover": {
                    boxShadow:
                      "-3px -3px 53px -9px rgba(138,136,136,0.31),0px 10px 10px 0px rgba(0,0,0,0.22)",
                  },
                }}
              >
                <Image
                  src={product}
                  alt="product"
                  width={52}
                  height={52}
                  style={{ overflow: "clip" }}
                />
                {catagory.name}
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CatagoriesMenu;
//
