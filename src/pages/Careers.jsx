import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Careers = () => {
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  useEffect(() => {
    document.body.style.background = "#f6f4ef";
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setForm({ ...form, resume: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccess(true);
  };

  return (
    <>
    <Helmet>
  <title>Careers at SNS Group | Jobs in Mumbai Real Estate</title>

  <meta
    name="description"
    content="Explore careers at SNS Group – one of Mumbai’s fastest-growing real estate companies. Apply for sales, CRM, engineering & marketing jobs."
  />

  <meta
    name="keywords"
    content="SNS Group careers, real estate jobs Mumbai, jobs in Mumbai real estate, site engineer jobs, CRM manager jobs Mumbai"
  />

  <meta name="author" content="SNS Group" />

  {/* Open Graph (for sharing) */}
  <meta property="og:title" content="Careers at SNS Group" />
  <meta
    property="og:description"
    content="Join SNS Group and build your future in real estate. Explore open job opportunities in Mumbai."
  />
  <meta property="og:image" content="/career-bg.jpg" />
  <meta property="og:type" content="website" />

  {/* Mobile SEO */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link rel="canonical" href="https://yourdomain.com/careers" />
</Helmet>

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1 className="title">CAREERS AT SNS GROUP</h1>
          <div className="line" />

          <div className="hero-box">
            <div className="hero-left">
              <h3>
                POWERED BY TECHNOLOGY, <br /> ELEVATED BY PEOPLE
              </h3>

              <div className="underline" />

              <p>
                Find your future at SNS Group, one of the fastest-growing real
                estate companies in Mumbai. Explore a wide range of rewarding
                careers which are mentored by industry experts.
              </p>

              <p className="hero-subtext">
                Our forward-thinking, dynamic company culture embraces
                technology, shows trust in its people and grows future leaders.
                That’s why we consistently attract the good and bright talent.
              </p>
            </div>

            <div className="hero-right">
              <img src="/career-bg.jpg" alt="SNS Group careers Mumbai office team working" />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
<section className="leadership">
  <div className="container leadership-wrapper">

    <div className="lead-img">
      <img src="/team.jpg" alt="SNS Group leadership team collaboration" />
    </div>

    <div className="lead-content">
      <h3>LEADERSHIP THAT INSPIRES</h3>

      <p>
        Our leaders endeavour to create a conducive work environment built on
        trust, tolerance, understanding, mutual cooperation and respect. We
        collaborate to solve problems and work with a positive mindset towards
        a common goal.
      </p>

      <p className="lead-subtext">
        Together, as an organization, we focus on meeting expectations of all
        stakeholders, and believe that business success will follow.
      </p>

      <button className="outline-btn">EXPLORE</button>
    </div>

    {/* STATS */}
    <div className="stats">
      <div>
        <h4>500+</h4>
        <span>EMPLOYEES</span>
      </div>
      <div>
        <h4>40+</h4>
        <span>YEARS OF LEGACY</span>
      </div>
      <div>
        <h4>12M+</h4>
        <span>SQ. FT DEVELOPED</span>
      </div>
    </div>

  </div>
</section>


      {/* ATS */}
      <section className="ats-section">
        <div className="container ats-wrapper">
          {/* JOB LIST */}
          <div className="jobs-panel">
            <h3>Open Positions</h3>

            {[
              "Sales Executive",
              "CRM Manager",
              "Site Engineer",
              "Marketing Executive",
            ].map((job, i) => (
              <div className="job-item" key={i}>
                <div className="job-info">
                  <h4>{job}</h4>
                  <span>Full Time • Mumbai</span>
                </div>

                <button
                  className="apply-btn"
                  onClick={() => setForm({ ...form, position: job })}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="form-panel">
            <h3>Apply for Position</h3>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Full Name</label>
                <input name="name" required onChange={handleChange} />
              </div>

              <div className="field">
                <label>Email Address</label>
                <input name="email" required onChange={handleChange} />
              </div>

              <div className="field">
                <label>Phone Number</label>
                <input name="phone" required onChange={handleChange} />
              </div>

              <div className="field">
                <label>Position</label>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea name="message" onChange={handleChange} />
              </div>

              {/* UPLOAD */}
              <div className="upload-box">
                <input type="file" name="resume" onChange={handleChange} />
                <div className="upload-inner">
                  <p>📄 Upload Resume</p>
                  <span>PDF / DOC</span>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                SUBMIT APPLICATION
              </button>

              {success && (
                <p className="success">Application submitted successfully</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* STYLES */}
<style>{`
body {
  margin: 0;
  overflow-x: hidden;
}

/* GLOBAL ANIMATION */
* {
  transition: all 0.3s ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* APPLY ANIMATION */
.hero-box,
.leadership-wrapper,
.jobs-panel,
.form-panel {
  animation: fadeUp 0.8s ease both;
}

/* IMAGE HOVER ZOOM */
.hero-right img,
.lead-img img {
  transition: transform 0.5s ease;
}

.hero-right img:hover,
.lead-img img:hover {
  transform: scale(1.05);
}

/* BUTTON PREMIUM HOVER */
.apply-btn,
.submit-btn,
.outline-btn {
  transition: all 0.3s ease;
}

.apply-btn:hover {
  background: #333;
  transform: translateY(-2px);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.outline-btn:hover {
  background: #c5a46d;
  color: #fff;
}

/* JOB ITEM HOVER */
.job-item {
  transition: all 0.3s ease;
}

.job-item:hover {
  background: #faf9f5;
  padding-left: 8px;
}

/* STATS ANIMATION */
.stats div {
  transition: all 0.3s ease;
}

.stats div:hover {
  transform: translateY(-5px);
}

/* FORM INPUT FOCUS */
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: #c5a46d;
  background: #fff;
}

/* UPLOAD HOVER */
.upload-box {
  transition: all 0.3s ease;
}

.upload-box:hover {
  transform: translateY(-3px);
}

/* EXISTING STYLES BELOW (UNCHANGED) */

.container {
  max-width: 1150px;
  margin: auto;
}

section {
  padding: 50px 20px;
}

/* TITLE */
.title {
  font-size: 24px;
  color: #111;
  letter-spacing: 2px;
}

.line {
  width: 60px;
  height: 2px;
  background: #c5a46d;
  margin: 10px 0 40px;
}

/* HERO */
.hero-box {
  display: flex;
  gap: 60px;
  align-items: center;
  background: #d9cfbf;
  padding: 60px;
}

.hero-left h3 {
  font-size: 26px;
  color: #111;
}

.underline {
  width: 50px;
  height: 2px;
  background: #c5a46d;
  margin: 15px 0;
}

.hero-left p {
  color: #333;
  max-width: 420px;
  line-height: 1.7;
  margin-bottom: 10px;
  text-align: justify;
}

.hero-subtext {
  font-size: 17px;
  color: #555;
  line-height: 1.7;
}

.hero-right img {
  width: 420px;
  border-radius: 6px;
}

/* LEADERSHIP */
.leadership-wrapper {
  display: flex;
  gap: 40px;
  align-items: center;
  position: relative;
}

.lead-img img {
  width: 420px;
}

.lead-content h3 {
  font-size: 24px;
  color: #111;
}

.lead-content p {
  color: #444;
  margin-top: 10px;
  line-height: 1.7;
  max-width: 420px;
}

.lead-subtext {
  font-size: 17px;
  color: #666;
}

.outline-btn {
  margin-top: 10px;
  border: 1px solid #c5a46d;
  padding: 10px 20px;
  background: transparent;
  cursor: pointer;
  color: #c5a46d;
}

.stats {
  position: absolute;
  bottom: -80px;
  right: 0;
  display: flex;
  background: #1a1f24;
}

.stats div {
  padding: 25px 35px;
  text-align: center;
}

.stats h4 {
  color: #c5a46d;
}

.stats span {
  color: #fff;
  font-size: 17px;
}

/* ATS */
.ats-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 40px;
}

.jobs-panel,
.form-panel {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.06);
}

.job-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #eee;
}

.job-info h4 {
  margin: 0;
  color: #111;
  font-size: 18px;
}

.job-info span {
  font-size: 17px;
  color: #777;
}

.apply-btn {
  height: 36px;
  padding: 0 16px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* FORM */
.form-panel {
  position: sticky;
  top: 100px;
}

.field {
  margin-bottom: 14px;
}

.field label {
  font-size: 17px;
  color: #444;
}

.field input,
.field textarea {
  width: 100%;
  padding: 11px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fafafa;
  color: #111;
}

textarea {
  min-height: 90px;
}

/* UPLOAD */
.upload-box {
  margin-top: 12px;
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  position: relative;
}

.upload-box input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.upload-inner p {
  margin: 0;
  font-weight: 500;
  color: #111;
}

.upload-inner span {
  font-size: 17px;
  color: #777;
}

.submit-btn {
  margin-top: 18px;
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #c5a46d, #d4af37);
  border: none;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

.success {
  margin-top: 10px;
  color: green;
}

/* MOBILE */
@media(max-width:768px){
  .hero-box,
  .leadership-wrapper {
    flex-direction: column;
  }

  .stats {
    position: static;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
  }

  .ats-wrapper {
    grid-template-columns: 1fr;
  }

  .form-panel {
    position: static;
  }

  .hero-right img {
    width: 100%;
  }
}

`}</style>

    </>
  );
};

export default Careers;
