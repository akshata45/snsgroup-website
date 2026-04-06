import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ REQUIRED
  const navigate = useNavigate();

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/snslogo.png" alt="logo" />
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/story" onClick={() => setMenuOpen(false)}>
          ABOUT US
        </Link>
        <Link to="/journey" onClick={() => setMenuOpen(false)}>
          OUR PROJECTS
        </Link>
        <Link to="/initiatives" onClick={() => setMenuOpen(false)}>
          OUR INITIATIVES
        </Link>
        <Link to="/BuyersGuide" onClick={() => setMenuOpen(false)}>BUYER'S GUIDE</Link>
        <Link to="/CreativeShowcase" onClick={() => setMenuOpen(false)}>JOIN SNS GROUP</Link>
      </div>

      {/* ICONS */}
      <div className="icons">
        <span onClick={toggleTheme}>{darkMode ? "🌙" : "☀️"}</span>

        <a href="tel:+919999999999">📞</a>
        <Link to="/login">👤</Link>

        {/* ✅ MENU BUTTON */}
        <span className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
