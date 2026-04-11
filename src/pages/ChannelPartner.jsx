import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ChannelPartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    rera: "",
    firm: "",
    email: "",
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
    console.log(formData);
    alert("Form Submitted!");
  };

  const inputStyle = {
    width: "100%",
    border: "none",
    borderBottom: "2px solid #b88a2a",
    padding: "10px 5px",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
    color: "#000", // ✅ typed text black
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#f5f1e8",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#eeeeee",
            padding: window.innerWidth < 768 ? "30px 20px" : "50px 60px",
            border: "1px solid #dcdcdc",
          }}
        >
          {/* TITLE */}
          <h3
            style={{
              fontSize: "24px",
              color: "#b88a2a",
              marginBottom: "30px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            KINDLY FILL DETAILS IN THE FORM BELOW
          </h3>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div style={{ marginBottom: "25px" }}>
              <label style={labelStyle}>
                Name Of Channel Partner*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter channel partner name"
                style={inputStyle}
                onChange={handleChange}
                required
              />
            </div>

            {/* RERA */}
            <div style={{ marginBottom: "25px" }}>
              <label style={labelStyle}>
                RERA ID Of Channel Partner**
              </label>
              <input
                type="text"
                name="rera"
                placeholder="Enter rera id of channel partner"
                style={inputStyle}
                onChange={handleChange}
              />
            </div>

            {/* FIRM */}
            <div style={{ marginBottom: "25px" }}>
              <label style={labelStyle}>Firm Name*</label>
              <input
                type="text"
                name="firm"
                placeholder="Enter firm name"
                style={inputStyle}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div style={{ marginBottom: "25px" }}>
              <label style={labelStyle}>Email ID*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email id"
                style={inputStyle}
                onChange={handleChange}
                required
              />
            </div>

            {/* MOBILE */}
            <div style={{ marginBottom: "35px" }}>
              <label style={labelStyle}>Mobile No.*</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile no."
                style={inputStyle}
                onChange={handleChange}
                required
              />
            </div>

            {/* BUTTON */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  background: "#b88a2a",
                  color: "#000",
                  padding: "12px 50px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "17px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#a67c1f";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#b88a2a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Submit
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
  fontSize: "17px",
  color: "#333",
  marginBottom: "8px",
  fontWeight: "500",
};

export default ChannelPartner;
