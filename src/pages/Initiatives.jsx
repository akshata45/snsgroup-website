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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    { title: "CSR", subtitle: "Initiatives", image: "/csr.jpg", path: "/csr" },
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

  const visibleCards = isMobile ? 2 : 3;

  const nextSlide = () => {
    if (index < cards.length - visibleCards) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  // 🔥 DRAG SUPPORT
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
            {/* 🔥 GLOBAL FIX (NO SCROLL MOBILE) */}
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
          height: "100vh",
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
            padding: isMobile ? "0 16px" : "0 40px",
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
            }}
          >
            {/* MOBILE OVERLAY */}
{isMobile && (
  <>
    {/* 🔥 SLIDING PANEL */}
    <div
      style={{
        position: "absolute",
        top: "110px",
        left: "50%",
        transform: showOverlay
          ? "translate(-50%, 0)"
          : "translate(120%, 0)",

        width: "90%",
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        zIndex: 10,

        transition: "transform 0.4s ease",
      }}
    >
      {/* CLOSE BUTTON */}
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
        BUILDING TODAY, SHAPING TOMORROW.
      </h3>

      <p style={{ fontSize: "14px", color: "#555" }}>
        Have a look at all our initiatives.
      </p>
    </div>

    {/* 🔥 RIGHT SIDE REOPEN BUTTON */}
    {!showOverlay && (
      <div
        onClick={() => setShowOverlay(true)}
        style={{
          position: "absolute",
          top: "130px",   // aligned near panel
          right: "0",
          zIndex: 20,

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
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",

          transition: "all 0.3s ease",
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
                height: "calc(100vh - 120px)",
                cursor: "grab",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  height: "100%",
                  transition: "transform 0.4s ease",
                  transform: `translateX(calc(-${index} * ((100% - ${
                    isMobile ? "24px" : "48px"
                  })/${visibleCards} + 24px)))`,
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
                        minWidth: `calc((100% - ${
                          isMobile ? "24px" : "48px"
                        }) / ${visibleCards})`,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        transform:
                          !isMobile && isHovered
                            ? "translateX(10px)" // 🔥 move right ONLY
                            : "translateX(0px)",
                        zIndex: isHovered ? 2 : 1,
                      }}
                    >
                      {/* IMAGE */}
                      <div
                        style={{
                          height: "calc(100% - 110px)",
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
                          marginTop: "18px",
                          background: "#e6dfd2",
                          padding: "14px 18px",
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            fontSize: isMobile ? "20px" : "32px",
                            fontWeight: "800",
                            color: "#a57c1b",
                          }}
                        >
                          {card.title}
                        </h3>

                        <p
                          style={{
                            margin: 0,
                            fontSize: isMobile ? "14px" : "17.5px",
                            color: "#555",
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

            {/* ARROWS */}
            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "90px" : "110px",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                pointerEvents: "none",
                padding: isMobile ? "0 10px" : "0",
              }}
            >
              <div
                onClick={prevSlide}
                style={{ ...navStyle, pointerEvents: "all" }}
              >
                ←
              </div>

              <div
                onClick={nextSlide}
                style={{ ...navStyle, pointerEvents: "all" }}
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
