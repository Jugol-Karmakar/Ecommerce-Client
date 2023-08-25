import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const OthersFilter = () => {
  const others = [
    { id: 1, name: "On Sale" },
    {
      id: 2,
      name: "In Stock",
    },
    {
      id: 3,
      name: "Featured",
    },
  ];
  return (
    <>
      <List>
        {others.map((brandItem) => (
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

export default OthersFilter;
