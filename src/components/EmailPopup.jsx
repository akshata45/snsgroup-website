import { useEffect, useState } from "react";

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const hidden = localStorage.getItem("hidePopup");

    if (!hidden) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // ✅ detect resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setShow(false);
    if (dontShow) {
      localStorage.setItem("hidePopup", "true");
    }
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: isMobile ? "15px" : "0",
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : "900px",
          height: isMobile ? "auto" : "480px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          borderRadius: "12px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          animation: "fadeLuxury 0.5s ease",
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            flex: isMobile ? "none" : 1.2,
            height: isMobile ? "200px" : "auto",
            background:
              "url('/realestate.jpg') center/cover no-repeat",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            padding: isMobile ? "25px" : "50px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* CLOSE */}
          <div
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
              fontSize: "18px",
              color: "#999",
            }}
          >
            ✖
          </div>

          <h2
            style={{
              fontSize: isMobile ? "22px" : "30px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#333",
            }}
          >
            Discover Luxury Living
          </h2>

          <p
            style={{
              color: "#666",
              marginBottom: "20px",
              lineHeight: "1.5",
              fontSize: isMobile ? "14px" : "16px",
            }}
          >
            Get exclusive access to premium residences, pre-launch
            offers and curated investment opportunities.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              marginBottom: "12px",
              outline: "none",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />

          <button
            style={{
              padding: "12px",
              border: "none",
              background: "linear-gradient(135deg,#c9a74d,#b08a3e)",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            ENQUIRE NOW
          </button>

          <div
            style={{
              marginTop: "12px",
              fontSize: "12px",
              color: "#555",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => setDontShow(e.target.checked)}
            />{" "}
            Do not show again
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailPopup;
