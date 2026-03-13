import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">SNS GROUP</div>

      <div className="nav-links">
        <Link to="/">ABOUT US</Link>
        <Link to="/">OUR PROJECTS</Link>
        <Link to="/">OUR INITIATIVES</Link>
        <Link to="/">BUYER'S GUIDE</Link>
        <Link to="/">JOIN SNS GROUP</Link>
      </div>

      <div className="icons">
        ☀️ 📞 👤 ☰
      </div>
    </div>
  );
}

export default Navbar;