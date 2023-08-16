import React from "react";
import { ShoppingBagOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";

const groups = ["Dashboard", "Account Settings"];
const items = [
  {
    name: "Orders",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
  },
  {
    name: "WishList",
    icon: FavoriteBorderOutlinedIcon,
    group: "Dashboard",
  },
  {
    name: "Support Tickets",
    icon: HeadsetMicOutlinedIcon,
    group: "Dashboard",
  },
  {
    name: "Profile Info",
    icon: PersonOutlinedIcon,
    group: "Account Settings",
  },
];

const ProfileSidebar = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Paper
            elevation={2}
            sx={{
              paddingBottom: "1.5rem",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <List
              dense
              disablePadding
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              subheader={<li />}
            >
              {groups.map((sectionId) => (
                <li key={`section-${sectionId}`}>
                  <Box component="ul" sx={{ mb: 2, p: 0 }}>
                    <ListSubheader
                      sx={{
                        fontWeight: 400,
                        textTransform: "uppercase",
                        fontSize: 13,
                      }}
                    >
                      {sectionId}
                    </ListSubheader>
                    {items
                      .filter((val) => val.group === sectionId)
                      .map((item) => (
                        <ListItem key={`item-${sectionId}-${item.name}`}>
                          <ListItemIcon
                            sx={{
                              minWidth: 30,
                            }}
                          >
                            <item.icon />
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                        </ListItem>
                      ))}
                  </Box>
                </li>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item md={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileSidebar;
