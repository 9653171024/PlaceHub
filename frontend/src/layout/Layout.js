import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#020617" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <div
          style={{
            padding: "40px",
            flex: 1,
            background:
              "radial-gradient(circle at center, #020617, #000000)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;