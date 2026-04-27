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

  const visibleCards = isMobile ? 2 : 2;

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

          <div
            style={{
              flex: 1,
              position: "relative",
            }}
          >
{/* DESKTOP (UNCHANGED) */}
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

{/* 🔥 MOBILE VERSION WITH SLIDE */}
{isMobile && (
  <>
    {/* SLIDING PANEL */}
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
        padding: "18px",
        zIndex: 10,

        transition: "transform 0.4s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
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

      <h3
        style={{
          fontSize: "20px",
          fontWeight: "800",
          color: "#b68d2c",
          lineHeight: "1.4",
          margin: 0,
        }}
      >
        THIS IS HOW YOUR HOUSE HUNT GOES!
      </h3>

      <div
        style={{
          width: "40px",
          height: "2px",
          background: "#000",
          margin: "10px 0",
        }}
      />

      <p style={{ fontSize: "14px", color: "#555" }}>
        We help you clear your ifs and buts of home buying.
      </p>
    </div>

    {/* 🔥 RIGHT SIDE ℹ BUTTON */}
    {!showOverlay && (
      <div
        onClick={() => setShowOverlay(true)}
        style={{
          position: "absolute",
          top: "130px",
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


            <div
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseUp={(e) => handleEnd(e.clientX)}
              onMouseLeave={(e) => handleEnd(e.clientX)}
              style={{
                overflow: "hidden",
                height: "calc(100vh - 140px)",
                cursor: "grab",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "28px",
                  height: "100%",
                  transition: "transform 0.4s ease",
                  transform: `translateX(calc(-${index} * ((100% - 28px)/${visibleCards} + 28px)))`,
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
                        // ✅ ONLY CHANGE HERE (reduced width on desktop)
                        minWidth: isMobile
                          ? `calc((100% - 28px) / ${visibleCards})`
                          : "32%",

                        transform:
                          !isMobile && isHovered
                            ? "scaleX(1.05)"
                            : "scaleX(1)",
                        transformOrigin: "left",
                        transition: "transform 0.35s ease",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          height: "calc(100% - 110px)",
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
    fontSize: "clamp(18px, 3.5vw, 30px)", // 👈 responsive
    fontWeight: "800",
    color: "#a57c1b",
    lineHeight: "1.2",
  }}
>
  {card.title}
</h3>

<p
  style={{
    margin: 0,
    fontSize: "clamp(14px, 2.8vw, 17.5px)", // 👈 responsive
    color: "#444",
    lineHeight: "1.4",
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

export default BuyersGuide;
