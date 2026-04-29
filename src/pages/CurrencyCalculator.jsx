import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(0);
  const [rate, setRate] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
      });
  }, []);

  const fetchRates = async () => {
    const res = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
    );
    const data = await res.json();

    const liveRate = data.rates[toCurrency];
    setRate(liveRate);
    setResult((amount * liveRate).toFixed(2));

    const trend = Array.from({ length: 7 }, (_, i) => ({
      day: `D${i + 1}`,
      value: (liveRate * (1 + (Math.random() - 0.5) / 10)).toFixed(2),
    }));
    setChartData(trend);
  };

  useEffect(() => {
    if (amount) fetchRates();
  }, [amount, fromCurrency, toCurrency]);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="wrapper">
          {/* LEFT */}
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2>1. LEGAL INFORMATION</h2>

            <p className="highlight">
              Understanding the legalities of homebuying is important when it
              comes to NRIs.
            </p>

            <p>
              Going into the legalities of purchasing a new home may become a
              tedious task. To make it simpler, we have listed the necessary
              points pertaining to legal considerations of acquiring a property
              in India.
            </p>

            <p>
              Non-resident Indians holding an Indian passport do not require any
              permission from RBI to acquire immovable property for bonafide
              residential purposes.
            </p>

            <p>
              Non-resident Indians holding an Indian passport may pay the
              purchase consideration either by remittance of funds from abroad
              through normal banking channels or out of their NRO/NRE/FCNR
              account.
            </p>

            <p>
              Ensure that the title report of the property contains no
              conditions written in fine print and that there are no specific
              reservations by the State Government.
            </p>

            <p>
              Look for specific clearance reports. For instance, if the
              construction is near a seafront, you will need to check for CRZ
              clearance. If near heritage buildings, check for heritage
              approvals to avoid disputes and loan issues.
            </p>

            <p className="source">
              Source - Accounts in India by Non-residents <br />
              Source - Purchase of Immovable Property
            </p>
          </motion.div>

          {/* CARD */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>Currency Converter</h3>

            <div className="row">
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {currencies.map((cur) => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="swap" onClick={swap}>
              ⇅
            </div>

            <div className="row">
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currencies.map((cur) => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>

              <input value={result} readOnly />
            </div>

            <div className="result">
              {amount} {fromCurrency} = {result} {toCurrency}
            </div>

            <div className="chart">
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={chartData}>
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis hide />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#b88a2a"
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <p className="rate">
              1 {fromCurrency} = {rate} {toCurrency}
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .container {
          padding: 40px 12px 80px; /* 🔥 reduced bottom gap */
          background: #f5f1e8;
          min-height: auto;
        }

        .wrapper {
          max-width: 1100px;
          margin: auto;
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          align-items: flex-start;
        }

        .left {
          flex: 1;
          min-width: 280px;
          color: #000;
        }

        .left h2 {
          color: #b88a2a;
        }

        .highlight {
          font-weight: 600;
          margin: 10px 0 20px;
        }

        .left p {
          font-size: 17px;
          line-height: 1.6;
          margin-bottom: 10px; /* 🔥 balanced spacing */
          text-align: justify; /* ✅ FIXED */
        }

        .left p:last-child {
          margin-bottom: 0;
        }

        .source {
          font-size: 17px;
          margin-top: 10px;
        }

        .card {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(184, 138, 42, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          color: #000;
        }

        .card h3 {
          text-align: center;
          margin-bottom: 15px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #b88a2a;
          margin-bottom: 15px;
        }

        select,
        input {
          border: none;
          background: transparent;
          padding: 10px;
          outline: none;
          color: #000;
          font-size: 17px;
        }

        input {
          text-align: right;
        }

        .swap {
          text-align: center;
          cursor: pointer;
          font-size: 18px;
          margin: 10px 0;
          transition: 0.3s;
        }

        .swap:hover {
          transform: rotate(180deg);
          color: #b88a2a;
        }

        .result {
          text-align: center;
          margin-top: 15px;
          padding: 12px;
          border: 1px solid #b88a2a;
          border-radius: 30px;
          font-size: 17px;
        }

        .chart {
          margin-top: 15px;
          width: 100%;
          height: 140px;
        }

        .rate {
          text-align: center;
          font-size: 17px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .wrapper {
            flex-direction: column;
            align-items: center;
            gap: 25px;
          }

          .card {
            max-width: 100%;
            padding: 18px;
          }

          .container {
            padding-bottom: 15px; /* 🔥 mobile fix */
          }
        }
      `}</style>
    </>
  );
};

export default CurrencyCalculator;
