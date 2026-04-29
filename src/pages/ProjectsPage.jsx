import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Journey() {
  const containerRef = useRef();

  const [selectedType, setSelectedType] = useState("Ongoing");
  const [isMobile, setIsMobile] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
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

  const scroll = (dir) => {
    const container = containerRef.current;
    const amount = container.offsetWidth * 0.7;

    container.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => setScrollX(container.scrollLeft);
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const gap = isMobile ? 12 : 24;
  const cardsPerView = isMobile ? 1.2 : 3;
  const cardWidth = `calc((100% - ${(cardsPerView - 1) * gap}px) / ${cardsPerView})`;

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          height: "100vh",
          padding: isMobile ? "20px" : "40px 80px",
          background: "#f5f1e8",
          overflow: "hidden",
        }}
      >
        {/* LEFT */}
        <div style={{ width: isMobile ? "100%" : "25%" }}>
          <h1 style={{ color: "#b08a3e", lineHeight: "1.2" }}>
            BUILDING <br /> TODAY, <br /> SHAPING <br /> TOMORROW.
          </h1>

          <div
            style={{
              height: "2px",
              width: "60px",
              background: "#000",
              margin: "20px 0",
            }}
          />

          <p style={{ color: "#555" }}>
            Explore our landmark residential and commercial developments crafted
            with precision and trust.
          </p>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ marginTop: "20px", padding: "8px" }}
          >
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Upcoming</option>
          </select>
        </div>

        {/* RIGHT SLIDER */}
        <div
          style={{
            width: isMobile ? "100%" : "75%",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            ref={containerRef}
            style={{
              display: "flex",
              gap: `${gap}px`,
              width: "100%",
              overflowX: "auto",
              scrollSnapType: isMobile ? "x mandatory" : "none",
            }}
          >
            {projectsData[selectedType].map((item, i) => {
              const offset = i * 300 - scrollX;

              return (
                <div
                  key={i}
                  style={{
                    flex: `0 0 ${cardWidth}`,
                    height: isMobile ? "420px" : "550px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      const el = e.currentTarget;

                      // WIDEN CARD
                      el.style.transform = "scaleX(1.08)";
                      el.style.zIndex = "2";

                      // SHIFT NEXT CARDS (gap preserved)
                      const siblings = [...el.parentNode.children];
                      siblings.forEach((sib, idx) => {
                        if (idx > i) {
                          sib.style.transform = "translateX(30px)";
                        }
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      const el = e.currentTarget;
                      el.style.transform = "scaleX(1)";
                      el.style.zIndex = "1";

                      const siblings = [...el.parentNode.children];
                      siblings.forEach((sib) => {
                        sib.style.transform = "translateX(0)";
                      });
                    }
                  }}
                >
                  {/* IMAGE */}
                  <div
                    style={{
                      height: "85%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: isMobile
                          ? `translateX(${offset * 0.03}px)`
                          : "none",
                      }}
                    />
                  </div>

                  {/* LABEL */}
                  <div
                    style={{
                      marginTop: "14px",
                      background: "#e7dfcc",
                      padding: "14px",
                      borderRadius: "8px",
                      transition: "all 0.5s ease",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        color: "#b08a3e",
                        transform: "translateX(0)",
                        transition: "0.4s",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p style={{ margin: 0, color: "#555" }}>@{item.loc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS */}
          <div
            onClick={() => scroll("prev")}
            style={{
              position: "absolute",
              left: "20px",
              bottom: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            ←
          </div>

          <div
            onClick={() => scroll("next")}
            style={{
              position: "absolute",
              right: "20px",
              bottom: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            →
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Journey;
