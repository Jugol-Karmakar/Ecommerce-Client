import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const BrandFilter = () => {
  const brands = [
    { id: 1, name: "Apple" },
    {
      id: 2,
      name: "Samsung",
    },
    {
      id: 3,
      name: "Addidas",
    },
  ];
  return (
    <>
      <Typography sx={{ fontSize: 16, fontWeight: 600 }}>Brands</Typography>
      <List>
        {brands.map((brandItem) => (
          <ListItem key={brandItem.id} disableGutters disablePadding>
            <ListItemIcon>
              <Checkbox size="small" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<Typography>{brandItem.name}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BrandFilter;
