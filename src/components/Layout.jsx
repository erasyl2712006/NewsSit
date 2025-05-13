import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar isOpen={sidebarOpen} />
      <div style={{ marginLeft: sidebarOpen ? 220 : 0, flex: 1, transition: "margin 0.3s" }}>
        <header
          style={{
            background: "#f5f5f5",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>My News Site</div>
          <button
            onClick={toggleSidebar}
            style={{
              padding: "8px 12px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {sidebarOpen ? "Скрыть меню" : "☰ Меню"}
          </button>
        </header>

        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
