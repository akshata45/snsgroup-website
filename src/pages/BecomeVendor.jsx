import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BecomeVendor = () => {
  const formRef = useRef();

  const [successPopup, setSuccessPopup] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    company_name: "",
    business_nature: "",
    from_email: "",
    mobile: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3r5s1p",
        "template_v931h27",
        formRef.current,
        "AjSolrByjuK-GsN6g",
      )
      .then(
        (result) => {
          console.log(result.text);

          setSuccessPopup(true);

          setFormData({
            from_name: "",
            company_name: "",
            business_nature: "",
            from_email: "",
            mobile: "",
            comments: "",
          });

          setTimeout(() => {
            setSuccessPopup(false);
          }, 4000);
        },
        (error) => {
          console.log("EMAILJS ERROR:", error);

          alert("Failed to send enquiry.");
        },
      );
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.7)",
    outline: "none",
    fontSize: "15px",
    color: "#111",
    fontWeight: "400",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  };

  return (
    <>
      <Navbar />

      {/* SUCCESS POPUP */}
      {successPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: window.innerWidth < 768 ? "18px" : "25px",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #ffffff, #f8f5ef)",
              padding:
                window.innerWidth < 768 ? "30px 20px" : "45px",
              borderRadius:
                window.innerWidth < 768 ? "22px" : "26px",
              width: "100%",
              maxWidth:
                window.innerWidth < 768 ? "100%" : "430px",
              textAlign: "center",
              boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
              animation: "popupFade 0.35s ease",
            }}
          >
            {/* ICON */}
            <div
              style={{
                width:
                  window.innerWidth < 768 ? "72px" : "82px",
                height:
                  window.innerWidth < 768 ? "72px" : "82px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#b88a2a,#d4af37)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize:
                  window.innerWidth < 768 ? "34px" : "38px",
                color: "#fff",
              }}
            >
              ✓
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize:
                  window.innerWidth < 768 ? "24px" : "30px",
                color: "#111827",
                marginBottom: "14px",
                fontWeight: "700",
              }}
            >
              Inquiry Submitted
            </h3>

            {/* TEXT */}
            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
                fontSize:
                  window.innerWidth < 768 ? "14px" : "15px",
                marginBottom: "28px",
              }}
            >
              Thank you for your interest.
              <br />
              Our team will contact you shortly.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setSuccessPopup(false)}
              style={{
                background:
                  "linear-gradient(135deg,#b88a2a,#d4af37)",
                color: "#fff",
                border: "none",
                width:
                  window.innerWidth < 768 ? "100%" : "auto",
                padding:
                  window.innerWidth < 768
                    ? "15px 20px"
                    : "14px 36px",
                borderRadius: "14px",
                cursor: "pointer",
                fontSize:
                  window.innerWidth < 768 ? "14px" : "15px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "0.3s ease",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          background: "#f5f1e8",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            background: "#efebe4",
            padding:
              window.innerWidth < 768
                ? "35px 22px"
                : "60px 70px",
            borderRadius: "10px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
            border: "1px solid #ddd",
          }}
        >
          {/* AUTOFILL FIX */}
          <style>
            {`
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              textarea:-webkit-autofill,
              textarea:-webkit-autofill:hover,
              textarea:-webkit-autofill:focus {
                -webkit-text-fill-color: #000000 !important;
                transition: background-color 9999s ease-in-out 0s;
                box-shadow: 0 0 0px 1000px #ffffff inset !important;
              }
            `}
          </style>

          {/* TITLE */}
          <h3
            style={{
              fontSize:
                window.innerWidth < 768 ? "22px" : "30px",
              color: "#b88a2a",
              marginBottom: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            BECOME A VENDOR
          </h3>

          <div
            style={{
              width: "70px",
              height: "3px",
              background: "#b88a2a",
              marginBottom: "40px",
            }}
          />

          <form ref={formRef} onSubmit={handleSubmit}>
            {/* HIDDEN FIELD */}
            <input
              type="hidden"
              name="form_type"
              value="Become Vendor Inquiry"
            />

            {/* NAME */}
            <div style={{ marginBottom: "30px" }}>
              <label style={labelStyle}>
                Name Of Vendor *
              </label>

              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* COMPANY */}
            <div style={{ marginBottom: "30px" }}>
              <label style={labelStyle}>
                Name Of Business Or Company *
              </label>

              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* BUSINESS NATURE */}
            <div style={{ marginBottom: "30px" }}>
              <label style={labelStyle}>
                Nature Of Business *
              </label>

              <input
                type="text"
                name="business_nature"
                value={formData.business_nature}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* EMAIL */}
            <div style={{ marginBottom: "30px" }}>
              <label style={labelStyle}>Email ID *</label>

              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* MOBILE */}
            <div style={{ marginBottom: "30px" }}>
              <label style={labelStyle}>
                Mobile Number *
              </label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* COMMENTS */}
            <div style={{ marginBottom: "40px" }}>
              <label style={labelStyle}>Comments</label>

              <textarea
                name="comments"
                rows="4"
                value={formData.comments}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              />
            </div>

            {/* BUTTON */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(135deg,#b88a2a,#d4af37)",
                  color: "#fff",
                  padding:
                    window.innerWidth < 768
                      ? "15px 25px"
                      : "15px 55px",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontSize:
                    window.innerWidth < 768
                      ? "14px"
                      : "16px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  boxShadow:
                    "0 12px 25px rgba(184,138,42,0.25)",
                  width:
                    window.innerWidth < 768
                      ? "100%"
                      : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                SUBMIT ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

const labelStyle = {
  display: "block",
  fontSize: "15px",
  color: "#333",
  marginBottom: "10px",
  fontWeight: "600",
  letterSpacing: "0.3px",
};

export default BecomeVendor;