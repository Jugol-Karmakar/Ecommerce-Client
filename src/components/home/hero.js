import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <CarouselProvider
      totalSlides={3}
      naturalSlideWidth={100}
      naturalSlideHeight={10}
    >
      <Slider>
        {["first", "second", "third"].map((item, index) => {
          return (
            <Slide
              index={0}
              key={index}
              style={{
                minHeight: "400px",
                px: 10,
              }}
            >
              {item}
            </Slide>
          );
        })}
      </Slider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& .carousel__dot": {
            backgroundColor: "#c3c4ca",
            border: "1px",
            width: "9px",
            height: "9px",
            margin: "0px 4px",
            padding: "0px",
            borderRadius: "50%",
          },
          "& .carousel__dot--selected": {
            width: "20px",
            height: "8px",
            borderRadius: "10px",
            backgroundColor: "#6267a1",
          },
        }}
      >
        {/* <ButtonBack
          style={{ border: "none", background: "none", padding: "11px 20px" }}
        >
          <ArrowBackIosIcon fontSize="small" sx={{ color: "#6267a1" }} />
        </ButtonBack> */}
        <DotGroup
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        />
        {/* <ButtonNext
          style={{ border: "none", background: "none", padding: "11px 20px" }}
        >
          <ArrowForwardIosIcon fontSize="small" sx={{ color: "#6267a1" }} />
        </ButtonNext> */}
      </Box>
    </CarouselProvider>
  );
};

export default Hero;
