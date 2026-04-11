import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NRICorner = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Resize handler
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#f5f1e8",
          padding: isMobile ? "40px 20px" : "80px 40px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* 🔹 Heading */}
          <div
            style={{
              marginBottom: "50px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
              marginTop: "-20px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                letterSpacing: "2px",
                color: "rgb(198, 167, 94)",
                marginBottom: "10px",
                fontWeight: "800",
              }}
            >
              NRI CORNER
            </h2>

            <div
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(to right, #b88a2a, #d4af37)",
              }}
            />
          </div>

          {/* 🔹 Main Section */}
          <div
            ref={sectionRef}
            style={{
              background: "#d8cfbf",
              padding: isMobile ? "25px" : "70px",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* subtle overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.2), transparent)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: isMobile ? "25px" : "60px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* 📱 Image on top (mobile) */}
              {isMobile && (
                <img
                  src="/gavel.jpg"
                  alt="Bridge"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                />
              )}

              {/* 🔸 TEXT */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: isMobile ? "22px" : "32px",
                    fontWeight: "600",
                    color: "#2f2f2f",
                    lineHeight: "1.5",
                    marginBottom: "20px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s ease 0.2s",
                  }}
                >
                  BUILDING REAL ESTATE AND WINNING <br />
                  HEARTS SINCE 1986
                </h3>

                <div
                  style={{
                    width: "70px",
                    height: "3px",
                    background: "linear-gradient(to right, #b88a2a, #d4af37)",
                    marginBottom: "20px",
                    opacity: visible ? 1 : 0,
                    transition: "all 0.7s ease 0.3s",
                  }}
                />

                <p
                  style={{
                    fontSize: "17px",
                    color: "#555",
                    lineHeight: "1.8",
                    marginBottom: "15px",
                    maxWidth: "550px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s ease 0.4s",
                    textAlign: "justify", // ✅ FIX
                  }}
                >
                  SNS Group is a fast-growing Real Estate developer that has
                  created its niche in the Mumbai real estate market with a
                  strong foothold in the residential space with over 12,000+
                  happy families as well as a trustworthy name in the commercial
                  space.
                </p>

                <p
                  style={{
                    fontSize: "17px",
                    color: "#555",
                    lineHeight: "1.8",
                    maxWidth: "550px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s ease 0.6s",
                  }}
                >
                  We are a team of like-minded people who are passionate about
                  delivering our very best to our customers, partners, and
                  investors. We take pride in the deep foundation of trust we
                  have built with our partners, vendors, and customers.
                </p>
              </div>

              {/* 💻 Image right (desktop) */}
              {!isMobile && (
                <div
                  style={{
                    width: "420px",
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    opacity: visible ? 1 : 0,
                    transition: "all 0.8s ease 0.3s",
                  }}
                >
                  <img
                    src="/gavel.jpg"
                    alt="Bridge"
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f5f1e8",
          padding: "0 20px 80px", // ❗ NO top padding
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* MAIN FLEX */}
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                flex: 1,
              }}
            >
              <img
                src="/highway.jpg" // replace image
                alt="Investment"
                style={{
                  width: "100%",
                  height: window.innerWidth < 768 ? "220px" : "320px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: window.innerWidth < 768 ? "20px" : "28px",
                  fontWeight: "600",
                  color: "#2f2f2f",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                RELIABLE INVESTMENTS WITH <br />
                TREMENDOUS POTENTIAL
              </h3>

              <div
                style={{
                  width: "70px",
                  height: "3px",
                  background: "#b88a2a",
                  marginBottom: "15px",
                }}
              />

              <p
                style={{
                  fontSize: "17px",
                  color: "#555",
                  lineHeight: "1.8",
                  maxWidth: "420px",
                }}
              >
                India is on the cusp of its economic and infrastructural boom
                and Mumbai, being the financial capital of India, is at the
                centre of it.
              </p>
            </div>
          </div>

          {/* STATS BOX */}
          {/* STATS BOX */}
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              marginTop: window.innerWidth < 768 ? "20px" : "-40px",
              marginLeft: window.innerWidth < 768 ? "0" : "200px",
              gap: "2px", // subtle separation
            }}
          >
            {/* CARD 1 */}
            <div
              style={{
                background: "#1c2428",
                color: "#fff",
                padding: "25px",
                minWidth: "200px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              <h4 style={{ color: "#d4af37", fontSize: "20px" }}>1 TRILLION</h4>
              <p style={{ fontSize: "17px" }}>
                USD MARKET <br /> SIZE BY 2030
              </p>
            </div>

            {/* CARD 2 */}
            <div
              style={{
                background: "#2a343a",
                color: "#fff",
                padding: "25px",
                minWidth: "200px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              <h4 style={{ color: "#d4af37", fontSize: "20px" }}>13%</h4>
              <p style={{ fontSize: "17px" }}>
                OF TOTAL GDP <br /> EXPECTED BY 2025
              </p>
            </div>

            {/* CARD 3 */}
            <div
              style={{
                background: "#39454c",
                color: "#fff",
                padding: "25px",
                minWidth: "200px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              <h4 style={{ color: "#d4af37", fontSize: "20px" }}>URBAN</h4>
              <p style={{ fontSize: "17px" }}>
                CITIES OFFER <br /> OPPORTUNITIES FOR REAL ESTATE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f5f1e8",
          padding: "30px 20px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* HEADING */}
          <div style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "24px",
                letterSpacing: "2px",
                color: "#2f2f2f",
                fontWeight: "700",
              }}
            >
              WHAT WE PROMISE
            </h2>

            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#b88a2a",
                marginTop: "10px",
              }}
            />
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth < 768 ? "1fr" : "repeat(3, 1fr)",
              gap: "30px 60px",
            }}
          >
            {[
              "The Promise Of Excellence In Delivery",
              "The Promise Of Simplifying Home Buying",
              "The Promise Of Beauty",
              "The Promise Of A Bright Future",
              "The Promise Of Harmonious Communities",
              "The Promise Of Excellence",
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  cursor: "pointer",
                }}
              >
                {/* ICON CIRCLE */}
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#e8ddc9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#b88a2a",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                  }}
                >
                  ⌘
                </div>

                {/* TEXT */}
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: "1.5",
                    margin: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#2f3a40",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: window.innerWidth < 768 ? "column" : "row",
            alignItems: "center",
            gap: "50px",
          }}
        >
          {/* LEFT IMAGE */}
          <div style={{ flex: 1 }}>
            <img
              src="/map.jpg" // replace with your map image
              alt="Our Presence"
              style={{
                width: "100%",
                height: window.innerWidth < 768 ? "260px" : "420px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1, color: "#fff" }}>
            {/* HEADING */}
            <h3
              style={{
                fontSize: window.innerWidth < 768 ? "24px" : "32px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              OUR PRESENCE
            </h3>

            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#d4af37",
                marginBottom: "20px",
              }}
            />

            {/* TEXT */}
            <p
              style={{
                fontSize: "17px",
                color: "#dcdcdc",
                lineHeight: "1.8",
                marginBottom: "25px",
                maxWidth: "420px",
              }}
            >
              We have been changing the skyline of Mumbai for over 3 decades.
              Today, our humble yet significant contribution to the growth of
              the city stands as testimony to our reliability.
            </p>

            {/* LINKS */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {[
                "All Projects",
                "Residential Projects",
                "Commercial Projects",
                "Upcoming Projects",
              ].map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "17px",
                    color: i === 0 ? "#d4af37" : "#ffffff",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d4af37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      i === 0 ? "#d4af37" : "#ffffff")
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#eeeeee",
            padding: window.innerWidth < 768 ? "30px 20px" : "50px 60px",
            border: "1px solid #dcdcdc",
          }}
        >
          {/* TITLE */}
          <h3
            style={{
              fontSize: "18px",
              color: "#333",
              marginBottom: "30px",
            }}
          >
            Kindly fill details in the form below
          </h3>

          {/* INPUT FIELD STYLE */}
          {[
            { label: "Name *", placeholder: "Enter name" },
            { label: "Email ID*", placeholder: "Enter email id" },
            { label: "Mobile No.*", placeholder: "Enter mobile no." },
          ].map((field, i) => (
            <div key={i} style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "#333",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                {field.label}
              </label>

              <input
                type="text"
                placeholder={field.placeholder}
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: "2px solid #b88a2a",
                  padding: "10px 5px",
                  background: "transparent",
                  outline: "none",
                  fontSize: "16px",
                  color: "#000", // ✅ ADD THIS
                }}
              />
            </div>
          ))}

          {/* TEXTAREA */}
          <div style={{ marginBottom: "35px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                color: "#333",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Comments
            </label>

            <textarea
              rows="3"
              style={{
                width: "100%",
                border: "none",
                borderBottom: "2px solid #b88a2a",
                padding: "10px 5px",
                background: "transparent",
                outline: "none",
                fontSize: "14px",
                resize: "none",
              }}
            />
          </div>

          {/* BUTTON */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "#b88a2a",
                color: "#000",
                padding: "12px 40px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#a67c1f";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#b88a2a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NRICorner;
