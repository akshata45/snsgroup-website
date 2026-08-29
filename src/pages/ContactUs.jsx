import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const formRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const keyMap = {
      from_name: "name",
      from_email: "email",
      phone: "phone",
      project_name: "project",
      message: "message",
    };

    setForm({
      ...form,
      [keyMap[e.target.name]]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    emailjs
      .sendForm(
        "service_q3r5s1p",
        "template_v931h27",
        formRef.current,
        "AjSolrByjuK-GsN6g",
      )
      .then(
        () => {
          setSuccess(true);

          // Reset Form
          setForm({
            name: "",
            phone: "",
            email: "",
            project: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send enquiry");
        },
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
    fontSize: "17.5px",
    color: "#000",
    fontweight: "400",
  };

  const labelPremium = {
    position: "absolute",
    top: "-8px",
    left: "12px",
    background: "#fff",
    padding: "0 5px",
    fontSize: "17.5px",
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
              fontSize: "22px",
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
                <h4 style={{ color: "#b88a2a", fontSize: "17.5px" }}>
                  📍 HEAD OFFICE
                </h4>
                <p
                  style={{
                    fontSize: "17.5px",
                    color: "#555",
                    lineHeight: "1.8",
                  }}
                >
                  Damji Shamji Corporate Square, 302, B Wing, Laxmi Nagar,
                  Ghatkopar-E, Mumbai- 400 075.
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h4 style={{ color: "#b88a2a", fontSize: "17.5px" }}>
                  📞 PHONE
                </h4>
                <a href="tel: +918879781001">
                  {" "}
                  +91 88797 81001 / +91 77982 41040
                </a>
              </div>

              <div>
                <h4 style={{ color: "#b88a2a", fontSize: "17.5px" }}>
                  ✉ EMAIL
                </h4>
                <a href="mailto:sales@snsgroup.one">sales@snsgroup.one</a>
              </div>
            </div>

            {/* MAP */}
            <div style={{ flex: 1 }}>
              <iframe
                title="Damji Shamji Corporate Square Location"
                src="https://www.google.com/maps?q=Damji+Shamji+Corporate+Square,+Mumbai&output=embed"
                style={{
                  width: "100%",
                  height: isMobile ? "280px" : "420px",
                  border: 0,
                  display: "block",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 🔥 ULTRA PREMIUM FORM */}
          <div
            style={{
              marginTop: "70px",
              background: "#ffffff",
              borderRadius: "30px",
              padding: isMobile ? "28px 20px" : "60px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              border: "1px solid #ececec",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <style>
              {`
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus {
        -webkit-text-fill-color: #000 !important;
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
        box-shadow: 0 0 0px 1000px #ffffff inset !important;
        transition: background-color 5000s ease-in-out 0s;
        caret-color: #000 !important;
      }

      input,
      textarea {
        background: #ffffff !important;
        color: #000000 !important;
      }

      input::placeholder,
      textarea::placeholder {
        color: #8b8b8b;
      }
    `}
            </style>

            <h3
              style={{
                fontSize: isMobile ? "30px" : "40px",
                fontWeight: "500",
                color: "#1f2937",
                marginBottom: "14px",
                letterSpacing: "-0.6px",
              }}
            >
              Get In Touch
            </h3>

            <p
              style={{
                color: "#6b7280",
                fontSize: "16px",
                marginBottom: "48px",
                lineHeight: "1.8",
                maxWidth: "650px",
                fontWeight: "400",
              }}
            >
              Share your requirements and our team will connect with you shortly
              with personalized assistance.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "34px",
                columnGap: "38px",
              }}
            >
              <input type="hidden" name="form_type" value="Contact Inquiry" />

              {[
                {
                  inputName: "from_name",
                  stateName: "name",
                  label: "Full Name",
                },
                {
                  inputName: "phone",
                  stateName: "phone",
                  label: "Phone Number",
                },
                {
                  inputName: "from_email",
                  stateName: "email",
                  label: "Email Address",
                },
                {
                  inputName: "project_name",
                  stateName: "project",
                  label: "Interested Project",
                },
              ].map((field) => (
                <div
                  key={field.inputName}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "15px",
                      color: "#374151",
                      fontWeight: "500",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {field.label}
                  </label>

                  <input
                    type="text"
                    name={field.inputName}
                    value={form[field.stateName]}
                    onChange={handleChange}
                    required={
                      field.stateName === "name" || field.stateName === "phone"
                    }
                    style={{
                      width: "100%",
                      height: "60px",
                      padding: "0 20px",
                      borderRadius: "16px",
                      border: "1px solid #d6d6d6",
                      background: "#ffffff",
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: "500",
                      outline: "none",
                      transition: "0.3s ease",
                      boxSizing: "border-box",
                      caretColor: "#000",
                      WebkitTextFillColor: "#000",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "1px solid #b88a2a";
                      e.target.style.boxShadow = "none";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid #d6d6d6";
                    }}
                  />
                </div>
              ))}

              <div
                style={{
                  gridColumn: "1 / -1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <label
                  style={{
                    fontSize: "15px",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  style={{
                    width: "100%",
                    minHeight: "140px",
                    padding: "18px 20px",
                    borderRadius: "16px",
                    border: "1px solid #d6d6d6",
                    background: "#ffffff",
                    fontSize: "16px",
                    color: "#000000",
                    fontWeight: "500",
                    caretColor: "#000",
                    WebkitTextFillColor: "#000",
                    outline: "none",
                    transition: "0.3s ease",
                    boxSizing: "border-box",
                    resize: "none",
                    appearance: "none",
                    WebkitAppearance: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid #b88a2a";
                    e.target.style.boxShadow = "none";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid #d6d6d6";
                  }}
                />
              </div>

              <div
                style={{
                  gridColumn: "1 / -1",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                    color: "#fff",
                    border: "none",
                    padding: isMobile ? "16px 34px" : "18px 48px",
                    borderRadius: "16px",
                    fontSize: "15px",
                    letterSpacing: "1.2px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.35s ease",
                    boxShadow: "0 16px 35px rgba(184,138,42,0.25)",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 24px 40px rgba(184,138,42,0.35)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 16px 35px rgba(184,138,42,0.25)";
                  }}
                >
                  SUBMIT ENQUIRY
                </button>
              </div>
            </form>

            {success && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  padding: isMobile ? "18px" : "25px",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    padding: isMobile ? "30px 20px" : "45px",
                    borderRadius: isMobile ? "22px" : "26px",
                    width: "100%",
                    maxWidth: isMobile ? "100%" : "430px",
                    textAlign: "center",
                    boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
                    animation: "popupFade 0.35s ease",
                  }}
                >
                  {/* ICON */}
                  <div
                    style={{
                      width: isMobile ? "72px" : "82px",
                      height: isMobile ? "72px" : "82px",
                      margin: "0 auto 20px",
                      borderRadius: "50%",
                      background: "#fcfcfc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isMobile ? "34px" : "38px",
                    }}
                  >
                    ✅
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      fontSize: isMobile ? "24px" : "30px",
                      color: "#111827",
                      marginBottom: "14px",
                      fontWeight: "600",
                      lineHeight: "1.3",
                    }}
                  >
                    Inquiry Submitted
                  </h3>

                  {/* TEXT */}
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: "1.8",
                      fontSize: isMobile ? "14px" : "15px",
                      marginBottom: "28px",
                      padding: isMobile ? "0 5px" : "0",
                    }}
                  >
                    Thank you for contacting SNS GROUP. Our team will connect
                    with you shortly.
                  </p>

                  {/* BUTTON */}
                  <button
                    onClick={() => setSuccess(false)}
                    style={{
                      background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                      color: "#fff",
                      border: "none",
                      width: isMobile ? "100%" : "auto",
                      padding: isMobile ? "15px 20px" : "14px 36px",
                      borderRadius: "14px",
                      cursor: "pointer",
                      fontSize: isMobile ? "14px" : "15px",
                      fontWeight: "600",
                      letterSpacing: "0.5px",
                      transition: "0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
