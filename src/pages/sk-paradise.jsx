import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SKParadise() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(null);
  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const floorPlanSliderRef = useRef(null);
  const [isFloorPlanPaused, setIsFloorPlanPaused] = useState(false);


const amenitySliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
  const slider = amenitySliderRef.current;

  if (!slider) return;

  let animationFrame;
  let lastTime = performance.now();

  const scrollSpeed = isMobile ? 0.35 : 0.45;

  const autoScroll = (time) => {
    const currentSlider = amenitySliderRef.current;

    if (!currentSlider) return;

    const delta = time - lastTime;
    lastTime = time;

    currentSlider.scrollLeft +=
      (scrollSpeed * delta) / 16.67;

    const maxScroll =
      currentSlider.scrollWidth -
      currentSlider.clientWidth;

    if (currentSlider.scrollLeft >= maxScroll - 1) {
      currentSlider.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }

    animationFrame =
      requestAnimationFrame(autoScroll);
  };

  animationFrame =
    requestAnimationFrame(autoScroll);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, [isMobile]);

  useEffect(() => {
    const slider = floorPlanSliderRef.current;

    if (!slider) return;

    let animationFrame;
    let lastTime = performance.now();

    const scrollSpeed = isMobile ? 0.35 : 0.45;

    const autoScroll = (time) => {
      const currentSlider = floorPlanSliderRef.current;

      if (!currentSlider) return;

      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isFloorPlanPaused) {
        currentSlider.scrollLeft += (scrollSpeed * deltaTime) / 16.67;

        const maxScroll = currentSlider.scrollWidth - currentSlider.clientWidth;

        if (currentSlider.scrollLeft >= maxScroll - 1) {
          currentSlider.scrollTo({
            left: 0,
            behavior: "auto",
          });
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isMobile, isFloorPlanPaused]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        color: "#222",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      {/* =====================================================
    S.K. PARADISE SECTION NAVIGATION
===================================================== */}

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          background: "#f5f1e8",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "flex-start" : "center",
            gap: isMobile ? "28px" : "42px",
            padding: isMobile ? "14px 20px" : "15px 25px",
            overflowX: isMobile ? "auto" : "visible",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
          }}
        >
          {[
            {
              label: "OVERVIEW",
              id: "overview",
            },
            {
              label: "EXPERIENCE",
              id: "experience",
            },
            {
              label: "FLOOR PLANS",
              id: "floor-plans",
            },
            {
              label: "REASONS TO BUY",
              id: "reasons",
            },
            {
              label: "AMENITIES",
              id: "amenities",
            },
            {
              label: "LOCATION",
              id: "location",
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              style={{
                border: "none",
                background: "transparent",
                padding: "3px 0",
                color: "#b08a3e",
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: "600",
                letterSpacing: "1.4px",
                cursor: "pointer",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          width: "100%",
          minHeight: isMobile ? "auto" : "calc(100vh - 70px)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "55% 45%",
          background: "#f4f0e8",
        }}
      >
        {/* IMAGE */}

        <div
          style={{
            width: "100%",
            height: isMobile ? "45vh" : "calc(100vh - 70px)",
            minHeight: isMobile ? "320px" : "600px",
            maxHeight: isMobile ? "500px" : "none",
            overflow: "hidden",
          }}
        >
          <img
            src="/1.png"
            alt="S K Paradise Alibaug"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>

        {/* CONTENT */}

        <div
          style={{
            width: "100%",
            minHeight: isMobile ? "auto" : "calc(100vh - 70px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: isMobile ? "35px 22px 45px" : "55px 65px",
          }}
        >
          <p
            style={{
              fontSize: isMobile ? "12px" : "16px",
              letterSpacing: isMobile ? "2px" : "3px",
              margin: "0 0 10px",
              color: "#333",
              lineHeight: "1.4",
              fontWeight: "500",
            }}
          >
            EXPERIENCE THE FUTURE OF
          </p>

          <h1
            style={{
              fontSize: isMobile
                ? "clamp(34px, 11vw, 46px)"
                : "clamp(40px, 5vw, 72px)",
              color: "#b08a3e",
              margin: 0,
              fontWeight: "700",
              lineHeight: "1.05",
              letterSpacing: isMobile ? "0px" : "1px",
            }}
          >
            S.K. PARADISE
          </h1>

          <p
            style={{
              fontSize: isMobile ? "16px" : "20px",
              letterSpacing: isMobile ? "2px" : "3px",
              margin: isMobile ? "10px 0 20px" : "12px 0 22px",
              color: "#430a09",
              fontWeight: "600",
            }}
          >
            ALIBAUG
          </p>

          <div
            style={{
              width: "100%",
              maxWidth: "580px",
              color: "#555",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: isMobile ? "1.6" : "1.65",
              textAlign: "justify",
            }}
          >
            <p style={{ margin: "0 0 12px" }}>
              Alibaug is rapidly growing, making it the perfect time to invest
              in homes that blend comfort, elegance, and modern living.
            </p>

            <p style={{ margin: "0 0 15px" }}>
              Just 45 mins via Ro-Ro and 15 mins by speed boat, Alibaug offers
              excellent connectivity with stunning coastal beauty.
            </p>

            <ul
              style={{
                margin: "15px 0 0",
                paddingLeft: isMobile ? "18px" : "20px",
              }}
            >
              <li style={{ marginBottom: "10px", paddingLeft: "3px" }}>
                Smartly designed{" "}
                <strong style={{ color: "#430a09" }}>1 & 2 BHK homes</strong>{" "}
                planned for convenience, functionality, and everyday comfort.
              </li>

              <li style={{ marginBottom: "10px", paddingLeft: "3px" }}>
                Modern amenities that enhance your lifestyle and elevate
                everyday living.
              </li>

              <li style={{ marginBottom: "10px", paddingLeft: "3px" }}>
                Nature-filled surroundings with serene pathways and refreshing
                sea breeze.
              </li>

              <li style={{ marginBottom: "10px", paddingLeft: "3px" }}>
                Family-friendly spaces including safe and joyful play areas for
                children.
              </li>

              <li style={{ marginBottom: 0, paddingLeft: "3px" }}>
                A home you'll be proud of brought to you by{" "}
                <strong style={{ color: "#430a09" }}>SNS Group</strong> for
                elevated living.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section
        id="overview"
        style={{
          padding: isMobile ? "60px 5%" : "100px 8%",
          background: "#f5f1e8",
          scrollMarginTop: isMobile ? "60px" : "65px",
        }}
      >
        {/* ================= TITLE ================= */}

        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "20px",
          }}
        >
          <p
            style={{
              color: "#353534",
              letterSpacing: "3px",
              fontSize: "14px",
              margin: "0 0 18px",
              fontWeight: "500",
            }}
          >
            S K PARADISE
          </p>

          <h2
            style={{
              fontSize: isMobile ? "30px" : "40px",
              fontWeight: "800",
              color: "#c6a75e",
              lineHeight: "1.25",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            OVERVIEW
          </h2>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#c6a75e",
              margin: "16px auto 0",
            }}
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
            gap: isMobile ? "40px" : "70px",
            alignItems: "center",
          }}
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            style={{
              textAlign: "justify",
            }}
          >
            <h3
              style={{
                color: "#c6a75e",
                marginBottom: "12px",
                fontSize: isMobile ? "20px" : "26px",
                letterSpacing: "1px",
                fontWeight: "600",
              }}
            >
              A Place Designed for Better Living
            </h3>

            <p
              style={{
                color: "#444",
                lineHeight: "2",
                fontSize: isMobile ? "16px" : "16.5px",
                letterSpacing: "0.3px",
                marginBottom: "14px",
              }}
            >
              S.K. PARADISE is a thoughtfully planned residential development in
              Alibaug, created for those who value comfort, elegance and a
              contemporary lifestyle surrounded by nature.
            </p>

            <p
              style={{
                color: "#444",
                lineHeight: "2",
                fontSize: isMobile ? "16px" : "16.5px",
                letterSpacing: "0.3px",
                marginBottom: "14px",
              }}
            >
              The project brings together smartly designed{" "}
              <span
                style={{
                  color: "#c6a75e",
                  fontWeight: "600",
                }}
              >
                1 & 2 BHK homes
              </span>
              , modern amenities and thoughtfully planned spaces that make
              everyday living convenient and enjoyable.
            </p>

            <p
              style={{
                color: "#444",
                lineHeight: "2",
                fontSize: isMobile ? "16px" : "16.5px",
                letterSpacing: "0.3px",
                margin: 0,
              }}
            >
              Located in the rapidly growing destination of Alibaug, S.K.
              PARADISE offers the opportunity to experience peaceful
              surroundings while staying well connected to Mumbai and the wider
              region.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <img
              src="/overview.jpg"
              alt="S K Paradise Alibaug"
              style={{
                width: "100%",
                height: isMobile ? "280px" : "390px",
                objectFit: "cover",
                display: "block",
                borderRadius: isMobile ? "0px" : "4px",
                boxShadow: isMobile ? "none" : "0 20px 50px rgba(0,0,0,0.12)",
              }}
            />

            {/* PREMIUM IMAGE LABEL */}

            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "15px" : "-20px",
                left: isMobile ? "15px" : "-20px",
                background: "#430a09",
                padding: isMobile ? "14px 18px" : "18px 24px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              }}
            >
              <p
                style={{
                  margin: "0 0 5px",
                  color: "#c6a75e",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                LOCATION
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#fff",
                  fontSize: isMobile ? "14px" : "16px",
                  fontWeight: "500",
                  letterSpacing: "0.3px",
                }}
              >
                Alibaug, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* ================= PROJECT DETAILS ================= */}

        <div
          style={{
            maxWidth: "1150px",
            margin: isMobile ? "45px auto 0" : "65px auto 0",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? "12px" : "20px",
          }}
        >
          {[
            {
              title: "LOCATION",
              value: "Alibaug",
            },
            {
              title: "CONFIGURATION",
              value: "1 & 2 BHK",
            },
            {
              title: "PROJECT TYPE",
              value: "Residential",
            },
            {
              title: "STATUS",
              value: "Ongoing",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: isMobile ? "18px 15px" : "22px 20px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (isMobile) return;

                e.currentTarget.style.transform = "translateY(-3px)";

                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;

                e.currentTarget.style.transform = "translateY(0)";

                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.04)";
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  color: "#888",
                  fontSize: isMobile ? "10px" : "11px",
                  letterSpacing: "1.5px",
                  fontWeight: "500",
                }}
              >
                {item.title}
              </p>

              <h4
                style={{
                  margin: 0,
                  color: "#430a09",
                  fontSize: isMobile ? "15px" : "18px",
                  fontWeight: "600",
                }}
              >
                {item.value}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CONFIGURATIONS
      ===================================================== */}

