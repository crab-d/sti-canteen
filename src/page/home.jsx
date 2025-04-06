import { useState, useEffect } from "react";
import Plate1 from "../assets/plate3.jpg";
import Plate2 from "../assets/plate1.avif";
import "../style/Home.css";

function home() {
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   const SESSION_USERNAME = sessionStorage.getItem("UserName");

  //   sessionStorage.clear();

  //   if (SESSION_USERNAME) {
  //     setName(SESSION_USERNAME);
  //   } else if (SESSION_USERNAME == null) {
  //     const NEW_USERNAME = prompt("ENTER YOUR NAME");

  //     if (NEW_USERNAME) {
  //       setName(NEW_USERNAME);
  //       sessionStorage.setItem("UserName", NEW_USERNAME);
  //     }
  //   }
  // }, []);

  return (
    <>
      <section
        className="container-fluid p-0 p-5 border min-vh-100 align-items-center justify-content-center d-flex bg-grad"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div
          style={{
            transform: "translate(-50%, -100%) scale(0.5) rotate(0deg)",
            zIndex: "1",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <img src={Plate1} className=" img-anim"></img>
        </div>

        <div
          style={{
            transform: "translate(-90%, 0%) scale(0.5) rotate(0deg)",
            zIndex: "1",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <img src={Plate2} className=" img-anim"></img>
        </div>

        <div
          style={{
            transform: "translate(-10%, 0%) scale(0.5) rotate(0deg)",
            zIndex: "1",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <img src={Plate2} className=" img-anim"></img>
        </div>

        <div className="col-12 bg-white d-flex justify-content-center">
          <div style={{ width: "fit-content", scale: "1.4" }}>
            <p
              className="m-0 p-0 text-center"
              style={{
                fontSize: "5rem",
                fontFamily: "fantasy",
                color: "yellow",
                lineHeight: "0.8",
                zIndex: "9",
                position: "relative",
              }}
            >
              STI
            </p>
            <p
              className="m-0 p-0 text-center fs-5"
              style={{ color: "blue", fontWeight: "bold" }}
            >
              CANTEEN
            </p>
            <p className="text-center" style={{ fontStyle: "italic" }}>
              Plan your meals ahead
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default home;
