import Card from "../components/CardChefs.jsx";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";

import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import "../style/About.css";
import "../style/chef.css";

function Chefs() {
 
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
      const target = document.querySelectorAll(".popup");
      target.forEach((el) => observer.observe(el));
      return () => {
        target.forEach((el) => observer.unobserve(el));
      };
    }, []);


  return (
    <>
      <section id="chef" className="p-5">
        <Typography variant="h3" className="text-center text-light fw-bold mb-5">
          CHEFS
        </Typography>
        <Box
         sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
         }}
        >
          <div className="popup card-anim">
            <Card name="HUTSPUT" picture={chef1} />
          </div>
          <div className="popup card-anim">
            <Card name="PAPIL" picture={chef2} />
          </div>
          <div className="popup card-anim">
            <Card name="BULPIN" picture={chef3} />
          </div>

        </Box>
      </section>
    </>
  );
}
export default Chefs;
