import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const EmiCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(8);
  const [emi, setEmi] = useState(0);

  // 🔥 Auto calculate
  useEffect(() => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(years) * 12;

    if (!P || !R || !N) return;

    const emiValue =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    setEmi(emiValue.toFixed(0));
  }, [amount, years, rate]);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.wrapper}>
          {/* LEFT CONTENT */}
          <motion.div
            style={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 style={styles.heading}>
              Learning the nomenclature of real estate
            </h3>

            <p style={styles.text}>
              As per RERA, each real estate agent must be registered with the
              authority. This ensures transparency and trust in transactions.
            </p>

            <p style={styles.text}>
              You can verify agents and projects via official RERA portals
              anytime.
            </p>

            <h4 style={styles.sub}>Carpet Area</h4>
            <p style={styles.text}>
              Net usable area excluding walls, shafts, balconies, etc.
            </p>

            <h4 style={styles.sub}>FSI (Floor Space Index)</h4>
            <p style={styles.text}>
              Ratio of built-up area to plot size. Higher FSI = more development
              potential.
            </p>

            <h4 style={styles.sub}>NOC</h4>
            <p style={styles.text}>
              Approval certificate ensuring no objections for construction.
            </p>
          </motion.div>

          {/* RIGHT EMI CARD */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 style={styles.title}>EMI Calculator</h2>

            {/* INPUT */}
            <div style={styles.inputBox}>
              <label>Loan Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputBox}>
              <label>Tenure (Years)</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputBox}>
              <label>Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* RESULT */}
            <div style={styles.resultBox}>
              <p style={{ margin: 0 }}>Monthly EMI</p>
              <h2 style={{ margin: 0 }}>₹ {emi}</h2>
            </div>

            {/* EXTRA INFO */}
            <div style={styles.breakdown}>
              <p>Total Payment: ₹ {(emi * years * 12).toLocaleString()}</p>
              <p>
                Interest: ₹{" "}
                {(emi * years * 12 - amount).toLocaleString()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EmiCalculator;

const styles = {
  container: {
    background: "linear-gradient(135deg,#f5f1e8,#ebe5d6)",
    minHeight: "100vh",
    padding: "40px 15px",
  },

  wrapper: {
    maxWidth: "1100px",
    margin: "auto",
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    alignItems: "center",
  },

  left: {
    flex: 1,
    minWidth: "280px",
    color: "#111", // 🔥 DARK BLACK TEXT
  },

  heading: {
    marginBottom: "15px",
    fontWeight: "600",
  },

  sub: {
    marginTop: "20px",
    color: "#000",
  },

  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#222",
  },

  /* 💎 PREMIUM CARD */
  card: {
    width: "100%",
    maxWidth: "380px",
    margin: "auto",
    padding: "25px",
    borderRadius: "20px",
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(184,138,42,0.5)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    color: "#000",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  inputBox: {
    marginBottom: "18px",
  },

  input: {
    width: "100%",
    border: "none",
    borderBottom: "2px solid #b88a2a",
    padding: "10px 5px",
    outline: "none",
    background: "transparent",
    color: "#000",
    fontSize: "15px",
  },

  resultBox: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  breakdown: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#333",
    textAlign: "center",
  },
};
