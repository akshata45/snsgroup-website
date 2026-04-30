import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function BuyersGuide() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showOverlay, setShowOverlay] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      title: "HOME BUYER’S",
      subtitle: "Hub",
      image: "/homebuyers.jpg",
      path: "/currency-calculator",
    },
    {
      title: "NRI",
      subtitle: "Corner",
      image: "/nri.jpg",
      path: "/nri",
    },
  ];

  const visibleCards = isMobile ? 1 : 2;

  const nextSlide = () => {
    if (index < cards.length - visibleCards) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleEnd = (x) => {
    if (!isDragging.current) return;

    const diff = startX.current - x;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    isDragging.current = false;
  };

  return (
    <>
      <Navbar />

      <style>
        {`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
        }

        #root {
          height: 100%;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        div::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>

      <div
        style={{
          background: "#f5f2ec",
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          paddingTop: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: isMobile ? "20px" : "40px",
            padding: isMobile ? "0 16px" : "0 60px",
            flex: 1,
          }}
        >
          {!isMobile && (
            <div style={{ width: "260px", paddingTop: "80px" }}>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#b68d2c",
                  lineHeight: "1.5",
                }}
              >
                THIS IS HOW YOUR HOUSE HUNT GOES!
              </h2>

              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#000",
                  margin: "14px 0",
                }}
              />

              <p style={{ fontSize: "17.5px", color: "#555" }}>
                We help you clear your ifs and buts of home buying.
              </p>
            </div>
          )}

          <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            
            {/* ✅ MOBILE OVERLAY FIXED */}
            {isMobile && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: "90px",

                    left: "16px",
                    right: "16px",

                    transform: showOverlay
                      ? "translateX(0)"
                      : "translateX(120%)",

                    background: "#fff",
                    borderRadius: "18px",
                    padding: "18px",
                    zIndex: 10,

                    transition: "transform 0.4s ease",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    onClick={() => setShowOverlay(false)}
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "15px",
                      width: "35px",
                      height: "35px",
                      background: "#b68d2c",
                      borderRadius: "50%",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </div>

                  <h3 style={{ color: "#b68d2c", margin: 0 }}>
                    THIS IS HOW YOUR HOUSE HUNT GOES!
                  </h3>

                  <p style={{ fontSize: "13px", color: "#555" }}>
                    We help you clear your ifs and buts of home buying.
                  </p>
                </div>

                {!showOverlay && (
                  <div
                    onClick={() => setShowOverlay(true)}
                    style={{
                      position: "fixed",
                      right: "0",
                      top: "25%",
                      zIndex: 10000,
                      background: "#b68d2c",
                      color: "#fff",
                      width: "42px",
                      height: "42px",
                      borderTopLeftRadius: "22px",
                      borderBottomLeftRadius: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    ℹ
                  </div>
                )}
              </>
            )}

            {/* SLIDER */}
            <div
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              style={{
                overflow: isMobile ? "visible" : "hidden",
                height: isMobile
                  ? "calc(100dvh - 220px)"
                  : "calc(100vh - 140px)",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "28px",
                  transition: "transform 0.4s ease",
                  transform: isMobile
                    ? `translateX(-${index * 86}vw)`
                    : `translateX(calc(-${index} * ((100% - 28px)/2 + 28px)))`,
                }}
              >
                {cards.map((card, i) => (
                  <div
                    key={i}
                    onClick={() => navigate(card.path)}
                    style={{
                      minWidth: isMobile ? "82vw" : "32%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        height: isMobile
                          ? "calc(100% - 80px)"
                          : "calc(100% - 100px)",
                        borderRadius: "22px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={card.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        marginTop: isMobile ? "10px" : "18px",
                        background: "#e6dfd2",
                        padding: isMobile ? "12px 14px" : "14px 18px",
                        borderRadius: isMobile ? "6px" : "0",

                        height: isMobile ? "70px" : "100px",
                        minHeight: isMobile ? "70px" : "100px",
                        maxHeight: isMobile ? "70px" : "100px",

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: isMobile
                            ? "clamp(23px, 3vw, 25px)"
                            : "clamp(18px, 3.5vw, 30px)",
                          fontWeight: "800",
                          color: "#a57c1b",
                          lineHeight: "1.15",
                        }}
                      >
                        {card.title}
                      </h3>

                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: isMobile
                            ? "clamp(15px, 2.5vw, 20px)"
                            : "clamp(14px, 2.8vw, 17.5px)",
                          color: "#444",
                        }}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE ARROWS */}
            {isMobile && (
              <>
                <div
                  onClick={prevSlide}
                  style={{
                    position: "fixed",
                    bottom: "90px",
                    left: "12px",
                    zIndex: 99999,
                    width: "42px",
                    height: "42px",
                    background: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ←
                </div>

                <div
                  onClick={nextSlide}
                  style={{
                    position: "fixed",
                    bottom: "90px",
                    right: "12px",
                    zIndex: 99999,
                    width: "42px",
                    height: "42px",
                    background: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  →
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const navStyle = {
  width: "48px",
  height: "48px",
  background: "#000",
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export default BuyersGuide;
