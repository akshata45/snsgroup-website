import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const NRICorner = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [amount, setAmount] = useState(10000000);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    const keyMap = {
      from_name: "name",
      from_email: "email",
      phone: "phone",
      project_name: "project",
      message: "message",
    };

    setForm({
      ...form,
      [keyMap[e.target.name]]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3r5s1p",
        "template_v931h27",
        formRef.current,
        "AjSolrByjuK-GsN6g",
      )
      .then(
        () => {
          setSuccess(true);

          setForm({
            name: "",
            phone: "",
            email: "",
            project: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send enquiry");
        },
      );
  };

  const [success, setSuccess] = useState(false);

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
  useEffect(() => {
    const rates = {
      INR: {
        USD: 0.012,
        AED: 0.044,
        GBP: 0.0095,
        EUR: 0.011,
        INR: 1,
      },

      USD: {
        INR: 83,
        AED: 3.67,
        GBP: 0.79,
        EUR: 0.92,
        USD: 1,
      },

      AED: {
        INR: 22.6,
        USD: 0.27,
        GBP: 0.21,
        EUR: 0.25,
        AED: 1,
      },

      GBP: {
        INR: 105,
        USD: 1.27,
        AED: 4.67,
        EUR: 1.17,
        GBP: 1,
      },

      EUR: {
        INR: 90,
        USD: 1.09,
        AED: 4,
        GBP: 0.85,
        EUR: 1,
      },
    };

    const result = amount * rates[fromCurrency][toCurrency];

    setConvertedAmount(
      result.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      }),
    );
  }, [amount, fromCurrency, toCurrency]);

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
                  HEARTS SINCE 2019
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

      {/* CURRENCY CALCULATOR */}

      <div
        style={{
          background:
            "linear-gradient(180deg, #f8f5ef 0%, #f4efe6 50%, #f8f5ef 100%)",
          padding: window.innerWidth < 768 ? "45px 16px" : "80px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* LEFT CURVE */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "-200px",
              bottom: "-180px",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              border: "1px solid rgba(184,138,42,0.08)",
            }}
          />
        )}

        {/* RIGHT CURVE */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: "-150px",
              top: "-150px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              border: "1px solid rgba(184,138,42,0.08)",
            }}
          />
        )}

        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(12px)",
            borderRadius: isMobile ? "22px" : "30px",
            padding: isMobile ? "28px 20px" : "60px",
            boxShadow:
              "0 15px 50px rgba(0,0,0,0.05), 0 5px 20px rgba(184,138,42,0.08)",
            border: "1px solid rgba(184,138,42,0.10)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* TOP GOLD CIRCLE */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "-80px" : "-120px",
              right: isMobile ? "-80px" : "-120px",
              width: isMobile ? "180px" : "280px",
              height: isMobile ? "180px" : "280px",
              borderRadius: "50%",
              background: "rgba(212,175,55,0.10)",
            }}
          />

          {/* CONTENT */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "40px" : "60px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* LEFT SIDE */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: isMobile ? "11px" : "13px",
                  letterSpacing: isMobile ? "3px" : "4px",
                  color: "#b88a2a",
                  marginBottom: "18px",
                  fontWeight: "600",
                }}
              >
                GLOBAL INVESTMENT TOOL
              </p>

              <h2
                style={{
                  fontSize: isMobile ? "42px" : "62px",
                  lineHeight: isMobile ? "1.1" : "1.05",
                  color: "#2f2f2f",
                  fontWeight: "300",
                  marginBottom: "18px",
                  letterSpacing: isMobile ? "-1px" : "2px",
                }}
              >
                Currency <br />
                Calculator
              </h2>

              <div
                style={{
                  width: isMobile ? "70px" : "90px",
                  height: "2px",
                  background: "linear-gradient(to right, #b88a2a, #d4af37)",
                  marginBottom: "24px",
                }}
              />

              <p
                style={{
                  fontSize: isMobile ? "15px" : "18px",
                  lineHeight: isMobile ? "1.9" : "2",
                  color: "#6d6d6d",
                  maxWidth: "500px",
                  fontWeight: "300",
                }}
              >
                Instantly estimate your investment value across international
                currencies for smarter NRI real estate planning.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ flex: 1 }}>
              {/* INPUTS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: isMobile ? "16px" : "18px",
                  marginBottom: "20px",
                }}
              >
                {/* AMOUNT */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      color: "#8d857d",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      fontWeight: "600",
                    }}
                  >
                    INVESTMENT AMOUNT
                  </label>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: isMobile ? "58px" : "65px",
                      background: "#fffdfa",
                      border: "1px solid #eadfcf",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      style={{
                        flex: 1,
                        height: "100%",
                        border: "none",
                        background: "transparent",
                        padding: isMobile ? "0 16px" : "0 22px",
                        fontSize: isMobile ? "17px" : "20px",
                        color: "#2f2f2f",
                        outline: "none",
                        fontWeight: "400",
                        minWidth: 0,
                      }}
                    />

                    <div
                      style={{
                        width: isMobile ? "60px" : "70px",
                        height: "100%",
                        background: "#f8f1e4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#b88a2a",
                        fontSize: isMobile ? "24px" : "28px",
                        fontWeight: "500",
                      }}
                    >
                      ₹
                    </div>
                  </div>
                </div>

                {/* FROM */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      color: "#8d857d",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      fontWeight: "600",
                    }}
                  >
                    FROM
                  </label>

                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    style={{
                      width: "100%",
                      height: isMobile ? "58px" : "65px",
                      border: "1px solid #eadfcf",
                      borderRadius: "16px",
                      padding: "0 16px",
                      background: "#fffdfa",
                      fontSize: isMobile ? "15px" : "17px",
                      color: "#2f2f2f",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="INR">🇮🇳 INR</option>
                    <option value="USD">🇺🇸 USD</option>
                    <option value="AED">🇦🇪 AED</option>
                    <option value="GBP">🇬🇧 GBP</option>
                    <option value="EUR">🇪🇺 EUR</option>
                  </select>
                </div>

                {/* TO */}
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      color: "#8d857d",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      fontWeight: "600",
                    }}
                  >
                    TO
                  </label>

                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    style={{
                      width: "100%",
                      height: isMobile ? "58px" : "65px",
                      border: "1px solid #eadfcf",
                      borderRadius: "16px",
                      padding: "0 16px",
                      background: "#fffdfa",
                      fontSize: isMobile ? "15px" : "17px",
                      color: "#2f2f2f",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="USD">🇺🇸 USD</option>
                    <option value="AED">🇦🇪 AED</option>
                    <option value="GBP">🇬🇧 GBP</option>
                    <option value="EUR">🇪🇺 EUR</option>
                    <option value="INR">🇮🇳 INR</option>
                  </select>
                </div>
              </div>

              {/* RESULT CARD */}
              <div
                style={{
                  marginTop: "28px",
                  background:
                    "linear-gradient(135deg, #fcfaf5 0%, #f5ecda 100%)",
                  border: "1px solid rgba(184,138,42,0.18)",
                  borderRadius: isMobile ? "18px" : "24px",
                  padding: isMobile ? "24px" : "35px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* GOLD BAR */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "5px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #b88a2a, #d4af37)",
                  }}
                />

                <p
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    letterSpacing: "2px",
                    color: "#8c857d",
                    marginBottom: "16px",
                  }}
                >
                  ESTIMATED CONVERSION VALUE
                </p>

                <h1
                  style={{
                    fontSize: isMobile ? "42px" : "72px",
                    color: "#1f1f1f",
                    margin: 0,
                    fontWeight: "300",
                    lineHeight: "1",
                    letterSpacing: isMobile ? "-1px" : "-2px",
                    wordBreak: "break-word",
                  }}
                >
                  {convertedAmount}
                </h1>

                <p
                  style={{
                    marginTop: "14px",
                    fontSize: isMobile ? "18px" : "24px",
                    color: "#b88a2a",
                    fontWeight: "500",
                    letterSpacing: "1px",
                  }}
                >
                  {toCurrency}
                </p>
              </div>

              {/* FOOTNOTE */}
              <p
                style={{
                  marginTop: "16px",
                  color: "#9d958d",
                  fontSize: isMobile ? "11px" : "14px",
                  lineHeight: "1.8",
                }}
              >
                *Indicative exchange values intended for investment estimation
                purposes only.
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
          background: "#f5f1e8",
          padding: isMobile ? "50px 16px" : "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "24px",
            padding: isMobile ? "30px 20px" : "60px",
            boxShadow: "0 15px 45px rgba(0,0,0,0.08)",
            border: "1px solid #ece7dc",
          }}
        >
          {/* AUTOFILL FIX */}
          <style>
            {`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #000 !important;
          -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
          box-shadow: 0 0 0px 1000px #ffffff inset !important;
          transition: background-color 5000s ease-in-out 0s;
          caret-color: #000 !important;
        }

        input,
        textarea {
          background: #ffffff !important;
          color: #000000 !important;
        }

        input::placeholder,
        textarea::placeholder {
          color: #8b8b8b;
        }
      `}
          </style>

          {/* HEADING */}
          <div style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: isMobile ? "28px" : "40px",
                color: "#2f2f2f",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              Connect With Our NRI Team
            </h2>

            <div
              style={{
                width: "70px",
                height: "3px",
                background: "#b88a2a",
                marginBottom: "18px",
              }}
            />

            <p
              style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "1.8",
                maxWidth: "650px",
              }}
            >
              Share your details and our dedicated relationship manager will
              contact you shortly regarding investment opportunities and project
              assistance.
            </p>
          </div>

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "28px",
            }}
          >
            <input type="hidden" name="form_type" value="NRI Inquiry" />

            {[
              {
                inputName: "from_name",
                stateName: "name",
                label: "Full Name",
              },
              {
                inputName: "phone",
                stateName: "phone",
                label: "Mobile Number",
              },
              {
                inputName: "from_email",
                stateName: "email",
                label: "Email Address",
              },
              {
                inputName: "project_name",
                stateName: "project",
                label: "Interested Project",
              },
            ].map((field) => (
              <div
                key={field.inputName}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label
                  style={{
                    fontSize: "15px",
                    color: "#2f2f2f",
                    fontWeight: "500",
                  }}
                >
                  {field.label}
                </label>

                <input
                  type="text"
                  name={field.inputName}
                  value={form[field.stateName]}
                  onChange={handleChange}
                  required={
                    field.stateName === "name" || field.stateName === "phone"
                  }
                  style={{
                    width: "100%",
                    height: "58px",
                    padding: "0 18px",
                    borderRadius: "14px",
                    border: "1px solid #d8d8d8",
                    background: "#ffffff",
                    fontSize: "16px",
                    color: "#000000",
                    fontWeight: "500",
                    outline: "none",
                    transition: "0.3s ease",
                    boxSizing: "border-box",
                    caretColor: "#000",
                    WebkitTextFillColor: "#000",
                    appearance: "none",
                    WebkitAppearance: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid #b88a2a";
                    e.target.style.boxShadow =
                      "0 0 0 3px rgba(184,138,42,0.10)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid #d8d8d8";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}

            {/* MESSAGE */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "15px",
                  color: "#2f2f2f",
                  fontWeight: "500",
                }}
              >
                Your Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your requirements..."
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: "16px",
                  border: "1px solid #d8d8d8",
                  background: "#ffffff",
                  fontSize: "16px",
                  color: "#000000",
                  fontWeight: "500",
                  resize: "none",
                  outline: "none",
                  lineHeight: "1.7",
                  boxSizing: "border-box",
                  transition: "0.3s ease",
                  caretColor: "#000",
                  WebkitTextFillColor: "#000",
                  appearance: "none",
                  WebkitAppearance: "none",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid #b88a2a";
                  e.target.style.boxShadow = "0 0 0 3px rgba(184,138,42,0.10)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid #d8d8d8";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* BUTTON */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                  color: "#fff",
                  border: "none",
                  padding: isMobile ? "16px 34px" : "18px 46px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  letterSpacing: "1px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "0.35s ease",
                  boxShadow: "0 15px 35px rgba(184,138,42,0.25)",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                }}
              >
                SUBMIT ENQUIRY
              </button>
            </div>
          </form>

          {/* SUCCESS MESSAGE */}
          {/* SUCCESS POPUP */}
          {/* SUCCESS POPUP */}
          {success && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: isMobile ? "20px" : "30px",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  width: "100%",
                  maxWidth: isMobile ? "100%" : "420px",
                  borderRadius: isMobile ? "22px" : "26px",
                  padding: isMobile ? "32px 22px" : "45px",
                  textAlign: "center",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
                  animation: "popupFade 0.35s ease",
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: isMobile ? "72px" : "85px",
                    height: isMobile ? "72px" : "85px",
                    margin: "0 auto 22px",
                    borderRadius: "50%",
                    background: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? "36px" : "42px",
                  }}
                >
                  ✅
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    fontSize: isMobile ? "24px" : "32px",
                    color: "#111827",
                    marginBottom: "14px",
                    fontWeight: "600",
                    lineHeight: "1.3",
                  }}
                >
                  Form Submitted Successfully
                </h3>

                {/* TEXT */}
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.8",
                    fontSize: isMobile ? "14px" : "15px",
                    marginBottom: "28px",
                    padding: isMobile ? "0 4px" : "0",
                  }}
                >
                  Thank you for contacting us. Our team will connect with you
                  shortly.
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setSuccess(false)}
                  style={{
                    background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                    color: "#fff",
                    border: "none",
                    width: isMobile ? "100%" : "auto",
                    padding: isMobile ? "15px 20px" : "14px 36px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    fontSize: isMobile ? "14px" : "15px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    transition: "0.3s ease",
                    boxShadow: "0 15px 35px rgba(184,138,42,0.25)",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NRICorner;
