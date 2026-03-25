import { Link, useNavigate } from "react-router-dom";  // ✅ add this
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();   // ✅ initialize

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      
      {/* ✅ LOGO CLICK WORKING */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/snslogo.png" alt="logo" />
      </div>

      <div className="nav-links">
        <Link to="/story">ABOUT US</Link>
        <Link to="/journey">OUR PROJECTS</Link>
        <Link to="/initiatives">OUR INITIATIVES</Link>
        <Link to="/">BUYER'S GUIDE</Link>
        <Link to="/">JOIN SNS GROUP</Link>
      </div>

      <div className="icons">
        <span onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </span>

        <a href="tel:+919999999999">📞</a>
        <Link to="/login">👤</Link>
        <span>☰</span>
      </div>

    </div>
  );
}

export default Navbar;