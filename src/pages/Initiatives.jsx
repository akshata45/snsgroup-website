import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Initiatives() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sliderRef = useRef(null);

  const visibleCards = isMobile ? 1 : 3;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      title: "CSR",
      subtitle: "Initiatives",
      image: "/csr.jpg",
      path: "/csr",
    },

    {
      title: "K-WORLD",
      subtitle: "Referral Programme",
      image: "/kworld.jpg",
      path: "/kworld",
    },

    {
      title: "EVENTS",
      subtitle: "Organised",
      image: "/events.jpg",
      path: "/events",
    },
  ];

  const nextSlide = () => {
    if (index < cards.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // DRAG SUPPORT
  const startX = useRef(0);
  const isDragging = useRef(false);

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
            overflow: hidden;
            height: 100%;
          }

          * {
            box-sizing: border-box;
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
          paddingTop: isMobile ? "4px" : "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: isMobile ? "14px" : "40px",
            padding: isMobile ? "0 12px" : "0 40px",
            flex: 1,
          }}
        >
          {/* DESKTOP LEFT */}
          {!isMobile && (
            <div style={{ width: "220px", paddingTop: "65px" }}>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#b68d2c",
                  lineHeight: "1.6",
                }}
              >
                WITH A STRONG FOCUS ON INNOVATION, WE BUILD THRIVING COMMUNITIES
              </h2>

              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#b68d2c",
                  margin: "10px 0",
                }}
              />

              <p style={{ fontSize: "17.5px", color: "#666" }}>
                Have a look at all our initiatives.
              </p>
            </div>
          )}

          {/* RIGHT */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden", // ✅ IMPORTANT FIX
            }}
          >
            {/* MOBILE OVERLAY */}
            {isMobile && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: "90px",
                    left: "50%",

                    transform: showOverlay
                      ? "translate(-50%, 0)"
                      : "translate(120%, 0)",

                    width: "88%",
                    background: "#fff",
                    borderRadius: "18px",
                    padding: "18px",
                    zIndex: 10,

                    transition: "transform 0.4s ease",

                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* CLOSE BUTTON */}
                  <div
                    onClick={() => setShowOverlay(false)}
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "14px",

                      width: "34px",
                      height: "34px",

                      background: "#b68d2c",
                      borderRadius: "50%",

                      color: "#fff",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      cursor: "pointer",

                      fontSize: "18px",
                    }}
                  >
                    ×
                  </div>

                  <h3
                    style={{
                      color: "#b68d2c",
                      margin: 0,
                      fontSize: "18px",
                      lineHeight: "1.4",
                    }}
                  >
                    BUILDING TODAY, SHAPING TOMORROW.
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#555",
                      marginTop: "10px",
                      lineHeight: "1.5",
                    }}
                  >
                    Have a look at all our initiatives.
                  </p>
                </div>

                {!showOverlay && (
                  <div
                    onClick={() => setShowOverlay(true)}
                    style={{
                      position: "fixed",
                      top: "24%",
                      right: "0",
                      transform: "translateY(-50%)",

                      zIndex: 9999,

                      background: "#b68d2c",
                      color: "#fff",

                      width: "40px",
                      height: "40px",

                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      cursor: "pointer",

                      boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                    }}
                  >
                    ℹ
                  </div>
                )}
              </>
            )}

            {/* SLIDER */}
            <div
              ref={sliderRef}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseUp={(e) => handleEnd(e.clientX)}
              onMouseLeave={(e) => handleEnd(e.clientX)}
              style={{
                overflow: "hidden",
                width: "100%",
                height: isMobile
                  ? "calc(100dvh - 150px)"
                  : "calc(100vh - 120px)",

                cursor: "grab",
              }}
            >
              <div
                style={{
                  display: "flex",

                  gap: isMobile ? "14px" : "24px",

                  height: "100%",

                  transition: "transform 0.4s ease",

                  transform: isMobile
                    ? `translateX(calc(-${index} * (78vw + 14px)))`
                    : `translateX(calc(-${index} * ((100% - 48px)/3 + 24px)))`,
                }}
              >
                {cards.map((card, i) => {
                  const isHovered = hovered === i;

                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => navigate(card.path)}
                      style={{
                        minWidth: isMobile ? "78vw" : `calc((100% - 48px) / 3)`,

                        height: "100%",

                        display: "flex",
                        flexDirection: "column",

                        cursor: "pointer",

                        transition: "transform 0.3s ease, box-shadow 0.3s ease",

                        transform:
                          !isMobile && isHovered
                            ? "translateX(10px)"
                            : "translateX(0px)",

                        zIndex: isHovered ? 2 : 1,
                      }}
                    >
                      {/* IMAGE */}
                      <div
                        style={{
                          height: isMobile
                            ? "calc(100% - 72px)"
                            : "calc(100% - 100px)",

                          borderRadius: "22px",
                          overflow: "hidden",

                          boxShadow: isHovered
                            ? "0 10px 25px rgba(0,0,0,0.15)"
                            : "none",
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      {/* LABEL */}
                      <div
                        style={{
                          marginTop: isMobile ? "10px" : "18px",
                          background: "#e6dfd2",
                          padding: isMobile ? "10px 14px" : "14px 18px",
                          borderRadius: isMobile ? "6px" : "0",

                          /* 🔥 FIXED HEIGHT */
                          height: isMobile ? "70px" : "100px",
                          minHeight: isMobile ? "70px" : "100px",
                          maxHeight: isMobile ? "70px" : "100px",

                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",

                          overflow: "hidden", // 🔥 prevent expansion
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            fontSize: isMobile ? "18px" : "28px",
                            fontWeight: "800",
                            color: "#a57c1b",
                            lineHeight: "1.2",

                            /* 🔥 LIMIT TEXT */
                            display: "-webkit-box",
                            WebkitLineClamp: 1, // 🔥 single line for consistency
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {card.title}
                        </h3>

                        <p
                          style={{
                            margin: "4px 0 0",
                            fontSize: isMobile ? "12px" : "16px",
                            color: "#555",
                            lineHeight: "1.3",

                            /* 🔥 LIMIT TEXT */
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ✅ MOBILE FIXED ARROWS */}
            {isMobile ? (
              <>
                {/* LEFT */}
                <div
                  onClick={prevSlide}
                  style={{
                    position: "absolute",
                    bottom: "110px",
                    left: "8px",

                    zIndex: 9999,

                    width: "38px",
                    height: "38px",

                    background: "#000",
                    color: "#fff",

                    borderRadius: "50%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: "16px",

                    cursor: "pointer",
                  }}
                >
                  ←
                </div>

                {/* RIGHT */}
                <div
                  onClick={nextSlide}
                  style={{
                    position: "absolute",
                    bottom: "110px",
                    right: "8px",

                    zIndex: 9999,

                    width: "38px",
                    height: "38px",

                    background: "#000",
                    color: "#fff",

                    borderRadius: "50%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: "16px",

                    cursor: "pointer",
                  }}
                >
                  →
                </div>
              </>
            ) : (
              /* DESKTOP ARROWS */
              <div
                style={{
                  position: "absolute",
                  bottom: "110px",
                  left: 0,
                  right: 0,

                  display: "flex",
                  justifyContent: "space-between",

                  pointerEvents: "none",
                }}
              >
                <div
                  onClick={prevSlide}
                  style={{
                    ...navStyle,
                    pointerEvents: "all",
                  }}
                >
                  ←
                </div>

                <div
                  onClick={nextSlide}
                  style={{
                    ...navStyle,
                    pointerEvents: "all",
                  }}
                >
                  →
                </div>
              </div>
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
  fontSize: "18px",
};

export default Initiatives;