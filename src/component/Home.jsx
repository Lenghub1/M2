import React, { useEffect } from "react";
import "@material/button/dist/mdc.button.css";
import Textfield from "./Textfield";
import Textfields from "./Textfield2";
const Home = () => {
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Box shadow added
        padding: "20px",
        borderRadius: "20px",
        width: "400px",
      }}
    >
      <h2>Login</h2>
      <Textfield name={"username"} />
      <Textfields />
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button className="mdc-button mdc-button--raised" style={buttonStyle}>
          <span className="mdc-button__label">Login</span>
        </button>
        <button className="mdc-button mdc-button--raised" style={buttonStyle}>
          <span className="mdc-button__label">Sign up</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
