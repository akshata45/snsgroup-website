import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef(null);

  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const isSwiping = useRef(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark-theme");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;

    touchCurrentX.current = e.touches[0].clientX;
    const deltaX = touchCurrentX.current - touchStartX.current;

    if (deltaX < 0) {
      const translateX = Math.max(deltaX, -300);
      menuRef.current.style.transform = `translateX(${translateX}px)`;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
    const deltaX = touchCurrentX.current - touchStartX.current;

    if (deltaX < -100) setMenuOpen(false);

    menuRef.current.style.transform = "";
  };

  return (
    <>
      <div className="navbar">
        {/* LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src={darkMode ? "/snslogo-light.png" : "/snslogo-dark.png"}
            alt="logo"
          />
        </div>

        {/* NAV LINKS */}
        <div
          ref={menuRef}
          className={`nav-links ${menuOpen ? "active" : ""}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
          <span onClick={toggleTheme} className="icon-wrap">
            <img
              src={darkMode ? "/icons/dark/moon.svg" : "/icons/light/sun.svg"}
              className="nav-icon"
              alt="theme"
            />
          </span>

          <a href="tel:+919999999999" className="icon-wrap">
            <img
              src={
                darkMode ? "/icons/dark/phone1.svg" : "/icons/light/phone.svg"
              }
              className="nav-icon"
              alt="phone"
            />
          </a>

          <Link to="/contactus" className="icon-wrap">
            <img
              src={darkMode ? "/icons/dark/user1.svg" : "/icons/light/user.svg"}
              className="nav-icon"
              alt="user"
            />
          </Link>

          <span
            className="menu-btn icon-wrap"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src={
                menuOpen
                  ? darkMode
                    ? "/icons/dark/close1.svg"
                    : "/icons/light/close.svg"
                  : darkMode
                    ? "/icons/dark/menu1.svg"
                    : "/icons/light/menu.svg"
              }
              className="nav-icon"
              alt="menu"
            />
          </span>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
