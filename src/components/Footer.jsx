import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-line"></div>

      {/* LINKS */}
      <div className="footer-links">

        <div className="footer-col">
          <a href="#">Accolades</a>
          <a href="#">About Us</a>
          <a href="#">Blogs</a>
          <a href="#">NRI Corner</a>
        </div>

        <div className="footer-col">
          <a href="#">Get In Touch</a>
          <a href="#">Careers</a>
          <a href="#">Residential Projects</a>
          <a href="#">Commercial Projects</a>
        </div>

        <div className="footer-col">
          <a href="#">Channel Partner</a>
          <a href="#">Currency Calculator</a>
          <a href="#">EMI Calculator</a>
          <a href="#">Vendor Registration</a>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="footer-social">
        <span>Follow us on :</span>

        <div className="icons">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-bottom-line"></div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Disclaimer</span>
        <span>|</span>
        <span>All rights reserved by SNS GROUP</span>
      </div>

    </footer>
  );
}

export default Footer;