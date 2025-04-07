import { Box } from "@mui/material";

function About() {
  return (
    <section className="min-vh-100 bg-light" id="about">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            flex: 1,
            height: "100%",
          }}
        />

        <Box
          sx={{
            border: "1px solid",
            flex: 1,
            height: "100%",
            display: {
                xs: "none",
                sm: "block"
            }
          }}
        />
      </Box>
    </section>
  );
}

export default About;
