import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #fdfcf9, #f5f1e8)",
        color: "#2b2b2b",
        padding: "100px 6% 50px",
        fontFamily: "'Playfair Display', serif",
        position: "relative",
      }}
    >
      {/* TOP GOLD LINE */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #d6b25e, transparent)",
          marginBottom: "70px",
        }}
      ></div>

      {/* MAIN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // desktop fixed
          gap: "50px",
          marginBottom: "70px",
        }}
      >
        {[
          ["Accolades", "About Us", "Blogs", "NRI Corner"],
          [
            "Get In Touch",
            "Careers",
            "Residential Projects",
            "Commercial Projects",
          ],
          [
            "Channel Partner",
            "Currency Calculator",
            "EMI Calculator",
            "Vendor Registration",
          ],
        ].map((col, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {col.map((item, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#6d6d6d",
                  fontSize: "15px",
                  letterSpacing: "0.6px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#c6a75e";
                  e.target.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#6d6d6d";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* SOCIAL + CTA */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "60px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              color: "#c6a75e",
              marginBottom: "8px",
            }}
          >
            CONNECT WITH US
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#2b2b2b",
            }}
          >
            Experience Luxury Living
          </div>
        </div>

        {/* ICONS */}
        <div style={{ display: "flex", gap: "16px" }}>
          {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
            (Icon, i) => (
              <div
                key={i}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(198,167,94,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c6a75e";
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(198,167,94,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon size={15} />
              </div>
            ),
          )}
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          height: "1px",
          background: "rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      ></div>

      {/* BOTTOM */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "13px",
          color: "#7a7a7a",
          letterSpacing: "0.5px",
        }}
      >
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span>|</span>
          <span style={{ cursor: "pointer" }}>Disclaimer</span>
        </div>

        <span style={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} SNS GROUP — Crafted with Excellence
        </span>
      </div>

      {/* ✅ MOBILE RESPONSIVE (2 COLUMN FORCE) */}
      <style>{`
        @media (max-width: 992px) {
          footer div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 480px) {
          footer div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
