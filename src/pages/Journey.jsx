import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

function Journey() {
  const [selectedType, setSelectedType] = useState("Completed");
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsData = {
    Completed: [
      { name: "ESTORIA HEIGHTS", loc: "Malad", img: "/estoria1.jpg" },
      { name: "DEV DARSHAN", loc: "Bhandup", img: "/dev-darshan1.jpg" },
      { name: "ARHAM ARCADE", loc: "Kharghar", img: "/arham-arcade1.jpg" },
      {
        name: "CHANDAN PRIDE",
        loc: "Ghatkopar East",
        img: "/chandan-pride1.jpg",
      },
      { name: "LAKE MARVEL PAWNA", loc: "Lonavala", img: "/lake-marvel1.jpg" },
      { name: "DEV ASHISH", loc: "Bhandup", img: "/dev-ashish1.jpg" },
      { name: "PREM ASHISH", loc: "Ghatkopar West", img: "/prem-ashish1.jpg" },
      { name: "PREM KUNJ", loc: "Ghatkopar West", img: "/prem-kunj1.jpg" },
      { name: "AASHIRWAD RESIDENCY", loc: "Borivali", img: "/aashirwad.jpg" },
    ],
    Ongoing: [
      { name: "S K PARADISE", loc: "Alibaug", img: "/sk-paradie1.jpg" },
      { name: "AMBY VALLEY", loc: "Lonavala", img: "/amby-valley1.jpg" },
      { name: "LOGISTIC WAREHOUSE", loc: "Wada", img: "/warehouse1.jpg" },
      { name: "VILLA PROJECT", loc: "Karjat", img: "/villa1.jpg" },
    ],
    Upcoming: [
      { name: "CHEMBUR", loc: "Mumbai", img: "/chembur.jpg" },
      { name: "BHANDUP", loc: "Mumbai", img: "/chembur.jpg" },
      { name: "KARJAT", loc: "Mumbai", img: "/chembur.jpg" },
    ],
  };

  const cards = projectsData[selectedType];

  const visibleCards = isMobile ? 2.2 : 4;
  const gap = isMobile ? 12 : 20;
  const cardWidth = 100 / visibleCards;

  const maxIndex = Math.max(0, cards.length - visibleCards);

  const scroll = (dir) => {
    setIndex((prev) => {
      if (dir === "next") return Math.min(prev + 1, maxIndex);
      return Math.max(prev - 1, 0);
    });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) scroll("next");
      else scroll("prev");
    };

    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const diff = startX - e.touches[0].clientX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) scroll("next");
        else scroll("prev");

        setShowOverlay(false);
        startX = e.touches[0].clientX;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [maxIndex]);

  return (
    <>
      <Navbar />
      <style>
  {`
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden; /* 🔥 removes vertical scroll */
      height: 100%;
    }

    * {
      box-sizing: border-box;
    }

    /* 🔥 fix mobile viewport height */
    section {
      height: 100dvh !important;
    }

    /* 🔥 prevent unwanted scroll bounce */
    body.menu-open {
      overflow: hidden;
      touch-action: none;
    }

    /* 🔥 hide scrollbar (extra safety) */
    ::-webkit-scrollbar {
      display: none;
    }
  `}
</style>


      <section
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          background: "#f5f1e8",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {!isMobile && (
          <div
            style={{
              width: "20%",
              padding: "20px 15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginTop: "55px",
            }}
          >
            <LeftContent
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              setIndex={setIndex}
            />
          </div>
        )}

        {isMobile && (
          <>
            {/* 🔥 SLIDING PANEL */}
            <div
              style={{
                position: "absolute",
                top: "120px",
                left: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                padding: "20px",
                borderRadius: "14px",
                zIndex: 20,

                /* 🔥 ANIMATION */
                transform: showOverlay ? "translateX(0)" : "translateX(120%)",
                transition: "transform 0.4s ease",
              }}
            >
              {/* CLOSE BUTTON */}
              <div
                onClick={() => setShowOverlay(false)}
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  width: "40px",
                  height: "40px",
                  background: "#b08a3e",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ✕
              </div>

              <LeftContent
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                setIndex={setIndex}
                isMobile
              />
            </div>

            {/* 🔥 RIGHT SIDE ATTACHED INFO BUTTON */}
            {!showOverlay && (
              <div
                onClick={() => setShowOverlay(true)}
                style={{
                  position: "absolute",

                  /* MATCH PANEL HEIGHT POSITION */
                  top: "140px", // slightly below top for alignment
                  right: "0",

                  zIndex: 25,
                  background: "#b08a3e",
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
          ref={sliderRef}
          style={{
            width: isMobile ? "100%" : "80%",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${gap}px`,
              transform: `translateX(-${index * cardWidth}%)`,
              transition: "transform 0.6s ease",
              height: "85%",
              width: "100%",
              paddingLeft: isMobile ? "10px" : "0px",
            }}
          >
            {cards.map((item, i) => (
              <div
                key={i}
                style={{
                  flex: `0 0 ${cardWidth}%`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.4s",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    const el = e.currentTarget;

                    el.style.transform = "scaleX(1.2)";
                    el.style.transformOrigin = "left";
                    el.style.zIndex = "5";

                    const siblings = [...el.parentNode.children];
                    siblings.forEach((sib, idx) => {
                      if (idx > i) sib.style.transform = "translateX(60px)";
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    const el = e.currentTarget;

                    el.style.transform = "scaleX(1)";

                    const siblings = [...el.parentNode.children];
                    siblings.forEach((sib) => {
                      sib.style.transform = "translateX(0)";
                    });
                  }
                }}
              >
                <div
                  style={{
                    flex: 1,
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    background: "#e7dfcc",
                    padding: "12px",
                    borderRadius: "6px",
                    minHeight: "70px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      color: "#b08a3e",
                      fontSize: "clamp(18px, 4vw, 26px)", // 👈 responsive
                      fontWeight: "800",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#444",
                      fontSize: "clamp(14px, 3vw, 18.5px)", // 👈 responsive
                    }}
                  >
                    @{item.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div onClick={() => scroll("prev")} style={arrowLeft}>
            ←
          </div>
          <div onClick={() => scroll("next")} style={arrowRight}>
            →
          </div>
        </div>
      </section>
    </>
  );
}

/* LEFT CONTENT (RESTORED COLORS) */
const LeftContent = ({ selectedType, setSelectedType, setIndex, isMobile }) => (
  <>
    <h1
      style={{
        color: "#b08a3e",
        fontSize: isMobile ? "22px" : "38px",
        margin: 0,
        fontWeight: "700",
      }}
    >
      BUILDING <br /> TODAY, <br /> SHAPING <br /> TOMORROW.
    </h1>

    <div
      style={{
        width: "50px",
        height: "2px",
        background: "#000",
        margin: "14px 0",
      }}
    />

    <p style={{ color: "#444", fontSize: "16.5px" }}>
      Have a look through our luxury residences and prestigious commercial
      spaces
    </p>

    <div
      style={{
        marginTop: "18px",
        display: "flex",
        gap: "10px",
        fontSize: "16px",
      }}
    >
      <button style={btnActive}>Residential</button>
      <button style={btnBlack}>Commercial</button>
    </div>

    <div style={{ position: "relative", width: "100%", marginTop: "15px" }}>
      <select
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value);
          setIndex(0);
        }}
        style={{
          padding: "10px",
          width: "100%",
          background: "#e7dfcc",
          color: "#1a1a1a",
          border: "1px solid #b08a3e",
          outline: "none",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <option value="Completed">Completed</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Upcoming">Upcoming</option>
      </select>

      {/* Custom Arrow */}
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none", // so clicks pass through
          fontSize: "14px",
          color: "#1a1a1a",
        }}
      >
        ▼
      </div>
    </div>
  </>
);

/* BUTTONS */
const btnActive = {
  background: "#b08a3e",
  color: "#fff",
  border: "none",
  padding: "10px 16px",
};

const btnBlack = {
  padding: "10px 16px",
  border: "1px solid #b08a3e",
  background: "transparent",
  color: "#474747",
};

/* ARROWS */
const arrowLeft = {
  position: "absolute",
  left: "10px",
  bottom: "105px",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: "#000",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const arrowRight = {
  position: "absolute",
  right: "20px",
  bottom: "105px",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: "#000",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export default Journey;
