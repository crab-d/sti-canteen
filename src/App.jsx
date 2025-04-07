import Header from "./components/Header";
import Home from "./page/home";
import About from "./page/About";
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
          padding: "100px",
        }}
      >
        
      </Box>
    </>
  );
}

export default App;
