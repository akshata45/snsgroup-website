import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setSuccess(true);

    const msg = `Hello, I'm ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Project: ${form.project}
Message: ${form.message}`;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  // 🔥 Premium styles
  const inputPremium = {
    width: "100%",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
    color: "#000",
  };

  const labelPremium = {
    position: "absolute",
    top: "-8px",
    left: "12px",
    background: "#fff",
    padding: "0 5px",
    fontSize: "12px",
    color: "#777",
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#f5f1e8",
          padding: isMobile ? "40px 15px" : "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* HEADING */}
          <h2
            style={{
              fontSize: "20px",
              letterSpacing: "2px",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            CONTACT US
          </h2>

          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#b88a2a",
              marginBottom: "40px",
            }}
          />

          {/* MAIN SECTION */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "30px",
            }}
          >
            {/* LEFT INFO */}
            <div
              style={{
                flex: 1,
                background: "#eae1d3",
                padding: isMobile ? "25px" : "40px",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <h4 style={{ color: "#b88a2a", fontSize: "14px" }}>
                  📍 HEAD OFFICE
                </h4>
                <p
                  style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}
                >
                  Surya House, ONGC Colony, Vidya Vihar East, Vidyavihar,
                  Mumbai, Maharashtra - 400077
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h4 style={{ color: "#b88a2a", fontSize: "14px" }}>📞 PHONE</h4>
                <a href="tel:+919999999999">+91-9999999999</a>
              </div>

              <div>
                <h4 style={{ color: "#b88a2a", fontSize: "14px" }}>✉ EMAIL</h4>
                <a href="mailto:info@snsgroup.one">info@snsgroup.one</a>
              </div>
            </div>

            {/* MAP */}
            <div style={{ flex: 1 }}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.688204333282!2d72.8987664!3d19.077441600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8829dd1f08b%3A0x901e75397e8354e3!2sSurya%20House%2C%20Mumbai!5e0!3m2!1sen!2sin"
                style={{
                  width: "100%",
                  height: isMobile ? "280px" : "420px",
                  border: 0,
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* 🔥 ULTRA PREMIUM FORM */}
          <div
            style={{
              marginTop: "70px",
              backdropFilter: "blur(20px)",
              background: "rgba(255,255,255,0.7)",
              padding: isMobile ? "25px" : "50px",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "26px",
                marginBottom: "30px",
                color: "#000",
              }}
            >
              Get In Touch
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "25px",
                columnGap: "40px", // 👈 horizontal space FIX
                rowGap: "25px", // 👈 vertical space
              }}
            >
              {[
                { name: "name", label: "Full Name" },
                { name: "phone", label: "Phone Number" },
                { name: "email", label: "Email Address" },
                { name: "project", label: "Interested Project" },
              ].map((field) => (
                <div key={field.name} style={{ position: "relative" }}>
                  <input
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    required={field.name === "name" || field.name === "phone"}
                    style={inputPremium}
                  />
                  <label style={labelPremium}>{field.label}</label>
                </div>
              ))}

              <div style={{ gridColumn: "1 / -1", position: "relative" }}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  style={{ ...inputPremium, resize: "none" }}
                />
                <label style={labelPremium}>Your Message</label>
              </div>

              <button
                type="submit"
                style={{
                  gridColumn: "1 / -1",
                  width: "fit-content",
                  margin: "10px auto 0",
                  padding: "14px 30px",
                  background: "linear-gradient(135deg, #b88a2a, #d4af37)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                SUBMIT ENQUIRY
              </button>
            </form>

            {success && (
              <p style={{ marginTop: "15px", color: "green" }}>
                ✅ Enquiry submitted successfully!
              </p>
            )}

            {/* WhatsApp */}
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  background: "#128c7e",
                  color: "#fff",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
