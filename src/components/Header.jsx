import { Stack, Button, AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import "../style/App.css";
import Drawer from "./SidePanel";

function Header() {
  return (
    <>
      
      <AppBar position="sticky" className="bg-light">
        <Toolbar>
          <Typography
            variant="h6"
            className="bg-warning p-2 m-2 rounded text-primary fw-bold shadow-sm"
          >
            STI EATS
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Drawer />
          <Stack direction="row" spacing={0} sx={{
            display: {
              xs: "none",
              sm: "block",
            }
          }}>
            <Button variant="text" href="#" component="a">
              Home
            </Button>
            <Button variant="text" href="#about" component="a">
              About
            </Button>
            <Button variant="text" href="#" component="a">
              Chefs
            </Button>
            <Button variant="text" href="#" component="a">
              Menu
            </Button>
            <Button variant="text" href="#" component="a">
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