<section
  id="experience"
  style={{
    padding: isMobile ? "55px 20px" : "80px 8%",
    backgroundImage: "url('/blog2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: isMobile ? "scroll" : "fixed",
    position: "relative",
    scrollMarginTop: isMobile ? "60px" : "65px",

    // SAME FONT AS THE REST OF YOUR PAGE
    fontFamily: "inherit",
  }}
>
        {/* BACKGROUND OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(245, 245, 245, 0.29)",
            zIndex: 0,
          }}
        />

        {/* EXISTING CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <SectionTitle title="THE S.K PARADISE EXPERIENCE" />

          <div
            style={{
              maxWidth: "1100px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {/* CONNECTIVITY */}

            <div
              style={{
                background: "rgba(250, 248, 243, 0.94)",
                border: "1px solid rgba(198, 167, 94, 0.35)",
                padding: isMobile ? "25px 20px" : "28px 22px",
                minHeight: isMobile ? "180px" : "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(29, 45, 99, 0.07)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 35px rgba(29, 45, 99, 0.12)";
                  e.currentTarget.style.border =
                    "1px solid rgba(198, 167, 94, 0.65)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(29, 45, 99, 0.07)";
                  e.currentTarget.style.border =
                    "1px solid rgba(198, 167, 94, 0.35)";
                }
              }}
            >
              <div
                style={{
                  color: "#c6a75e",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                CONNECTIVITY · 01
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#1d2d63",
                  fontSize: isMobile ? "23px" : "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                }}
              >
                WELL CONNECTED
              </h3>

              <div
                style={{
                  width: "35px",
                  height: "1px",
                  background: "#c6a75e",
                  margin: "15px 0",
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: isMobile ? "13px" : "14px",
                  lineHeight: "1.7",
                  letterSpacing: "0.4px",
                }}
              >
                Just 45 mins via Ro-Ro and 15 mins by speed boat from Mumbai.
              </p>
            </div>

            {/* NATURE */}

            <div
              style={{
                background: "rgba(248, 246, 240, 0.97)",
                border: "1px solid rgba(198, 167, 94, 0.45)",
                padding: isMobile ? "25px 20px" : "28px 22px",
                minHeight: isMobile ? "180px" : "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 12px 32px rgba(29, 45, 99, 0.09)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(29, 45, 99, 0.14)";
                  e.currentTarget.style.border =
                    "1px solid rgba(198, 167, 94, 0.7)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(29, 45, 99, 0.09)";
                  e.currentTarget.style.border =
                    "1px solid rgba(198, 167, 94, 0.45)";
                }
              }}
            >
              <div
                style={{
                  color: "#c6a75e",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                SURROUNDINGS · 02
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#1d2d63",
                  fontSize: isMobile ? "23px" : "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                }}
              >
                COASTAL LIVING
              </h3>

              <div
                style={{
                  width: "35px",
                  height: "1px",
                  background: "#c6a75e",
                  margin: "15px 0",
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: isMobile ? "13px" : "14px",
                  lineHeight: "1.7",
                  letterSpacing: "0.4px",
                }}
              >
                Nature-filled surroundings, serene pathways and refreshing sea
                breeze.
              </p>
            </div>

            {/* LIFESTYLE */}

            <div
              style={{
                background: "rgba(250, 248, 243, 0.94)",
                border: "1px solid rgba(198, 167, 94, 0.35)",
                padding: isMobile ? "25px 20px" : "28px 22px",
                minHeight: isMobile ? "180px" : "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(29, 45, 99, 0.07)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 35px rgba(29, 45, 99, 0.12)";
                  e.currentTarget.style.border =
                    "1px solid rgba(198, 167, 94, 0.65)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(29, 45, 99, 0.07)";
                  e.currentTarget.style.border =
                    "1px solid rgba(198, 167, 94, 0.35)";
                }
              }}
            >
              <div
                style={{
                  color: "#c6a75e",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                LIFESTYLE · 03
              </div>

              <h3
                style={{
                  margin: 0,
                  color: "#1d2d63",
                  fontSize: isMobile ? "23px" : "22px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                }}
              >
                ELEVATED LIVING
              </h3>

              <div
                style={{
                  width: "35px",
                  height: "1px",
                  background: "#c6a75e",
                  margin: "15px 0",
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: isMobile ? "13px" : "14px",
                  lineHeight: "1.7",
                  letterSpacing: "0.4px",
                }}
              >
                Modern amenities, family-friendly spaces and thoughtful everyday
                comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOOR PLANS
      ===================================================== */}

      <section
        id="floor-plans"
        style={{
          padding: isMobile ? "55px 20px" : "80px 8%",
          background: "#fff",
          scrollMarginTop: isMobile ? "60px" : "65px",
        }}
      >
        <SectionTitle title="FLOOR PLANS" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "15px",
            width: "100%",
          }}
        >
          <FloorPlan
            image="/floorplan1.jpg"
            title="FLOOR PLAN 01"
            isMobile={isMobile}
            onClick={() => setSelectedFloorPlan("/floorplan1.jpg")}
          />

          <FloorPlan
            image="/floorplan2.jpg"
            title="FLOOR PLAN 02"
            isMobile={isMobile}
            onClick={() => setSelectedFloorPlan("/floorplan2.jpg")}
          />

          <FloorPlan
            image="/floorplan3.jpg"
            title="FLOOR PLAN 03"
            isMobile={isMobile}
            onClick={() => setSelectedFloorPlan("/floorplan3.jpg")}
          />

          <FloorPlan
            image="/LAYOUTS-04.jpg"
            title="FLOOR PLAN 04"
            isMobile={isMobile}
            onClick={() => setSelectedFloorPlan("/LAYOUTS-04.jpg")}
          />

          <FloorPlan
            image="/LAYOUTS-05.jpg"
            title="FLOOR PLAN 05"
            isMobile={isMobile}
            onClick={() => setSelectedFloorPlan("/LAYOUTS-05.jpg")}
          />
        </div>
      </section>

      {/* =====================================================
    FLOOR PLAN LIGHTBOX
===================================================== */}

      {selectedFloorPlan && (
        <div
          onClick={() => setSelectedFloorPlan(null)}
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100dvh",
            background: "rgba(0, 0, 0, 0.82)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "20px" : "50px",
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1100px",
              maxHeight: "90dvh",
              background: "#fff",
              padding: isMobile ? "10px" : "18px",
              boxSizing: "border-box",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedFloorPlan(null)}
              aria-label="Close floor plan"
              style={{
                position: "absolute",
                top: isMobile ? "-48px" : "-55px",
                right: "0",
                width: isMobile ? "40px" : "45px",
                height: isMobile ? "40px" : "45px",
                border: "1px solid rgba(255,255,255,0.5)",
                background: "#c6a75e",
                color: "#fff",
                fontSize: isMobile ? "25px" : "30px",
                lineHeight: "1",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "rotate(90deg)";
                  e.currentTarget.style.background = "#430a09";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "rotate(0deg)";
                  e.currentTarget.style.background = "#c6a75e";
                }
              }}
            >
              ×
            </button>

            {/* LARGE FLOOR PLAN IMAGE */}

            <img
              src={selectedFloorPlan}
              alt="S K Paradise Floor Plan"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: isMobile ? "82dvh" : "84dvh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          TOP REASONS
      ===================================================== */}

      <section
        id="reasons"
        style={{
          padding: isMobile ? "50px 5% 60px" : "65px 8% 75px",
          background: "#f5f1e8",
          overflow: "hidden",
          scrollMarginTop: isMobile ? "60px" : "65px",
        }}
      >
        <SectionTitle title="TOP REASONS TO BUY" />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            borderTop: "1px solid rgba(29,45,99,0.15)",
            borderBottom: "1px solid rgba(29,45,99,0.15)",
          }}
        >
          {[
            {
              number: "01",
              title: "Prime Location",
              description:
                "Excellent connectivity with the growing destination of Alibaug.",
            },
            {
              number: "02",
              title: "Premium Lifestyle",
              description:
                "Thoughtfully designed spaces for comfortable modern living.",
            },
            {
              number: "03",
              title: "Nature & Serenity",
              description:
                "Peaceful surroundings with the natural beauty of Alibaug.",
            },
            {
              number: "04",
              title: "Investment Potential",
              description:
                "A promising destination for residential living and future growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                padding: isMobile ? "28px 22px" : "34px 25px 38px",
                minHeight: isMobile ? "170px" : "205px",
                borderRight:
                  !isMobile && index !== 3
                    ? "1px solid rgba(29,45,99,0.14)"
                    : "none",
                borderBottom:
                  isMobile && index !== 3
                    ? "1px solid rgba(29,45,99,0.14)"
                    : "none",
                transition: "background 0.35s ease, transform 0.35s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                if (isMobile) return;

                e.currentTarget.style.background = "rgba(255,255,255,0.55)";

                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;

                e.currentTarget.style.background = "transparent";

                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* NUMBER */}

              <div
                style={{
                  color: "#c6a75e",
                  fontSize: isMobile ? "27px" : "32px",
                  fontWeight: "300",
                  lineHeight: "1",
                  letterSpacing: "1px",
                  marginBottom: "22px",
                }}
              >
                {item.number}
              </div>

              {/* GOLD DETAIL */}

              <div
                style={{
                  width: "28px",
                  height: "1px",
                  background: "#c6a75e",
                  marginBottom: "15px",
                }}
              />

              {/* TITLE */}

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#1d2d63",
                  fontSize: isMobile ? "17px" : "22px",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  lineHeight: "1.35",
                }}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                style={{
                  margin: 0,
                  color: "#666",
                  fontSize: isMobile ? "13px" : "16px",
                  lineHeight: "1.7",
                  letterSpacing: "0.15px",
                  maxWidth: "220px",
                }}
              >
                {item.description}
              </p>

              {/* BOTTOM ACCENT */}

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "25px",
                  width: isMobile ? "22px" : "28px",
                  height: "2px",
                  background: "#c6a75e",
                  opacity: 0.7,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
    AMENITIES
