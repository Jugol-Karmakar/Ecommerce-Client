import React from "react";
import Hero from "../components/home/hero";
import { Container, Grid } from "@mui/material";
import CatagoriesMenu from "../components/catagories-menu";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CatagoriesMenu />
    </>
  );
};

export default HomePage;
