import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  const gold = "#c6a75e";

  return (
    <>
    <Navbar />
    <section
      style={{
        background: "#f5f1e8",
        minHeight: "100vh",
        padding: "60px 6%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "clamp(28px,4vw,37px)",
            fontWeight: "600",
            color: gold,
            marginBottom: "30px",
            letterSpacing: "1px",
          }}
        >
          PRIVACY <span style={{ fontWeight: "600" }}>STATEMENT</span>
        </h1>

        {/* CONTENT */}
        <div
          style={{
            color: "#444",
            lineHeight: "1.9",
            fontSize: "17.5px",
            textAlign: "justify", // ✅ FIX
          }}
        >
          <p>
            SNS GROUP recognizes the importance of protecting the privacy of all
            information provided by visitors of this Website. We have created
            this privacy statement in order to demonstrate our commitment to
            user’s privacy.
          </p>

          <p>
            Our website follows accepted standards of security and
            confidentiality of customer data as practiced on the internet.
          </p>

          <p>
            Except where users are explicitly informed, we do not sell, rent,
            share, trade or give away any personal information to third parties
            without prior consent. Information of a general nature may however be
            shared with external parties where it contributes to improving the
            quality of services offered.
          </p>

          <p>
            We ensure confidentiality through strict standards and do not retain
            personal data longer than necessary. Information may be used for
            promotional or cross-sell purposes with proper safeguards.
          </p>

          <p>
            We may disclose personal information where required under law to
            governmental or regulatory authorities.
          </p>

          {/* SUBTITLE */}
          <h3
            style={{
              marginTop: "30px",
              marginBottom: "15px",
              fontSize: "18px",
              color: "#222",
              fontWeight: "600",
            }}
          >
            Use of Information
          </h3>

          {/* BULLETS */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "To serve users better and provide requested services.",
              "To improve marketing and promotional efforts.",
              "To analyze site usage and improve content.",
              "To customize offerings, layout, and services.",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "16px",
                    background: gold,
                    marginTop: "6px",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            These measures help us provide a smooth, efficient, and customized
            user experience. We may also gather general demographic data that
            does not personally identify visitors.
          </p>

          <p>
            By using our website, users agree to receive communications such as
            administrative notices, promotional offers, and relevant updates.
            Users may opt out of such communications at any time.
          </p>

          <p>
            SNS GROUP believes that privacy is best protected through adherence
            to legal frameworks and cooperation with law enforcement authorities
            when required.
          </p>

          <p>
            The Company shall not be responsible for any technical failure,
            malfunction, or delays of any kind.
          </p>
        </div>
      </div>
    </section>
    <Footer />
</>
  );
}

export default PrivacyPolicy;