===================================================== */}

      <section
        id="amenities"
        style={{
          padding: isMobile ? "55px 20px" : "80px 8%",
          background: "#ddd",
          scrollMarginTop: isMobile ? "60px" : "65px",
        }}
      >
        <SectionTitle title="AMENITIES" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: "15px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          <GalleryImage
            image="/amenity1.jpeg"
            //   title="Swimming Pool"
            isMobile={isMobile}
          />
{/* 
          <GalleryImage
            image="/amenity2.png"
            //   title="Club House"
            isMobile={isMobile}
          /> */}

          <GalleryImage
            image="/stilt_parking.jpg"
            //   title="Car Park"
            isMobile={isMobile}
          />

          <GalleryImage
            image="/joggingtrek.png"
            //   title="Jogging Track"
            isMobile={isMobile}
          />

          <GalleryImage
            image="/lift.jpg"
            //   title="Jogging Track"
            isMobile={isMobile}
          />

          {/* <GalleryImage
            image="/children.jpg"
            //   title="Jogging Track"
            isMobile={isMobile}
          /> */}
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

{/* =====================================================
    LOCATION
===================================================== */}

<section
  id="location"
  style={{
    background: "#f5f1e8",
    color: "#1d2d63",
    padding: isMobile ? "50px 5% 60px" : "65px 8% 75px",
    overflow: "hidden",
    scrollMarginTop: isMobile ? "60px" : "65px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
      gap: isMobile ? "35px" : "65px",
      maxWidth: "1100px",
      margin: "auto",
      alignItems: "center",
    }}
  >

    {/* =================================================
        LEFT CONTENT
    ================================================= */}

    <div>
      <SectionTitle title="LOCATION & CONNECTIVITY" />

      {/* ADDRESS */}

      <div
        style={{
          margin: isMobile ? "22px 0 25px" : "25px 0 30px",
          padding: isMobile ? "20px 18px" : "24px 22px",
          background: "rgba(255,255,255,0.45)",
          borderLeft: "3px solid #c6a75e",
          boxShadow: "0 8px 25px rgba(29,45,99,0.05)",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            color: "#c6a75e",
            fontSize: isMobile ? "11px" : "12px",
            fontWeight: "600",
            letterSpacing: "1.8px",
          }}
        >
          OUR OFFICE
        </p>

        <p
          style={{
            margin: 0,
            color: "#1d2d63",
            fontSize: isMobile ? "15px" : "17px",
            lineHeight: "1.7",
            fontWeight: "500",
          }}
        >
          Damji Shamji Corporate Square,
          <br />
          302, B Wing, Laxmi Nagar,
          <br />
          Ghatkopar-E, Mumbai - 400 075.
        </p>
      </div>

      <p
        style={{
          margin: isMobile ? "22px 0 25px" : "25px 0 30px",
          maxWidth: "500px",
          color: "#666",
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: "1.8",
          letterSpacing: "0.2px",
        }}
      >
        Strategically located in Ghatkopar East, Mumbai,
        with convenient access to major roads, commercial
        destinations and key areas of the city.
      </p>

      {/* CONNECTIVITY GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid rgba(29,45,99,0.15)",
          borderLeft: "1px solid rgba(29,45,99,0.15)",
        }}
      >
        {[
          "CONNECTIVITY",
          "HOSPITALS",
          "SCHOOLS",
          "HIGHWAYS",
          "SHOPPING",
          "RESTAURANTS",
        ].map((title, index) => (
          <div
            key={index}
            style={{
              minHeight: isMobile ? "78px" : "88px",

              padding: isMobile
                ? "15px 12px"
                : "18px 17px",

              display: "flex",
              alignItems: "center",
              gap: "14px",

              borderRight:
                "1px solid rgba(29,45,99,0.15)",

              borderBottom:
                "1px solid rgba(29,45,99,0.15)",

              background:
                index % 2 === 0
                  ? "rgba(255,255,255,0.28)"
                  : "transparent",

              transition:
                "background 0.3s ease, transform 0.3s ease",

              cursor: "default",
            }}

            onMouseEnter={(e) => {
              if (isMobile) return;

              e.currentTarget.style.background = "#ffffff";

              e.currentTarget.style.transform =
                "translateY(-2px)";
            }}

            onMouseLeave={(e) => {
              if (isMobile) return;

              e.currentTarget.style.background =
                index % 2 === 0
                  ? "rgba(255,255,255,0.28)"
                  : "transparent";

              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            {/* NUMBER */}

            <span
              style={{
                color: "#c6a75e",
                fontSize: isMobile ? "12px" : "13px",
                fontWeight: "600",
                letterSpacing: "1px",
                minWidth: "22px",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* TITLE */}

            <span
              style={{
                color: "#1d2d63",
                fontSize: isMobile ? "14px" : "17px",
                fontWeight: "600",
                letterSpacing: "0.8px",
                lineHeight: "1.4",
              }}
            >
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>


    {/* =================================================
        RIGHT - GOOGLE MAP
    ================================================= */}

    <div
      style={{
        position: "relative",

        height: isMobile
          ? "320px"
          : "420px",

        background: "#e8e3d8",

        border:
          "1px solid rgba(29,45,99,0.14)",

        overflow: "hidden",

        boxShadow:
          "0 18px 45px rgba(29,45,99,0.10)",

        transition:
          "transform 0.4s ease, box-shadow 0.4s ease",
      }}

      onMouseEnter={(e) => {
        if (isMobile) return;

        e.currentTarget.style.transform =
          "translateY(-5px)";

        e.currentTarget.style.boxShadow =
          "0 25px 55px rgba(29,45,99,0.16)";
      }}

      onMouseLeave={(e) => {
        if (isMobile) return;

        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.boxShadow =
          "0 18px 45px rgba(29,45,99,0.10)";
      }}
    >

      {/* =================================================
          GOOGLE MAP
      ================================================= */}

      <iframe
        title="Damji Shamji Corporate Square Location"
        src="https://www.google.com/maps?q=Damji+Shamji+Corporate+Square,+302,+B+Wing,+Laxmi+Nagar,+Ghatkopar+East,+Mumbai+400075&output=embed"
        width="100%"
        height="100%"
        style={{
          border: "0",
          display: "block",
          filter:
            "saturate(0.8) contrast(0.95)",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />


      {/* =================================================
          PREMIUM GOLD FRAME
      ================================================= */}

      <div
        style={{
          position: "absolute",
          inset: "10px",

          border:
            "1px solid rgba(198,167,94,0.60)",

          pointerEvents: "none",

          zIndex: 2,
        }}
      />


      {/* =================================================
          LOCATION LABEL
      ================================================= */}

      <div
        style={{
          position: "absolute",

          left: isMobile
            ? "15px"
            : "25px",

          bottom: isMobile
            ? "15px"
            : "25px",

          maxWidth: isMobile
            ? "calc(100% - 30px)"
            : "330px",

          padding: isMobile
            ? "12px 15px"
            : "14px 20px",

          background:
            "rgba(245,241,232,0.95)",

          backdropFilter:
            "blur(8px)",

          border:
            "1px solid rgba(198,167,94,0.55)",

          boxShadow:
            "0 8px 25px rgba(0,0,0,0.12)",

          zIndex: 3,

          boxSizing: "border-box",
        }}
      >

        {/* LOCATION */}

        <p
          style={{
            margin: 0,

            color: "#1d2d63",

            fontSize: isMobile
              ? "15px"
              : "18px",

            fontWeight: "600",

            letterSpacing: "1.2px",

            lineHeight: "1.4",
          }}
        >
          GHATKOPAR EAST
        </p>

        <p
          style={{
            margin: "5px 0 0",

            color: "#777",

            fontSize: isMobile
              ? "9px"
              : "10px",

            letterSpacing: "1.3px",

            lineHeight: "1.5",
          }}
        >
          MUMBAI · MAHARASHTRA
        </p>


        {/* VIEW ON MAP */}

        <a
          href="https://maps.app.goo.gl/8rx3589zP9fTZy4YA"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",

            marginTop: "9px",

            color: "#c6a75e",

            fontSize: isMobile
              ? "9px"
              : "10px",

            fontWeight: "600",

            letterSpacing: "1.3px",

            textDecoration: "none",

            borderBottom:
              "1px solid rgba(198,167,94,0.6)",

            paddingBottom: "3px",
          }}
        >
          VIEW ON GOOGLE MAPS ↗
        </a>

      </div>


      {/* =================================================
          TOP RIGHT GOLD CORNER
      ================================================= */}

      <div
        style={{
          position: "absolute",

          top: 0,
          right: 0,

          width: "55px",
          height: "55px",

          borderTop:
            "2px solid #c6a75e",

          borderRight:
            "2px solid #c6a75e",

          pointerEvents: "none",

          zIndex: 4,
        }}
      />


      {/* =================================================
          BOTTOM LEFT GOLD CORNER
      ================================================= */}

      <div
        style={{
          position: "absolute",

          bottom: 0,
          left: 0,

          width: "55px",
          height: "55px",

          borderBottom:
            "2px solid #c6a75e",

          borderLeft:
            "2px solid #c6a75e",

          pointerEvents: "none",

          zIndex: 4,
        }}
      />


      {/* =================================================
          LOCATION BADGE
      ================================================= */}

      <div
        style={{
          position: "absolute",

          top: isMobile
            ? "18px"
            : "25px",

          right: isMobile
            ? "18px"
            : "25px",

          padding: "7px 11px",

          background:
            "rgba(29,45,99,0.88)",

          color: "#fff",

          fontSize: isMobile
            ? "9px"
            : "10px",

          letterSpacing: "1.3px",

          zIndex: 3,

          pointerEvents: "none",
        }}
      >
        LOCATION
      </div>

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ title, light = false }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "45px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "32px",
          letterSpacing: "2px",
          fontWeight: "600",
          color: light ? "#c6a75e" : "#222",
        }}
      >
        {title}
      </h2>

      <span
        style={{
          display: "block",
          width: "45px",
          height: "2px",
          background: light ? "#fff" : "#430a09",
          margin: "10px auto",
        }}
      />
    </div>
  );
}

