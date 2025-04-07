import { Box } from "@mui/material";
import canteen from "../assets/canteen.jpg";
import CardAbout from "../components/CardAbout.jsx";
import { useEffect } from "react";
import "../style/About.css"
const Popup = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const popup = document.querySelectorAll(".popup");
    popup.forEach((el) => observer.observe(el));

    return () => {
      popup.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-vh-100 bg-light" id="about">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          height: "auto"
        }}
      >
        <Box
          sx={{
      
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden"
          }}
        >
          <div className="popup m-2 mb-1">
            <CardAbout
              title="What is STI Eats?"
              subtitle="STI EATS IS A WEB BASED APPLICATION THAT PROVIDES A PLATFORM FOR STUDENTS TO ORDER FOOD FROM CAFETERIA"
            />
          </div>

          <div className="popup m-1">
            <CardAbout
              title="Purpose"
              subtitle="STI EATS IS A WEB BASED APPLICATION THAT PROVIDES A PLATFORM FOR STUDENTS TO ORDER FOOD FROM CAFETERIA"
            />
          </div>

          <div className="popup m-1">
            <CardAbout
              title="Goal"
              subtitle="STI EATS IS A WEB BASED APPLICATION THAT PROVIDES A PLATFORM FOR STUDENTS TO ORDER FOOD FROM CAFETERIA"
            />
          </div>
        </Box>

        <Box
          sx={{

            flex: 1,
            display: "flex",
            alignItems: "stretch"
          }}
        >
          <img
            src={canteen}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%", 
            }}
            alt="Canteen"
          />
        </Box>
      </Box>
    </section>
  );
};

export default Popup;
