import Header from "./components/Header";
import Home from "./page/home";
import About from "./page/About";
import Chefs from './page/Chefs';
import Menu from "./page/Menu";
import { Box } from "@mui/material";
import kitchelab from "./assets/kitchenlab.jpeg";

function App() {
  return (
    <>
      <Home />
      <Header />
      <About />
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Chefs/>
      </Box>
      <Menu />
    </>
  );
}

export default App;
