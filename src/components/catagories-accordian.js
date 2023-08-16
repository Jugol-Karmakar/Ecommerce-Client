import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonBase,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CatagoriesAccordian = ({ catagory }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          disableRipple={false}
          sx={{
            p: "8px",
            width: "inherit",
            minHeight: "initial",
            backgroundColor: "#f3f5f9",
            marginBottom: "3px",
            "&:last-of-type": {
              marginBottom: "0",
            },
            transition:
              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

            "& .MuiAccordionSummary-content": {
              m: 0,
              alignItems: "center",
            },

            "& .MuiSvgIcon-root": {
              color: "text.secondary",
              fontSize: "1.5rem",
              transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
            "&:hover": {
              color: "primary.main",
              backgroundColor: "#dbe6fd",

              "& .MuiSvgIcon-root": {
                color: "primary.main",
              },
            },
          }}
        >
          <Box
            sx={{
              mr: "8px",
              "& .MuiSvgIcon-root": {
                transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                color: "text.secondary",
                fontSize: "1.5rem",
              },
            }}
          >
            {catagory && catagory?.icon && catagory?.icon}
          </Box>
          <Typography sx={{}}>{catagory?.name}</Typography>
        </AccordionSummary>

        {catagory?.subCategories.map((subcatagory) => (
          <AccordionDetails key={subcatagory?.id} sx={{ p: 0 }}>
            <ButtonBase>
              <Box
                sx={{
                  ml: 5,
                  mr: 1.3,
                  backgroundColor: "#7d879c",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  height: 4,
                  width: 4,
                  borderRadius: 4,
                }}
              ></Box>
              <Typography>{subcatagory.name}</Typography>
            </ButtonBase>
          </AccordionDetails>
        ))}
      </Accordion>
    </div>
  );
};

export default CatagoriesAccordian;
