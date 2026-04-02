import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { FaClock, FaShieldAlt, FaCogs, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaTruck,
  FaBriefcase,
  FaGraduationCap,
  FaCity,
  FaMicrochip
} from "react-icons/fa";
const ventures = [
  {
    icon: <FaHotel />,
    title: "Hospitality",
    desc: "Premium hotel and experience-driven expansion."
  },
  {
    icon: <FaTruck />,
    title: "Logistics",
    desc: "Advanced logistics and warehousing solutions."
  },
  {
    icon: <FaBriefcase />,
    title: "Finance",
    desc: "Value-driven financial services ecosystem."
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    desc: "Strategic investments in future-ready learning."
  },
  {
    icon: <FaCity />,
    title: "Townships",
    desc: "Integrated township and urban development."
  },
  {
    icon: <FaMicrochip />,
    title: "Technology Parks",
    desc: "Infrastructure for next-gen tech ecosystems."
  }
];




function Story() {

  const location = useLocation();

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

  const isMobile = window.innerWidth < 768;

  const gold = "#c6a75e";
  const dark = "#1a1a1a";
  const softBg = "#f8f6f1";

  return (
    <>
      <Navbar />

      {/* ABOUT */}
<section style={{
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: isMobile ? "70px 5%" : "120px 8%",
  background: "linear-gradient(135deg,#f8f6f1,#ffffff)",
  gap: isMobile ? "40px" : "80px"
}}>

  {/* IMAGE */}
  <div style={{
    flex: "1 1 480px",
    display: "flex",
    justifyContent: "center"
  }}>
    <img src="/about.jpeg" alt=""
      style={{
        width: isMobile ? "100%" : "85%",
        height: isMobile ? "240px" : "400px",
        objectFit: "cover",
        borderRadius: "26px",
        boxShadow: "0 25px 70px rgba(0,0,0,0.15)"
      }}
    />
  </div>

  {/* CONTENT */}
  <div style={{
    flex: "1 1 480px",
    maxWidth: "560px"
  }}>
    <h1 style={{
      fontSize: isMobile ? "28px" : "46px",
      color: gold,
      marginBottom: "20px",
      letterSpacing: "1.2px",
      fontWeight: "600"
    }}>
      About SNS GROUP
    </h1>

    <div style={{
      width: "60px",
      height: "3px",
      background: gold,
      marginBottom: "25px"
    }} />

    <p style={{
      lineHeight: "1.9",
      color: "#555",
      fontSize: "15.5px",
      textAlign: "justify",
      marginBottom: "18px"
    }}>
      Founded in 2019, SNS GROUP was established with a vision to redefine the construction landscape by blending traditional expertise with modern execution.
    </p>

    <p style={{
      lineHeight: "1.9",
      color: "#555",
      fontSize: "15.5px",
      textAlign: "justify",
      marginBottom: "18px"
    }}>
      With over 1 million sq. ft. delivered, we specialize in residential, commercial, villa, and hospitality developments.
    </p>

    <p style={{
      lineHeight: "1.9",
      color: "#555",
      fontSize: "15.5px",
      textAlign: "justify"
    }}>
      We create long-term value, trust, and meaningful spaces that fulfill dreams.
    </p>
  </div>

</section>


{/* JOURNEY */}
<section style={{
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: isMobile ? "80px 5%" : "130px 8%",
  background: "#ffffff",
  gap: isMobile ? "40px" : "80px",
  borderTop: "1px solid rgba(0,0,0,0.05)"
}}>

  {/* CONTENT */}
  <div style={{
    flex: "1 1 480px",
    maxWidth: "560px"
  }}>
    <h2 style={{
      fontSize: isMobile ? "26px" : "40px",
      color: gold,
      marginBottom: "20px",
      fontWeight: "600",
      letterSpacing: "1.2px"
    }}>
      OUR JOURNEY
    </h2>

    <div style={{
      width: "60px",
      height: "3px",
      background: gold,
      marginBottom: "25px"
    }} />

    <p style={{
      color: "#555",
      lineHeight: "1.9",
      fontSize: "15.5px",
      textAlign: "justify"
    }}>
      SNS GROUP was born from a strong foundation of industry knowledge and a passion for excellence.
      What started as a vision has evolved into a trusted name known for quality, transparency, and timely delivery.
    </p>

    <button style={{
      marginTop: "35px",
      padding: "14px 38px",
      background: "linear-gradient(135deg,#c6a75e,#b8964f)",
      color: "#fff",
      border: "none",
      borderRadius: "50px",
      letterSpacing: "1px",
      cursor: "pointer",
      fontSize: "14px",
      boxShadow: "0 15px 35px rgba(198,167,94,0.35)"
    }}>
      Know More
    </button>
  </div>

  {/* IMAGE */}
  <div style={{
    flex: "1 1 480px",
    display: "flex",
    justifyContent: "center"
  }}>
    <img src="/journey1.jpg" alt=""
      style={{
        width: isMobile ? "100%" : "85%",
        height: isMobile ? "240px" : "400px",
        objectFit: "cover",
        borderRadius: "26px",
        boxShadow: "0 25px 70px rgba(0,0,0,0.15)"
      }}
    />
  </div>

</section>

      {/* STRENGTHS */}
<section id="strength" style={{
  padding: "100px 5%",
  background: "linear-gradient(180deg,#f8f6f1,#f3efe6)"
}}>

  <h2 style={{
    textAlign: "center",
    fontSize: "clamp(26px, 4vw, 40px)",
    color: "#c6a75e",
    marginBottom: "80px",
    letterSpacing: "1px"
  }}>
    KEY DIFFERENTIATORS AND <br /> STRENGTHS
  </h2>

  {/* WRAPPER (for divider positioning) */}
  <div style={{ position: "relative" }}>

    {/* VERTICAL DIVIDER (desktop only) */}
    <div style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "1px",
      background: "linear-gradient(to bottom, transparent, #e2d8c3, transparent)",
      display: window.innerWidth > 768 ? "block" : "none"
    }} />

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      gap: "60px 80px",
      alignItems: "start"
    }}>

      {[ 
        [FaClock, "THE ABILITY TO DELIVER ON TIME", "We stay true to commitments and deliver before deadlines."],
        [FaShieldAlt, "THE GUARANTEE OF FAIR PRACTICES", "Transparency and ethical practices define our work."],
        [FaCogs, "THE STAMP OF UNSHAKEABLE INTEGRITY", "We uphold strong moral values in every project."],
        [FaRocket, "UNLIMITED POTENTIAL", "We empower customers with excellence and innovation."]
      ].map((item, i) => {

        const Icon = item[0];

        return (
          <div key={i}
            style={{
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >

            <div style={{
              display: "flex",
              gap: "18px",
              alignItems: "flex-start"
            }}>

              {/* ICON */}
              <div style={{
                width: "60px",
                height: "60px",
                minWidth: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
                marginTop: "4px"
              }}>
                <Icon size={24} color="#c6a75e" />
              </div>

              {/* TITLE */}
              <h3 style={{
                color: "#c6a75e",
                fontSize: "18px",
                lineHeight: "1.5",
                fontWeight: "600",
                margin: 0,
                maxWidth: "260px"
              }}>
                {item[1]}
              </h3>

            </div>

            {/* DESCRIPTION */}
            <p style={{
              marginTop: "14px",
              marginLeft: "78px",
              color: "#444",
              lineHeight: "1.8",
              fontSize: "15px",
              maxWidth: "420px"
            }}>
              {item[2]}
            </p>

          </div>
        );
      })}

    </div>

  </div>

</section>

      {/* LEADERSHIP */}
<section style={{
  padding: "120px 6%",
  background: "linear-gradient(180deg,#ffffff,#f8f6f1)",
  position: "relative"
}}>

  <h2 style={{
    textAlign: "center",
    fontSize: "clamp(26px,4vw,40px)",
    color: "#c6a75e",
    marginBottom: "90px",
    letterSpacing: "1px"
  }}>
    THE LEADERSHIP
  </h2>

  {/* DIVIDER (HIDDEN ON MOBILE) */}
  <div style={{
    position: "absolute",
    top: "200px",
    bottom: "0",
    left: "50%",
    width: "1px",
    background: "linear-gradient(to bottom, transparent, #e2d8c3, transparent)",
    display: window.innerWidth > 768 ? "block" : "none"
  }} />

  <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "90px"
  }}>

    {[
      {
        img: "Ranjeet.jpg",
        name: "MR. RANJEET MAHATRE",
        role: "ARCHITECT",
        desc: "Mr. Ranjeet Mahatre began his career as a Real Estate Consultant and Architect, developing a strong eye for structural precision and execution. His leadership transformed SNS Group into a trusted name known for quality and timely delivery."
      },
      {
        img: "Amit.jpg",
        name: "MR. AMIT SHAH",
        role: "CHIEF FINANCIAL HEAD (CFO)",
        desc: "Amit Shah drives financial strategy, operational excellence, and long-term value creation. He bridges day-to-day financial control with scalable business growth."
      },
      {
        img: "Nishant.jpg",
        name: "MR. NISHANT SANGHAVI",
        role: "CIVIL ENGINEER (CENG)",
        desc: "Nishant Sanghavi leads execution, acquisitions, and operations with engineering precision, contributing significantly to the company’s rapid expansion."
      },
      {
        img: "Suketu.jpg",
        name: "MR. SUKETU JOSHI",
        role: "CHIEF BUSINESS HEAD (CBO)",
        desc: "Suketu Joshi drives acquisitions and investor relations, ensuring growth through strategic expansion and strong compliance frameworks."
      },
      {
        img: "Aayush.jpg",
        name: "MR. AAYUSH SHAH",
        role: "INNOVATION HEAD (CIO)",
        desc: "Aayush Shah leads digital innovation and storytelling, elevating project presentation through cutting-edge design and technology."
      }
    ].map((l, i) => {

      const isLeft = i % 2 === 0;

      return (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768
              ? "1fr 1fr"
              : "1fr",
            alignItems: "center",
            gap: "50px",
            opacity: 0,
            transform: "translateY(60px)",
            animation: "fadeUp 0.8s ease forwards",
            animationDelay: `${i * 0.2}s`
          }}
        >

          {/* IMAGE */}
          <div style={{
            order: window.innerWidth > 768
              ? (isLeft ? 1 : 2)
              : 1,
            display: "flex",
            justifyContent: "center"
          }}>
            <img src={`/${l.img}`} alt=""
              style={{
                width: "100%",
                maxWidth: "260px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                transition: "all 0.5s ease"
              }}
              onMouseEnter={(e)=>{
                e.currentTarget.style.transform="scale(1.06)";
              }}
              onMouseLeave={(e)=>{
                e.currentTarget.style.transform="scale(1)";
              }}
            />
          </div>

          {/* TEXT */}
          <div style={{
            order: window.innerWidth > 768
              ? (isLeft ? 2 : 1)
              : 2,
            maxWidth: "520px",
            margin: "0 auto",
            textAlign: window.innerWidth > 768 ? "left" : "center"
          }}>

            <h3 style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#111",
              marginBottom: "6px"
            }}>
              {l.name}
            </h3>

            <p style={{
              color: "#c6a75e",
              fontSize: "13px",
              marginBottom: "15px",
              letterSpacing: "1px"
            }}>
              {l.role}
            </p>

            <p style={{
              color: "#222",
              lineHeight: "1.9",
              fontSize: "15px"
            }}>
              {l.desc}
            </p>

          </div>

        </div>
      );
    })}

  </div>

  {/* ANIMATION KEYFRAMES */}
  <style>
    {`
      @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>

</section>

      {/* VENTURES */}
<section style={{ padding: "120px 6%", background: softBg }}>

      <h2 style={{
        textAlign: "center",
        fontSize: isMobile ? "28px" : "42px",
        color: gold,
        marginBottom: "80px",
        letterSpacing: "1px"
      }}>
        OTHER <br /> GROUP VENTURES
      </h2>

      <div style={{
        position: "relative",
        maxWidth: "900px",
        margin: "0 auto",
        paddingLeft: "40px"
      }}>

        {/* Vertical Line */}
        <div style={{
          position: "absolute",
          left: "14px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: gold,
          opacity: 0.25
        }} />

        {ventures.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15
            }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "50px",
              paddingLeft: "20px"
            }}
          >

            {/* Timeline Dot */}
            <div style={{
              position: "absolute",
              left: "-26px",
              top: "8px",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: gold,
              boxShadow: "0 0 0 6px rgba(212,175,55,0.15)"
            }} />

            {/* Card */}
            <div style={{
              display: "flex",
              gap: "18px",
              background: "#fff",
              padding: "22px 26px",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              alignItems: "flex-start"
            }}>

              {/* Icon */}
              <div style={{
                fontSize: "20px",
                color: gold,
                marginTop: "3px",
                minWidth: "24px"
              }}>
                {v.icon}
              </div>

              {/* Text */}
              <div>
                <h4 style={{
                  margin: "0 0 6px 0",
                  fontSize: "18px",
                  color: "#111",
                  fontWeight: "600"
                }}>
                  {v.title}
                </h4>

                <p style={{
                  margin: 0,
                  color: "#666",
                  lineHeight: "1.6",
                  fontSize: isMobile ? "14px" : "15px"
                }}>
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