import React from "react";

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "230px",
        width: "calc(100% - 230px)",
        height: "65px",
        background: "linear-gradient(90deg,#020617,#0f172a)",
        display: "flex",
        alignItems: "center",
        paddingLeft: "30px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        zIndex: 1000
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#a78bfa",
          fontWeight: "600",
          letterSpacing: "0.5px"
        }}
      >
        PlaceHub - Placement Analytics Dashboard
      </h2>
    </div>
  );
}

export default Navbar;