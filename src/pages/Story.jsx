import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaTruck,
  FaBriefcase,
  FaGraduationCap,
  FaCity,
  FaMicrochip,
  FaBuilding,
  FaHome,
  FaHardHat,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

function Story() {
  const location = useLocation();

  // ✅ RESPONSIVE FIX
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const gold = "#c6a75e";
  const softBg = "#f8f6f1";

  const stats = [
    { icon: <FaChartLine />, num: "6+", label: "Years Experience" },
    { icon: <FaBuilding />, num: "1M+", label: "Sq.Ft Delivered" },
    { icon: <FaHardHat />, num: "25+", label: "Projects" },
    { icon: <FaHome />, num: "10+", label: "Ongoing" },
    { icon: <FaUsers />, num: "50+", label: "Clients" },
    { icon: <FaCheckCircle />, num: "100%", label: "Commitment" },
  ];

  const ventures = [
    {
      icon: <FaHotel />,
      title: "Hospitality",
      desc: "Premium hotel expansion.",
    },
    { icon: <FaTruck />, title: "Logistics", desc: "Warehousing solutions." },
    { icon: <FaBriefcase />, title: "Finance", desc: "Financial ecosystem." },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "Future-ready learning.",
    },
    { icon: <FaCity />, title: "Townships", desc: "Urban development." },
    {
      icon: <FaMicrochip />,
      title: "Tech Parks",
      desc: "Next-gen infrastructure.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ================= ABOUT US ================= */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            background: "linear-gradient(135deg,#2b2b2b,#1f1f1f)",
            padding: isMobile ? "40px 5%" : "80px 7%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(3,1fr)",
              gap: isMobile ? "16px" : "32px",
            }}
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: isMobile ? "14px" : "20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                    color: "#fff",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    color: gold,
                    fontSize: isMobile ? "18px" : "26px",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  {item.num}
                </h3>

                <p
                  style={{
                    color: "#bbb",
                    fontSize: isMobile ? "14px" : "16px",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: "#f5f1e8",
            padding: isMobile ? "20px 6% 40px" : "30px 8% 70px",
            marginTop: isMobile ? "20px" : "0",
          }}
        >
          <div style={{ maxWidth: "820px" }}>
            <h2
              style={{
                fontSize: isMobile ? "26px" : "32px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                color: gold,
                marginBottom: "12px",
                lineHeight: "1.3",
              }}
            >
              Building More Than Spaces <br /> Creating Lasting Value
            </h2>

            <div
              style={{
                width: "50px",
                height: "2px",
                background: gold,
                marginBottom: "20px",
              }}
            />

            <p
              style={{
                color: "#222",
                lineHeight: "1.9",
                fontSize: isMobile ? "14px" : "16.5px",
                lineHeight: "2",
                letterSpacing: "0.3px",

                marginBottom: "14px",
                textAlign: "justify",
              }}
            >
              Founded with a vision to redefine the construction landscape, SNS
              GROUP combines decades of inherited industry wisdom with modern,
              efficient practices. Since our establishment in 2019, we have been
              committed to more than just building structures,
              <span style={{ color: gold, fontWeight: 500 }}>
                {" "}
                “We Create Values & Fulfil Dreams.”
              </span>
            </p>

            <p
              style={{
                color: "#333",
                lineHeight: "1.9",
                fontSize: isMobile ? "14px" : "16.5px",
                lineHeight: "2",
                letterSpacing: "0.3px",

                marginBottom: "14px",
                textAlign: "justify",
              }}
            >
              Today, we have successfully delivered over 1 million square feet
              of high-quality construction projects. From commercial hubs to
              bespoke residential developments, villas, and hospitality
              projects, our portfolio reflects a proven track record of meeting
              deadlines and exceeding standards.
            </p>

            <p
              style={{
                color: "#333",
                lineHeight: "1.9",
                fontSize: isMobile ? "14px" : "16.5px",
                lineHeight: "2",
                letterSpacing: "0.3px",
                textAlign: "justify",
              }}
            >
              Every project we undertake is driven by precision, quality, and a
              strong commitment to client satisfaction shaping spaces that
              inspire future living and long-term value.
            </p>
          </div>
        </motion.div>
      </section>

      {/* VALUES / MISSION / VISION - PREMIUM */}
<section
  style={{
    padding: isMobile ? "0 0 60px" : "100px 8%",
    background: "#f5f1e8",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "40px" : "90px",
      alignItems: "start",
    }}
  >
    {/* IMAGE */}
    <div
      style={{
        position: "relative",
        order: isMobile ? 1 : 2,
      }}
    >
      <img
        src="/journey4.jpg"
        alt=""
        style={{
          width: "100%",
          height: isMobile ? "260px" : "420px",
          objectFit: "cover",
          borderRadius: isMobile ? "0px" : "18px",
          boxShadow: isMobile ? "none" : "0 30px 70px rgba(0,0,0,0.2)",
        }}
      />

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            background: "#fff",
            padding: "20px 26px",
            borderRadius: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          }}
        >
          <h4 style={{ margin: 0, color: gold, fontSize: "18px" }}>
            Since 2019
          </h4>
          <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
            Building Trust & Value
          </p>
        </div>
      )}

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "120px",
            height: "120px",
            background: gold,
            opacity: 0.1,
            borderRadius: "50%",
            filter: "blur(20px)",
          }}
        />
      )}

      <h1
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          fontSize: isMobile ? "70px" : "140px", // 🔥 BIGGER
          fontWeight: "700",
          color: gold,
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        SNS
      </h1>
    </div>

    {/* CONTENT */}
    <div
      style={{
        order: isMobile ? 2 : 1,
        padding: isMobile ? "0 6%" : "0",
        textAlign: "justify",
      }}
    >
      {/* VALUES */}
      <div style={{ marginBottom: "40px" }}>
        <h3
          style={{
            color: gold,
            marginBottom: "12px",
            letterSpacing: "1px",
            fontSize: isMobile ? "20px" : "26px", // 🔥 INCREASED
          }}
        >
          VALUES
        </h3>

        <p
          style={{
            color: "#444",
            lineHeight: "2",
            fontSize: isMobile ? "16px" : "16.5px", // 🔥 INCREASED
          }}
        >
          SNS GROUP today is not just a company, but a{" "}
          <span style={{ color: gold, fontWeight: 600 }}>
            movement towards a better future.
          </span>{" "}
          We believe in a higher level of detailing whether in our projects or
          in the way we conduct business. This approach builds transparency,
          trust, and accountability in every relationship we create.
        </p>
      </div>

      {/* MISSION */}
      <div style={{ marginBottom: "40px" }}>
        <h3
          style={{
            color: gold,
            marginBottom: "12px",
            fontSize: isMobile ? "20px" : "26px",
          }}
        >
          MISSION
        </h3>

        <p
          style={{
            color: "#444",
            lineHeight: "2",
            fontSize: isMobile ? "16px" : "16.5px",
          }}
        >
          Innovation through strategic associations is at the core of our
          approach. We partner with like-minded individuals and organizations to
          ensure that every project we deliver stands as a landmark.
        </p>
      </div>

      {/* PHILOSOPHY */}
      <div style={{ marginBottom: "40px" }}>
        <h3
          style={{
            color: gold,
            marginBottom: "12px",
            fontSize: isMobile ? "20px" : "26px",
          }}
        >
          PHILOSOPHY
        </h3>

        <p
          style={{
            color: "#444",
            lineHeight: "2",
            fontSize: isMobile ? "16px" : "16.5px",
          }}
        >
          We strive for qualitative and sustained growth, aiming to achieve
          larger milestones while keeping our integrity and core philosophies
          uncompromised.
        </p>
      </div>

      {/* VISION */}
      <div>
        <h3
          style={{
            color: gold,
            marginBottom: "12px",
            fontSize: isMobile ? "20px" : "26px",
          }}
        >
          VISION
        </h3>

        <p
          style={{
            color: "#444",
            lineHeight: "2",
            fontSize: isMobile ? "16px" : "16.5px",
          }}
        >
          We aim to be innovators rather than followers of new-age ideologies.
          Building on our strong foundation, every opportunity is embraced with
          enthusiasm to grow further. We take pride in our work and brand equity
          over individual recognition.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ================= $50K AGENCY STRENGTHS ================= */}
      <section
        id="strength"
        style={{
          padding: isMobile ? "20px 5% 40px" : "30px 8% 40px", // 🔥 REDUCED TOP SPACE
          background: "#f5f1e8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* AMBIENT LIGHT */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            left: "-180px",
            width: "420px",
            height: "420px",
            background: "#c6a75e",
            opacity: 0.05,
            filter: "blur(150px)",
          }}
        />

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          {" "}
          {/* 🔥 reduced */}
          <p
            style={{
              color: "#353534",
              letterSpacing: "3px",
              fontSize: "14px",
              marginBottom: "18px",
              marginTop: 0,
              fontWeight: "500",
            }}
          >
            CORE STRENGTH
          </p>
          <h2
            style={{
              fontSize: isMobile ? "26px" : "42px",
              fontWeight: "800",
              color: "#c6a75e",
              lineHeight: "1.25",
              margin: 0,
              marginTop: "0px", // 🔥 removed top margin
            }}
          >
            Key Differentiators and Strength
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

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(260px,1fr))",
            gap: isMobile ? "25px" : "40px",
            perspective: "1200px",
          }}
        >
          {[
            [
              FaClock,
              "Timely Delivery",
              "We consistently deliver ahead of timelines with precision execution.",
            ],
            [
              FaShieldAlt,
              "Ethical Practices",
              "Transparency and fairness define every partnership we build.",
            ],
            [
              FaCogs,
              "Strong Integrity",
              "Our values remain uncompromised across every project.",
            ],
            [
              FaRocket,
              "Future Innovation",
              "We continuously evolve to shape tomorrow’s living spaces.",
            ],
          ].map((item, i) => {
            const Icon = item[0];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  onMouseMove={(e) => {
                    if (isMobile) return;

                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = -(y - centerY) / 14;
                    const rotateY = (x - centerX) / 14;

                    e.currentTarget.style.transform = `
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.03)
              `;

                    e.currentTarget.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(198,167,94,0.18), rgba(255,255,255,0.7))
              `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "rotateX(0deg) rotateY(0deg) scale(1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                  }}
                  style={{
                    padding: isMobile ? "22px" : "30px",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    borderRadius: "16px",
                    boxShadow: "0 25px 70px rgba(0,0,0,0.06)",
                    transition: "all 0.25s ease",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* ICON */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "#c6a75e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      boxShadow: "0 10px 25px rgba(198,167,94,0.4)",
                      transform: "translateZ(30px)",
                    }}
                  >
                    <Icon size={22} color="#fff" />
                  </motion.div>

                  {/* TITLE */}
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#111",
                      marginBottom: "8px",
                      transform: "translateZ(20px)",
                    }}
                  >
                    {item[1]}
                  </h3>

                  {/* TEXT */}
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16.5px",
                      lineHeight: "1.8",
                      transform: "translateZ(10px)",
                    }}
                  >
                    {item[2]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        id="leadership"
        style={{
          padding: isMobile ? "50px 5%" : "80px 6%",
          background: "#f5f1e8",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px,3.5vw,40px)",
            color: "#c6a75e",
            marginBottom: isMobile ? "40px" : "50px",
            letterSpacing: "1px",
            fontWeight: "800",
          }}
        >
          THE LEADERSHIP
        </h2>

        {/* LIST */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "28px" : "30px",
            maxWidth: "950px",
            margin: "0 auto",
            textAlign: "justify", // ✅ FIXED
          }}
        >
          {[
            {
              img: "Ranjeet.jpg",
              name: "MR.RANJEET MAHATRE",
              role: "ARCHITECT",
              desc: "Mr. Ranjeet Mahatre began his career as a Real Estate Consultant and Architect, developing a strong eye for structural precision and execution. His leadership transformed SNS Group into a trusted name known for quality and timely delivery.",
            },
            {
              img: "Amit.jpg",
              name: "MR. AMIT SHAH",
              role: "CHIEF FINANCIAL HEAD (CFO)",
              desc: "Amit Shah drives financial strategy, operational excellence, and long-term value creation. He bridges day-to-day financial control with scalable business growth.",
            },
            {
              img: "Nishant.jpg",
              name: "MR. NISHANT SANGHAVI",
              role: "CIVIL ENGINEER (CENG)",
              desc: "Nishant Sanghavi leads execution, acquisitions, and operations with engineering precision, contributing significantly to the company’s rapid expansion.",
            },
            {
              img: "Suketu.jpg",
              name: "MR. SUKETU JOSHI",
              role: "CHIEF BUSINESS HEAD (CBO)",
              desc: "Suketu Joshi drives acquisitions and investor relations, ensuring growth through strategic expansion and strong compliance frameworks.",
            },
            {
              img: "Aayush.jpg",
              name: "MR. AAYUSH SHAH",
              role: "INNOVATION HEAD (CIO)",
              desc: "Aayush Shah leads digital innovation and storytelling, elevating project presentation through cutting-edge design and technology.",
            },
          ].map((l, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                gap: isMobile ? "16px" : "22px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  width: isMobile ? "100%" : "90px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={`/${l.img}`}
                  alt={l.name}
                  style={{
                    width: "100%",
                    height: "auto", // ✅ FIXED (no cropping)
                    objectFit: "contain", // ✅ FULL IMAGE VISIBLE
                    borderRadius: "6px",
                    maxHeight: isMobile ? "300px" : "90px", // optional control
                  }}
                />
              </div>

              {/* TEXT */}
              <div
                style={{
                  textAlign: isMobile ? "center" : "left",
                  maxWidth: "650px",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "22px" : "24px",
letterSpacing: "0.4px",
                    fontWeight: "700",
                    color: "#111",
                    marginBottom: "4px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {l.name}
                </h3>

                <p
                  style={{
                    color: "#c6a75e",
                    fontSize: isMobile ? "14px" : "16px",
                    marginBottom: "8px",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  {l.role}
                </p>

                <p
                  style={{
                    color: "#444",
                    lineHeight: "1.7",
                    fontSize: isMobile ? "16px" : "16.5px",
                  }}
                >
                  {l.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENTURES */}
<section
  id="ventures"
  style={{
    padding: isMobile ? "60px 5%" : "80px 6%",
    background: softBg,
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: isMobile ? "30px" : "40px", // 🔥 INCREASED
      color: gold,
      marginBottom: isMobile ? "40px" : "55px",
      letterSpacing: "1px",
      fontWeight: "800",
    }}
  >
    OTHER GROUP VENTURES
  </h2>

  <div
    style={{
      position: "relative",
      maxWidth: "820px",
      margin: "0 auto",
      paddingLeft: isMobile ? "30px" : "35px",
    }}
  >
    {/* Vertical Line */}
    <div
      style={{
        position: "absolute",
        left: "10px",
        top: 0,
        bottom: 0,
        width: "1.5px",
        background: gold,
        opacity: 0.2,
      }}
    />

    {ventures.map((v, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: i * 0.1,
        }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          marginBottom: isMobile ? "30px" : "36px",
          paddingLeft: "18px",
        }}
      >
        {/* Dot */}
        <div
          style={{
            position: "absolute",
            left: "-20px",
            top: "6px",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: gold,
            boxShadow: "0 0 0 4px rgba(212,175,55,0.12)",
          }}
        />

        {/* Card */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            background: "#fff",
            padding: isMobile ? "16px 18px" : "18px 20px",
            borderRadius: "10px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
            alignItems: "flex-start",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 6px 18px rgba(0,0,0,0.05)";
          }}
        >
          {/* Icon */}
          <div
            style={{
              fontSize: "22px", // 🔥 INCREASED
              color: gold,
              marginTop: "2px",
              minWidth: "26px",
            }}
          >
            {v.icon}
          </div>

          {/* Text */}
          <div>
            <h4
              style={{
                margin: "0 0 6px 0",
                fontSize: "18.5px", // 🔥 INCREASED
                color: "#111",
                fontWeight: "600",
                letterSpacing: "0.3px",
              }}
            >
              {v.title}
            </h4>

            <p
              style={{
                margin: 0,
                color: "#555",
                lineHeight: "1.7",
                fontSize: isMobile ? "15px" : "16.5px", // 🔥 MAIN TEXT INCREASED
              }}
            >
              {v.desc}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      <Footer />
    </>
  );
}

export default Story;
