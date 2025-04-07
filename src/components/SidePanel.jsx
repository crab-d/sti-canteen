import { Drawer, Box, Typography, IconButton, Button, Stack } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function SidePanel() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" >
          <Stack direction="column" spacing={2}>
          <Button variant="text" component="a" href="#">
            HOME
          </Button>
          <Button variant="text" component="a" href="#about">
            ABOUT
          </Button>
          <Button variant="text" component="a" href="#chef">
            CHEF
          </Button>
          <Button variant="text" component="a" href="#menu">
            MENU
          </Button>
          <Button variant="text" component="a" href="#contact">
            CONTACT
          </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default SidePanel;
