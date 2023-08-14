import React from "react";
import Hero from "../components/home/hero";
import Header from "../components/header/header";
import { Container, Grid } from "@mui/material";
import CatagoriesMenu from "../components/catagories-menu";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CatagoriesMenu />
    </>
  );
};

export default HomePage;
