import { Card, CardContent, Divider } from "@mui/material";
import React from "react";
import CatagoryFilter from "./catagory-filter";
import PriceFilter from "./price-filter";
import BrandFilter from "./brand-filter";
import OthersFilter from "./others-filter";
import RatingFilter from "./rating-filter";

const ProductSidebar = () => {
  return (
    <>
      <Card>
        <CardContent>
          <CatagoryFilter />
          <Divider sx={{ marginTop: "16px", marginBottom: "24px" }} />

          <PriceFilter />
          <Divider sx={{ marginTop: "16px", marginBottom: "24px" }} />

          <BrandFilter />
          <Divider sx={{ marginTop: "16px", marginBottom: "24px" }} />

          <OthersFilter />
          <Divider sx={{ marginTop: "16px", marginBottom: "24px" }} />

          <RatingFilter />
        </CardContent>
      </Card>
    </>
  );
};

export default ProductSidebar;
