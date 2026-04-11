import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Disclaimer() {
  const gold = "#c6a75e";

  return (
    <>    <Navbar />
    <section
      style={{
        background: "#f5f1e8",
        minHeight: "100vh",
        padding: "60px 6%",
        display: "flex",
        justifyContent: "center",
        textAlign: "justify", // ✅ FIX
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
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: "600",
            color: gold,
            marginBottom: "30px",
            letterSpacing: "1px",
          }}
        >
          DISCLAIMER
        </h1>

        {/* CONTENT */}
        <div
          style={{
            color: "#444",
            lineHeight: "1.9",
            fontSize: "17.5px",
          }}
        >
          <p>
            The information contained in this website is for general information
            purposes only and is subject to change without any notice.
          </p>

          <p>
            Information about projects is indicative. Images, if any, are shown
            as illustrations and for reference only. Information is prepared and
            issued in good faith for guidance purposes only and does not
            constitute part of an offer or agreement. Users are responsible for
            evaluating the accuracy, completeness, and usefulness of any
            information provided.
          </p>

          <p>
            All information is distributed with the understanding that the
            authors, publishers, and distributors are not rendering professional
            advice or opinions. You may seek advice from your legal, tax, or real
            estate expert where required. For more information on registered
            projects, refer to{" "}
            <a
              href="https://maharera.mahaonline.gov.in/"
              target="_blank"
              rel="noreferrer"
              style={{ color: gold }}
            >
              https://maharera.mahaonline.gov.in/
            </a>
          </p>

          <p>
            SNS GROUP endeavors to keep information up to date and correct but
            makes no representations, guarantees, or warranties of any kind,
            express or implied, about completeness, accuracy, reliability, or
            suitability of the website or its content.
          </p>

          <p>
            All intellectual property including content, images, text, and design
            belongs to SNS GROUP and is protected by applicable laws. No part of
            this website may be copied, reproduced, distributed, or used without
            prior written consent.
          </p>

          <p>
            Plans, designs, dimensions, and specifications are subject to
            approvals and may change as per regulatory requirements. All visuals
            are artistic impressions and may not represent actual deliverables.
            Any reliance placed on such information is strictly at the user’s
            risk.
          </p>

          <p>
            Amenities, features, and specifications mentioned shall be final as
            per agreement for sale (if applicable). Third-party components will
            carry respective warranties from manufacturers or suppliers.
          </p>

          <p>
            SNS GROUP disclaims any liability for loss or damage arising from use
            of this website or its content, including temporary unavailability.
            External links provided are for convenience and do not imply
            endorsement.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Disclaimer;