/* =========================================================
   HIGHLIGHT
========================================================= */

function Highlight({ title, value }) {
  return (
    <div
      style={{
        background: "#430a09",
        color: "#fff",
        padding: "25px 20px",
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          opacity: 0.8,
          letterSpacing: "1px",
        }}
      >
        {title}
      </span>

      <strong
        style={{
          marginTop: "8px",
          fontSize: "17px",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

/* =========================================================
   CONFIGURATION
========================================================= */

function Configuration({ title, area, onEnquire }) {
  return (
    <div
      style={{
        background: "#430a09",
        color: "#fff",
        padding: "35px 25px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "22px",
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>

      <strong>{area}</strong>

      <button
        onClick={onEnquire}
        style={{
          display: "block",
          margin: "20px auto 0",
          border: "none",
          padding: "10px 20px",
          background: "#b08a3e",
          color: "#fff",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        ENQUIRE NOW
      </button>
    </div>
  );
}

/* =========================================================
   AMENITY
========================================================= */

function Amenity({ title }) {
  return (
    <div
      style={{
        minHeight: "120px",
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          color: "#b08a3e",
        }}
      >
        ◈
      </div>

      <span
        style={{
          fontSize: "13px",
        }}
      >
        {title}
      </span>
    </div>
  );
}

/* =========================================================
   REASON
========================================================= */

function Reason({ number, title, description }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #b08a3e",
        padding: "30px",
        minHeight: "230px",
      }}
    >
      <span
        style={{
          fontSize: "40px",
          color: "#d7d7d7",
        }}
      >
        {number}
      </span>

      <h3
        style={{
          color: "#430a09",
          fontSize: "18px",
          margin: "10px 0",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "13px",
          lineHeight: "1.7",
          color: "#666",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}


/* =========================================================
   AMENITY IMAGE
========================================================= */

function GalleryImage({ image, title, isMobile }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        background: "#fff",
        border: "1px solid rgba(198,167,94,0.35)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={image}
        alt={title || "S K Paradise Amenity"}
        style={{
          width: "100%",
          height: isMobile ? "180px" : "280px",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "scale(1.05)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "scale(1)";
          }
        }}
      />

      {/* AMENITY NAME */}

      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          padding: isMobile ? "12px 10px" : "15px 14px",
          background:
            "linear-gradient(to top, rgba(29,45,99,0.9), rgba(29,45,99,0))",
          color: "#fff",
          fontSize: isMobile ? "11px" : "13px",
          fontWeight: "600",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
    </div>
  );
}

/* =========================================================
   FLOOR PLAN
========================================================= */

function FloorPlan({ image, title, isMobile, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
        }
      }}
      style={{
        position: "relative",
        border: "1px solid #aaa",
        padding: "5px",
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        boxShadow: isHovered
          ? "0 15px 35px rgba(0,0,0,0.12)"
          : "0 5px 15px rgba(0,0,0,0.05)",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: isMobile ? "260px" : "280px",
          objectFit: "contain",
          display: "block",
          transform: isHovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* DARK HOVER OVERLAY */}

      <div
        style={{
          position: "absolute",
          inset: "5px",
          background: "rgba(29,45,99,0.45)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
      />

      {/* VIEW BUTTON */}

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: isHovered
            ? "translate(-50%, -50%)"
            : "translate(-50%, -40%)",
          opacity: isHovered || isMobile ? 1 : 0,
          background: "#c6a75e",
          color: "#fff",
          padding: isMobile ? "9px 14px" : "11px 18px",
          fontSize: isMobile ? "10px" : "11px",
          fontWeight: "600",
          letterSpacing: "1.5px",
          whiteSpace: "nowrap",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          pointerEvents: "none",
        }}
      >
        VIEW FLOOR PLAN
      </div>

      {/* TITLE */}

      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          padding: isMobile ? "12px 15px" : "14px 18px",
          background:
            "linear-gradient(to top, rgba(29,45,99,0.9), rgba(29,45,99,0))",
          color: "#fff",
          fontSize: isMobile ? "10px" : "11px",
          fontWeight: "600",
          letterSpacing: "1.5px",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {title}
      </div>
    </div>
  );
}

/* =========================================================
   CONNECTIVITY
========================================================= */

function Connectivity({ title }) {
  return (
    <div
      style={{
        background: "#fff",
        color: "#430a09",
        padding: "10px 15px",
        fontSize: "12px",
        fontWeight: "600",
      }}
    >
      {title}
    </div>
  );
}

/* =========================================================
   ABOUT STAT
========================================================= */

function AboutStat({ number, text }) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <strong
        style={{
          display: "block",
          fontSize: "35px",
          color: "#430a09",
        }}
      >
        {number}
      </strong>

      <span
        style={{
          fontSize: "13px",
          color: "#555",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default SKParadise;
