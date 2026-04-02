import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function AboutSlider() {
  const navigate = useNavigate();
  const containerRef = useRef();

  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 768) setCardsPerView(1.1);
      else if (w < 1024) setCardsPerView(2);
      else if (w < 1400) setCardsPerView(3);
      else setCardsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    { title: "STORY", image: "/story.jpg", path: "/story" },
    { title: "PROJECTS", image: "/journey.jpg", path: "/journey" },
    { title: "STRENGTHS", image: "/strength.jpg", path: "/strength" },
    { title: "LEADERSHIP", image: "/leadership.jpg", path: "/leadership" },
    { title: "GROUP VENTURES", image: "/group.jpg", path: "/group" },
  ];

  const gap = 16;
  const cardWidth = `calc((100% - ${(cardsPerView - 1) * gap}px) / ${cardsPerView})`;

  // 🔥 BUTTON SCROLL (clean smooth jump)
  const scroll = (dir) => {
    const container = containerRef.current;
    container.scrollBy({
      left:
        dir === "next"
          ? container.offsetWidth * 0.8
          : -container.offsetWidth * 0.8,
      behavior: "smooth",
    });
  };

  // 🔥 LUXURY PHYSICS SCROLL (inertia engine)
  useEffect(() => {
    const container = containerRef.current;

    const animate = () => {
      if (!container) return;

      velocityRef.current *= 0.92; // friction

      if (Math.abs(velocityRef.current) < 0.1) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        return;
      }

      container.scrollLeft += velocityRef.current;
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      e.preventDefault();

      // add velocity instead of instant scroll
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
        `}
      </style>

      <section
        style={{
          display: "flex",
          height: "100dvh",
          width: "100%",
          padding: "0 clamp(16px,4vw,60px)",
          background: "#f5f1e8",
          alignItems: "flex-start",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT CONTENT */}
        {cardsPerView >= 3 && (
          <div
            style={{
              width: "15%",
              paddingTop: "clamp(50px,2vh,30px)",
            }}
          >
            <h2
              style={{
                color: "#b08a3e",
                fontSize: "clamp(22px,2.2vw,28px)",
                fontWeight: "800",
                margin: 0,
                lineHeight: "1.2",
              }}
            >
              WE HAVE A LEGACY OF OVER 40 YEARS
            </h2>

            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#b08a3e",
                margin: "10px 0",
              }}
            />

            <p
              style={{
                fontSize: "13px",
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
            width: cardsPerView >= 3 ? "85%" : "100%",
            height: "87%",
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            marginTop: "-10px",
          }}
        >
          <div
            ref={containerRef}
            style={{
              display: "flex",
              gap: `${gap}px`,
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 ${cardWidth}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                }}
                onClick={() => navigate(card.path)}
                onMouseEnter={(e) => {
                  if (cardsPerView >= 3) {
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
                  const el = e.currentTarget;

                  el.style.flex = `0 0 ${cardWidth}`;

                  const siblings = [...el.parentNode.children];
                  siblings.forEach((sib) => {
                    sib.style.transform = "translateX(0)";
                    sib.style.opacity = "1";
                  });

                  const img = el.querySelector("img");
                  img.style.transform = "scale(1)";
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    height: "88%",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>

                {/* LABEL */}
                <div
                  style={{
                    marginTop: "16px",
                    background: "#e7dfcc",
                    padding: "8px",
                    textAlign: "center",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#b08a3e",
                      fontSize: "26px",
                      fontWeight: "800",
                    }}
                  >
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* PREMIUM ARROWS */}
          <div
            onClick={() => scroll("prev")}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "0",
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              backdropFilter: "blur(12px)",
              background: "rgba(0,0,0,0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
          >
            <span style={{ fontSize: "28px", color: "#fff" }}>←</span>
          </div>

          <div
            onClick={() => scroll("next")}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "0",
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              backdropFilter: "blur(12px)",
              background: "rgba(0,0,0,0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
          >
            <span style={{ fontSize: "28px", color: "#fff" }}>→</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSlider;