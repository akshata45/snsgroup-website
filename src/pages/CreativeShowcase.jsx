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

  // ✅ Responsive fix
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    if (index < cards.length - visibleCards) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  // 👉 Swipe
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
          {/* ✅ LEFT CONTENT (DESKTOP ONLY) */}
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

              <p style={{ fontSize: "17.5px", color: "#555" }}>
                We are happy to have you associated with us.
              </p>
            </div>
          )}

          {/* RIGHT */}
          <div
            style={{
              flex: 1,
              position: "relative",
            }}
          >
            {/* ✅ MOBILE OVERLAY */}
            {isMobile && showOverlay && (
              <div
                style={{
                  position: "absolute",
                  top: "110px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "92%",
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  zIndex: 10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
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
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ×
                </div>

                <h3 style={{ color: "#b68d2c", margin: 0 }}>
                  BUILDING TRUST WITH EVERY MILESTONE.
                </h3>

                <p style={{ fontSize: "13px", color: "#555" }}>
                  We are happy to have you associated with us.
                </p>
              </div>
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
                height: "calc(100vh - 140px)",
                cursor: "grab",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  height: "100%",
                  transition: "transform 0.4s ease",
                  transform: `translateX(calc(-${index} * ((100% - ${
                    isMobile ? "32px" : "64px"
                  })/${visibleCards} + 32px)))`,
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
                          isMobile ? "32px" : "64px"
                        }) / ${visibleCards})`,
                        transform:
                          !isMobile && isHovered ? "scaleX(1.05)" : "scaleX(1)",
                        transformOrigin: "left",
                        transition: "transform 0.35s ease",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                      }}
                    >
                      {/* IMAGE */}
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
                            fontSize: "clamp(18px, 4vw, 32px)", // 👈 responsive
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

export default Partners;
