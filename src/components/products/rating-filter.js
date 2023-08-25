import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const RatingFilter = () => {
  return (
    <>
      <Typography>Ratings</Typography>
      <List>
        {[5, 4, 3, 2, 1]?.map((raiting) => (
          <ListItem key={raiting} disableGutters disablePadding>
            <ListItemIcon>
              <Checkbox size="small" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={raiting}
                    readOnly
                    size="small"
                  />
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default RatingFilter;
