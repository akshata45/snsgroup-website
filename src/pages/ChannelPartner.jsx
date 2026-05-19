import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ChannelPartner = () => {
  const formRef = useRef();

  const [successPopup, setSuccessPopup] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    rera_id: "",
    firm_name: "",
    from_email: "",
    mobile: "",
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

          // SHOW SUCCESS POPUP
          setSuccessPopup(true);

          // RESET FORM
          setFormData({
            from_name: "",
            rera_id: "",
            firm_name: "",
            from_email: "",
            mobile: "",
          });

          // AUTO CLOSE POPUP
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
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
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

      {/* PREMIUM AUTOFILL FIX */}
      <style>
        {`
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      -webkit-text-fill-color: #000000 !important;
      caret-color: #000000 !important;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: 0 0 0px 1000px #f8f8f8 inset !important;
      -webkit-box-shadow: 0 0 0px 1000px #f8f8f8 inset !important;
    }

    input,
    textarea {
      color: #000000 !important;
      -webkit-text-fill-color: #000000 !important;
    }

    input::placeholder,
    textarea::placeholder {
      color: #7d7d7d;
    }
  `}
      </style>

      {/* SUCCESS POPUP */}
      {successPopup && (
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
            zIndex: 99999,
            padding: window.innerWidth < 768 ? "18px" : "25px",
            overflowY: "auto",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: window.innerWidth < 768 ? "32px 22px" : "45px 40px",
              borderRadius: window.innerWidth < 768 ? "22px" : "26px",
              width: "100%",
              maxWidth: window.innerWidth < 768 ? "100%" : "430px",
              textAlign: "center",
              boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
              position: "relative",
              overflow: "hidden",
              animation: "popupFade 0.35s ease",
            }}
          >
            {/* GOLD LIGHT EFFECT */}
            <div
              style={{
                position: "absolute",
                top: "-70px",
                right: "-70px",
                width: "160px",
                height: "160px",
                background: "rgba(212,175,55,0.10)",
                borderRadius: "50%",
                filter: "blur(30px)",
              }}
            />

            {/* ICON */}
            <div
              style={{
                width: window.innerWidth < 768 ? "72px" : "82px",
                height: window.innerWidth < 768 ? "72px" : "82px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: window.innerWidth < 768 ? "34px" : "38px",
                color: "#fff",
                boxShadow: "0 12px 30px rgba(212,175,55,0.28)",
              }}
            >
              ✓
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize: window.innerWidth < 768 ? "24px" : "30px",
                color: "#111827",
                marginBottom: "14px",
                fontWeight: "700",
                lineHeight: "1.3",
                letterSpacing: "0.3px",
              }}
            >
              Inquiry Submitted
            </h3>

            {/* TEXT */}
            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
                fontSize: window.innerWidth < 768 ? "14px" : "15px",
                marginBottom: "28px",
                padding: window.innerWidth < 768 ? "0 5px" : "0",
              }}
            >
              Thank you for showing your interest.
              <br />
              Our team will connect with you shortly.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setSuccessPopup(false)}
              style={{
                background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                color: "#fff",
                border: "none",
                width: window.innerWidth < 768 ? "100%" : "auto",
                padding: window.innerWidth < 768 ? "15px 20px" : "14px 36px",
                borderRadius: "14px",
                cursor: "pointer",
                fontSize: window.innerWidth < 768 ? "14px" : "15px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                transition: "0.3s ease",
                boxShadow: "0 10px 25px rgba(212,175,55,0.20)",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              CLOSE
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
            background: "linear-gradient(145deg,#ffffff,#f8f8f8)",
            padding: window.innerWidth < 768 ? "35px 22px" : "60px 70px",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {/* TITLE */}
          <h3
            style={{
              fontSize: window.innerWidth < 768 ? "24px" : "32px",
              color: "#b88a2a",
              marginBottom: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            CHANNEL PARTNER ENQUIRY
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
              value="Channel Partner Inquiry"
            />

            {[
              {
                label: "Name Of Channel Partner *",
                name: "from_name",
                type: "text",
                required: true,
              },
              {
                label: "RERA ID Of Channel Partner",
                name: "rera_id",
                type: "text",
              },
              {
                label: "Firm Name *",
                name: "firm_name",
                type: "text",
                required: true,
              },
              {
                label: "Email ID *",
                name: "from_email",
                type: "email",
                required: true,
              },
              {
                label: "Mobile Number *",
                name: "mobile",
                type: "tel",
                required: true,
              },
            ].map((field, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index === 4 ? "40px" : "30px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "#2f2f2f",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {field.label}
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  style={{
                    width: "100%",
                    height: "58px",
                    padding: "0 18px",
                    borderRadius: "14px",
                    border: "1px solid #e2e2e2",
                    background: "#f8f8f8",
                    fontSize: "15px",
                    color: "#000000",
                    fontWeight: "500",
                    outline: "none",
                    transition: "0.3s ease",
                    boxSizing: "border-box",
                    caretColor: "#000000",
                    WebkitTextFillColor: "#000000",
                    appearance: "none",
                    WebkitAppearance: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid #d4af37";
                    e.target.style.boxShadow =
                      "0 0 0 4px rgba(212,175,55,0.10)";
                    e.target.style.background = "#ffffff";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid #e2e2e2";
                    e.target.style.boxShadow = "none";
                    e.target.style.background = "#f8f8f8";
                  }}
                />
              </div>
            ))}

            {/* BUTTON */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg,#b88a2a,#d4af37)",
                  color: "#fff",
                  padding: window.innerWidth < 768 ? "15px 25px" : "15px 55px",
                  border: "none",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontSize: window.innerWidth < 768 ? "14px" : "16px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 12px 25px rgba(184,138,42,0.25)",
                  width: window.innerWidth < 768 ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
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

export default ChannelPartner;
