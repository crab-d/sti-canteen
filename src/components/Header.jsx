import { Stack, Button, AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import "../style/App.css";

function Header() {
  return (
    <>
      {/* <header className=" sticky-top">
            <div className="p-2 bg-light m-0">
            <p className="m-0 color-yellow p-1 fw-bold ms-4 px-3 text-primary rounded shadow-sm" style={{width: "fit-content"}}>STI CANTEEN</p>
            </div>
            <AppBar />
        </header> */}
      <AppBar position="sticky" className="bg-light">
        <Toolbar>
          <Typography
            variant="h6"
            className="bg-warning p-2 m-2 rounded text-primary fw-bold shadow-sm"
          >
            STI EATS
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{
            display: {
              xs: "block",
              sm: "none",
            }
          }}>
            <MenuIcon />
          </IconButton>
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
