import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function AboutSlider() {
  const navigate = useNavigate();
  const containerRef = useRef();

  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  const [cardsPerView, setCardsPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      setIsMobile(w < 768);

      if (w < 420) setCardsPerView(1.2);
      else if (w < 600) setCardsPerView(2);
      else if (w < 768) setCardsPerView(3);
      else if (w < 1024) setCardsPerView(2);
      else if (w < 1400) setCardsPerView(3);
      else setCardsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    { title: "STORY", image: "/story1.jpg", path: "/story" },
    { title: "PROJECTS", image: "/journey4.jpg", path: "/journey" },
    { title: "STRENGTHS", image: "/strength.jpg", path: "/strength" },
    { title: "LEADERSHIP", image: "/leadership.jpg", path: "/leadership" },
    { title: "GROUP VENTURES", image: "/group.jpg", path: "/group" },
  ];

  const gap = isMobile ? 10 : 16;
  const cardWidth = `calc((100% - ${(cardsPerView - 1) * gap}px) / ${cardsPerView})`;

  const scroll = (dir) => {
    const container = containerRef.current;
    const amount = container.offsetWidth * 0.8;

    container.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  // inertia (desktop untouched)
  useEffect(() => {
    const container = containerRef.current;

    const animate = () => {
      velocityRef.current *= 0.92;

      if (Math.abs(velocityRef.current) < 0.1) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        return;
      }

      container.scrollLeft += velocityRef.current;
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      if (isMobile) return;

      e.preventDefault();
      velocityRef.current += e.deltaY * 0.4;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  // parallax (mobile)
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setScrollX(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          div::-webkit-scrollbar {
            display: none;
          }

          @keyframes slideInCall {
            from { transform: translateX(-120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>

      <section
        style={{
          display: "flex",
          height: "100dvh",
          width: "100%",
          padding: isMobile ? "0 14px" : "0 clamp(16px,4vw,60px)",
          background: "#f5f1e8",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* LEFT CONTENT */}
        {cardsPerView >= 3 && !isMobile && (
          <div style={{ width: "15%", paddingTop: "50px" }}>
            <h2 style={{ color: "#b08a3e" }}>
              WE HAVE A LEGACY OF OVER 40 YEARS
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#555",
                margin: 0,
                maxWidth: "220px",
              }}
            >
              “We don’t just build walls, we build a lifestyle”
            </p>
          </div>
        )}

        {/* SLIDER */}
        <div
          style={{
            width: cardsPerView >= 3 && !isMobile ? "85%" : "100%",
            height: isMobile ? "80%" : "87%",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* MOBILE OVERLAY */}
          {isMobile && showOverlay && (
            <div
              style={{
                position: "absolute",
                top: "42%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
                width: cardsPerView <= 2 ? "55%" : "75%",
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(18px)",
                borderRadius: "14px",
                padding: "12px",
              }}
            >
              <div onClick={() => setShowOverlay(false)} style={closeBtn}>
                ✕
              </div>

              <h3 style={{ margin: 0, color: "#b08a3e", fontSize: "14px" }}>
                WE HAVE A LEGACY OF OVER 40 YEARS
              </h3>

              <p
                style={{
                  marginTop: "6px",
                  fontSize: "12px",
                  color: "#555",
                  lineHeight: "1.4",
                }}
              >
                “We don’t just build walls, we build a lifestyle”
              </p>
            </div>
          )}

          {/* CARDS */}
          <div
            ref={containerRef}
            style={{
              display: "flex",
              gap: `${gap}px`,
              width: "100%",
              height: "100%",
              overflowX: isMobile ? "auto" : "hidden",
              scrollSnapType: isMobile ? "x mandatory" : "none",
            }}
          >
            {cards.map((card, i) => {
              const offset = i * 300 - scrollX;

              return (
                <div
                  key={i}
                  onClick={() => navigate(card.path)}
                  style={{
                    flex: `0 0 ${cardWidth}`,

                    // ✅ FULL HEIGHT FIX
                    height: isMobile ? "92%" : "100%",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    scrollSnapAlign: "start",
                    transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile && cardsPerView >= 3) {
                      const el = e.currentTarget;

                      el.style.flex = `0 0 calc(${cardWidth} + 8%)`;

                      const siblings = [...el.parentNode.children];
                      siblings.forEach((sib) => {
                        if (sib !== el) {
                          sib.style.transform = "translateX(8px)";
                          sib.style.opacity = "0.85";
                        }
                      });

                      const img = el.querySelector("img");
                      img.style.transform = "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      const el = e.currentTarget;

                      el.style.flex = `0 0 ${cardWidth}`;

                      const siblings = [...el.parentNode.children];
                      siblings.forEach((sib) => {
                        sib.style.transform = "translateX(0)";
                        sib.style.opacity = "1";
                      });

                      const img = el.querySelector("img");
                      img.style.transform = "scale(1)";
                    }
                  }}
                >
                  <div
                    style={{
                      height: isMobile ? "85%" : "88%", // ✅ increased for full feel
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: `0 10px 30px rgba(0,0,0,${
                        0.15 + Math.abs(offset) * 0.0002
                      })`,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: "100%", // ✅ FIXED (no more 110%)
                        height: "100%",
                        objectFit: "cover",

                        // ✅ softer parallax (no breaking edges)
                        transform: isMobile
                          ? `translateX(${offset * 0.02}px)`
                          : "scale(1)",

                        transition: "transform 0.4s ease",
                      }}
                    />
                  </div>

                  <div style={labelStyle(isMobile)}>
                    <span style={labelText(isMobile)}>{card.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FIXED ARROWS */}
          <div
            onClick={() => scroll("prev")}
            style={arrowStyle(isMobile, "left")}
          >
            ←
          </div>
          <div
            onClick={() => scroll("next")}
            style={arrowStyle(isMobile, "right")}
          >
            →
          </div>
        </div>

        {/* CALL BUTTON */}
        {isMobile && <div style={callStyle}>📞 Call</div>}
      </section>
    </>
  );
}

/* STYLES */

const closeBtn = {
  position: "absolute",
  top: "-12px",
  left: "-12px",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  background: "#b08a3e",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const labelStyle = (isMobile) => ({
  marginTop: "20px",
  background: "#e7dfcc",
  padding: "7px",
  textAlign: "center",
  borderRadius: "6px",
});

const labelText = (isMobile) => ({
  color: "#b08a3e",
  fontSize: isMobile ? "11px" : "26px",
  fontWeight: "800",
});

// ✅ FINAL FIX HERE
const arrowStyle = (isMobile, side) => ({
  position: "absolute",
  bottom: isMobile ? "65px" : "20px",

  // tighter safe padding for desktop
  [side]: isMobile ? "20px" : "80px",

  width: isMobile ? "40px" : "58px",
  height: isMobile ? "40px" : "58px",

  borderRadius: "50%",
  background: "rgba(0, 0, 0, 0.44)",
  backdropFilter: "blur(10px)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#fff",
  cursor: "pointer",
  zIndex: 10,

  transition: "all 0.3s ease",
});

const callStyle = {
  position: "absolute",
  bottom: "120px",
  left: "0",
  background: "#b08a3e",
  color: "#fff",
  padding: "12px 30px",
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
  animation: "slideInCall 0.6s ease",
};

export default AboutSlider;
