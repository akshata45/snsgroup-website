import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function AboutSlider() {
  const navigate = useNavigate();
  const containerRef = useRef();

  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
    { title: "STRENGTHS", image: "/strength.jpg", path: "/story#strength" },
    { title: "LEADERSHIP", image: "/leadership.jpg", path: "/story#leadership" },
    { title: "GROUP VENTURES", image: "/group.jpg", path: "/story#ventures" },
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

  // inertia
  useEffect(() => {
    const container = containerRef.current;

    const animate = () => {
      velocityRef.current *= 0.96;

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
      velocityRef.current += e.deltaY * 0.15;


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

  // drag scroll
  useEffect(() => {
    const container = containerRef.current;

    const down = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const leave = () => (isDragging.current = false);
    const up = () => (isDragging.current = false);

    const move = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 0.8;
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener("mousedown", down);
    container.addEventListener("mouseleave", leave);
    container.addEventListener("mouseup", up);
    container.addEventListener("mousemove", move);

    return () => {
      container.removeEventListener("mousedown", down);
      container.removeEventListener("mouseleave", leave);
      container.removeEventListener("mouseup", up);
      container.removeEventListener("mousemove", move);
    };
  }, []);

  // parallax
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
    height: 100%;
    overflow: hidden; /* 🔥 MAIN FIX */
  }

  #root {
    height: 100%;
    overflow: hidden;
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
        {cardsPerView >= 3 && !isMobile && (
          <div style={{ width: "15%", paddingTop: "50px" }}>
            <h2 style={{ color: "#b08a3e" , fontSize: "27px", marginBottom: "8px", fontWeight: "800"}}>
              WE HAVE A LEGACY OF OVER 40 YEARS
            </h2>
            <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>
              “We don’t just build walls, we build a lifestyle”
            </p>
          </div>
        )}

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
            <div style={overlayStyle}>
              <div onClick={() => setShowOverlay(false)} style={closeBtn}>✕</div>
              <h3 style={{ margin: 0, color: "#b08a3e", fontSize: "14px" }}>
                WE HAVE A LEGACY OF OVER 40 YEARS
              </h3>
              <p style={{ marginTop: "6px", fontSize: "12px", color: "#555" }}>
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
              cursor: "grab",
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
                    height: isMobile ? "92%" : "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    scrollSnapAlign: "start",
                    transition: "transform 0.7s cubic-bezier(0.25, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      const el = e.currentTarget;
                      const inner = el.querySelector(".card-inner");

                      const scale = 1.05;
                      const shift = 40;

                      inner.style.transform = `scaleX(${scale})`;

                      const siblings = [...el.parentNode.children];
                      siblings.forEach((sib, idx) => {
                        if (idx > i) {
                          sib.style.transform = `translateX(${shift}px)`;
                        }
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      const el = e.currentTarget;
                      const inner = el.querySelector(".card-inner");

                      inner.style.transform = "scaleX(1)";

                      const siblings = [...el.parentNode.children];
                      siblings.forEach((sib) => {
                        sib.style.transform = "translateX(0)";
                      });
                    }
                  }}
                >
                  <div
                    className="card-inner"
                    style={{
                      position: "relative",
                      height: isMobile ? "85%" : "88%",
                      borderRadius: "18px",
                      overflow: "hidden",
                      transformOrigin: "left center",
                      transition: "transform 0.7s cubic-bezier(0.25, 1, 0.3, 1)",
                      boxShadow: `0 10px 30px rgba(0,0,0,${
                        0.15 + Math.abs(offset) * 0.0002
                      })`,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: isMobile
                          ? `translateX(${offset * 0.02}px)`
                          : "none",
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

          <div onClick={() => scroll("prev")} style={arrowStyle(isMobile, "left")}>←</div>
          <div onClick={() => scroll("next")} style={arrowStyle(isMobile, "right")}>→</div>
        </div>

        {isMobile && <div style={callStyle}>📞 Call</div>}
      </section>
    </>
  );
}

/* STYLES */

const overlayStyle = {
  position: "absolute",
  top: "42%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
  width: "70%",
  background: "rgba(255,255,255,0.72)",
  backdropFilter: "blur(18px)",
  borderRadius: "14px",
  padding: "12px",
};

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
  fontSize: isMobile ? "18px" : "26px",
  fontWeight: "800",
});

const arrowStyle = (isMobile, side) => ({
  position: "absolute",
  bottom: isMobile ? "65px" : "20px",
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
