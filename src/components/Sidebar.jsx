import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <nav>
        <Link to="/">🏠 Главная</Link>
        <Link to="/analytics">📊 Аналитика</Link>
        <Link to="/about">ℹ️ О сайте</Link>
        <Link to="/contact">✉️ Контакты</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
