import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Partners() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // ✅ RESPONSIVE FIX
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      title: "SNS GROUP",
      subtitle: "",
      image: "/img1.jpg",
      path: "/blogs",
    },
    {
      title: "VENDOR",
      subtitle: "",
      image: "/img2.jpg",
      path: "/vendor-registration",
    },
    {
      title: "CHANNEL PARTNER",
      subtitle: "",
      image: "/img3.jpg",
      path: "/channel-partner",
    },
  ];

  const visibleCards = isMobile ? 2 : 3;

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

  // ✅ SWIPE
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
          html,
          body,
          #root {
            margin: 0;
            padding: 0;
            width: 100%;
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

          body {
            overscroll-behavior: none;
            background: #f5f2ec;
          }
        `}
      </style>

      {/* MAIN CONTAINER */}
      <div
        style={{
          background: "#f5f2ec",

          // ✅ REAL DEVICE FIX
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

            gap: isMobile ? "18px" : "40px",

            padding: isMobile ? "0 14px" : "0 60px",

            flex: 1,

            overflow: "hidden",
          }}
        >
          {/* LEFT CONTENT */}
          {!isMobile && (
            <div
              style={{
                width: "260px",
                paddingTop: "80px",
                flexShrink: 0,
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#b68d2c",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                BUILDING TRUST WITH EVERY MILESTONE.
              </h2>

              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#000",
                  margin: "14px 0",
                }}
              />

              <p
                style={{
                  fontSize: "17.5px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                We are happy to have you associated with us.
              </p>
            </div>
          )}

          {/* RIGHT SIDE */}
          <div
            style={{
              flex: 1,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* MOBILE OVERLAY */}
            {isMobile && (
              <>
                {/* PANEL */}
                <div
                  style={{
                    position: "absolute",

                    top: "90px",
                    left: "50%",

                    transform: showOverlay
                      ? "translate(-50%,0)"
                      : "translate(130%,0)",

                    width: "92%",

                    background: "#fff",

                    borderRadius: "18px",

                    padding: "18px",

                    zIndex: 20,

                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",

                    transition: "transform 0.4s ease",
                  }}
                >
                  {/* CLOSE */}
                  <div
                    onClick={() => setShowOverlay(false)}
                    style={{
                      position: "absolute",

                      top: "-14px",
                      left: "14px",

                      width: "34px",
                      height: "34px",

                      borderRadius: "50%",

                      background: "#b68d2c",
                      color: "#fff",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      fontWeight: "bold",

                      cursor: "pointer",
                    }}
                  >
                    ×
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: "#b68d2c",
                      fontSize: "18px",
                      lineHeight: "1.4",
                    }}
                  >
                    BUILDING TRUST WITH EVERY MILESTONE.
                  </h3>

                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "13px",
                      lineHeight: "1.5",
                      color: "#555",
                    }}
                  >
                    We are happy to have you associated with us.
                  </p>
                </div>

                {/* INFO BUTTON */}
                {!showOverlay && (
                  <div
                    onClick={() => setShowOverlay(true)}
                    style={{
                      position: "fixed",

                      top: "25%",
                      right: "0",

                      transform: "translateY(-50%)",

                      zIndex: 99999,

                      width: "42px",
                      height: "42px",

                      borderTopLeftRadius: "22px",
                      borderBottomLeftRadius: "22px",

                      background: "#b68d2c",
                      color: "#fff",

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
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseUp={(e) => handleEnd(e.clientX)}
              onMouseLeave={(e) => handleEnd(e.clientX)}
              style={{
                overflow: "hidden",

                // ✅ REAL ANDROID FIX
                height: isMobile
                  ? "calc(100dvh - 170px)"
                  : "calc(100vh - 140px)",

                cursor: "grab",

                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",

                  gap: isMobile ? "18px" : "32px",

                  height: "100%",

                  transition: "transform 0.4s ease",

                  transform: `translateX(calc(-${index} * ((100% - ${
                    isMobile ? "18px" : "64px"
                  }) / ${visibleCards} + ${isMobile ? "18px" : "32px"})))`,
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
                        minWidth: isMobile
                          ? `calc((100% - 18px) / ${visibleCards})`
                          : `calc((100% - 64px) / ${visibleCards})`,

                        display: "flex",
                        flexDirection: "column",

                        cursor: "pointer",

                        transition: "transform 0.35s ease",

                        transform:
                          !isMobile && isHovered ? "scaleX(1.05)" : "scaleX(1)",

                        transformOrigin: "left",
                      }}
                    >
                      {/* IMAGE */}
                      <div
                        style={{
                          height: isMobile
                            ? "calc(100% - 85px)"
                            : "calc(100% - 110px)",

                          borderRadius: "22px",

                          overflow: "hidden",
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

                          padding: isMobile ? "10px 12px" : "14px 18px",

                          borderRadius: isMobile ? "14px" : "0",
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,

                            fontSize: isMobile
                              ? "16px"
                              : "clamp(18px, 4vw, 32px)",

                            fontWeight: "800",

                            color: "#a57c1b",

                            lineHeight: "1.2",
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ARROWS */}
            <div
              style={{
                position: isMobile ? "fixed" : "absolute",

                // ✅ MOBILE FIX
                bottom: isMobile ? "22px" : "120px",

                // ✅ DESKTOP ORIGINAL POSITION
                left: isMobile ? 0 : "0",
                right: isMobile ? 0 : "0",

                width: "100%",

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                // ✅ DESKTOP NORMAL
                padding: isMobile ? "0 14px" : "0",

                zIndex: 999999,

                pointerEvents: "none",
              }}
            >
              {/* LEFT */}
              <div
                onClick={prevSlide}
                style={{
                  ...navStyle,
                  pointerEvents: "all",
                }}
              >
                ←
              </div>

              {/* RIGHT */}
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
          </div>
        </div>
      </div>
    </>
  );
}

const navStyle = {
  width: "42px",
  height: "42px",

  minWidth: "42px",

  background: "#000",
  color: "#fff",

  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  cursor: "pointer",

  fontSize: "16px",
  fontWeight: "700",

  flexShrink: 0,

  userSelect: "none",

  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
};

export default Partners;
