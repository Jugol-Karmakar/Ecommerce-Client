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

const CatagoryFilter = () => {
  const catagories = [
    { id: 1, name: "Electronics" },
    {
      id: 2,
      name: "Fashion",
    },
    {
      id: 3,
      name: "Sport",
    },
  ];

  return (
    <>
      <List>
        {catagories.map((listItem) => (
          <ListItem key={listItem.id} disableGutters disablePadding>
            <ListItemIcon>
              <Checkbox size="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography>{listItem.name}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CatagoryFilter;
