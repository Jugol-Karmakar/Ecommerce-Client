import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const Footer = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Link href="/">BigBazar</Link>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Typography>
            <Box></Box>
          </Grid>
          <Grid item md={2}>
            <Box>
              <Typography>About Us</Typography>
            </Box>
            <Box>
              <Link href="/">Careers</Link>
              <Link href="/">Our Stores</Link>
              <Link href="/">Our Cares</Link>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
            </Box>
          </Grid>
          <Grid item md={3}>
            {" "}
            <Box>
              <Typography>Customer Care</Typography>
            </Box>
            <Box>
              <Link href="/">Help Center</Link>
              <Link href="/">How to Buy</Link>
              <Link href="/">Track Your Order</Link>
              <Link href="/">Corparate & Bulk Purchasing</Link>
              <Link href="/">Returns & Refunds</Link>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography>Contact Us</Typography>
            </Box>
            <Box>
              <Typography>
                70 Washington Square South, New York, NY 10012, United States
              </Typography>
              <Typography>Email: uilib.help@gmail.com</Typography>
              <Typography>Phone: +1 1123 456 780</Typography>
              <Box>
                <Link href="/">
                  <FacebookOutlinedIcon />
                </Link>
                <Link href="/">
                  <FacebookOutlinedIcon />
                </Link>
                <Link href="/">
                  <FacebookOutlinedIcon />
                </Link>
                <Link href="/">
                  <FacebookOutlinedIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
