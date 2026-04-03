import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [focused, setFocused] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/login", form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert("Login Successful ✅");
      navigate("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const inputWrapper = (refName) => ({
    position: "relative",
    width: "100%",
    cursor: "text",
  });

  const inputStyle = (name) => ({
    width: "100%",
    padding: "14px 12px",
    borderRadius: "8px",
    border: focused === name ? "1px solid #f26522" : "1px solid #f5f1e8",
    background: "#f5f1e8",
    color: "#09332c",
    outline: "none",
    fontSize: "14px",
    transition: "0.3s",
    cursor: "text",
    boxShadow: focused === name ? "0 0 8px rgba(242,101,34,0.3)" : "none",
  });

  const labelStyle = (active) => ({
    position: "absolute",
    left: "12px",
    top: active ? "-8px" : "14px",
    fontSize: active ? "11px" : "14px",
    color: active ? "#f26522" : "#5b6062",
    background: "#f5f1e8",
    padding: "0 4px",
    transition: "0.3s",
    pointerEvents: "none",
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f8f8",
        fontFamily: "sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "360px",
          padding: "40px",
          borderRadius: "16px",
          background: "#ffffff",
          boxShadow: animate ? "0 20px 50px rgba(0,0,0,0.08)" : "none",
          transform: animate ? "translateY(0px)" : "translateY(40px)",
          opacity: animate ? 1 : 0,
          transition: "all 0.6s ease",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          border: "1px solid #eee",
        }}
      >
        <h2 style={{ color: "#09332c", textAlign: "center" }}>Welcome Back</h2>

        {/* Email */}
        <div style={inputWrapper()} onClick={() => emailRef.current.focus()}>
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            style={inputStyle("email")}
          />
          <label style={labelStyle(form.email || focused === "email")}>
            Email
          </label>
        </div>

        {/* Password */}
        <div style={inputWrapper()} onClick={() => passwordRef.current.focus()}>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused("")}
            style={inputStyle("password")}
          />
          <label style={labelStyle(form.password || focused === "password")}>
            Password
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#f26522",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 6px 20px rgba(242,101,34,0.25)",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ color: "#5b6062", textAlign: "center", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{
              color: "#f26522",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
