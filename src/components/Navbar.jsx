import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark-theme");
    setDarkMode(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <div className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img
          src={
            document.body.classList.contains("dark-theme")
              ? "/snslogo-light.png"
              : "/snslogo-dark.png"
          }
          alt="logo"
        />
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
        <Link to="/BuyersGuide" onClick={() => setMenuOpen(false)}>
          BUYER'S GUIDE
        </Link>
        <Link to="/CreativeShowcase" onClick={() => setMenuOpen(false)}>
          JOIN SNS GROUP
        </Link>
      </div>

      {/* ICONS */}
      <div className="icons">
        <span onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </span>

        <a href="tel:+919999999999">📞</a>
        <Link to="/contactus">👤</Link>

        <span
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
