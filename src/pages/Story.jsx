import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/slider.css";
import { useLocation } from "react-router-dom";
import { FaClock, FaShieldAlt, FaCogs, FaRocket } from "react-icons/fa";

function Story() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />

      {/* ABOUT */}
      <section className="about-section">

        <div className="slider-wrapper">
          <img
            src="/about.jpg"
            alt="SNS Group"
            className="about-image"
          />
        </div>

        <div className="left-content">
          <h1>WHO WE ARE</h1>

          <p>
            SNS Group is a trusted name built on strong values,
            integrity, and commitment to excellence.
          </p>

          <p>
            We focus on creating developments that combine modern
            design, innovation, and sustainability.
          </p>

          <p>
            Our goal is to deliver spaces that enhance lifestyle
            and create long-term value for our customers.
          </p>
        </div>

      </section>

      {/* JOURNEY */}
      <section className="journey-section">

        <div className="journey-text">
          <h2>OUR JOURNEY</h2>

          <p>
            Under the leadership of Mr. Rasesh Kanakia and Mr. Himanshu Kanakia,
            Kanakia Group set up its first project in the year 1986 in suburb of
            Mumbai. Over the years the group has developed remarkable
            theme-based projects all over the city of Mumbai.
          </p>

          <button className="journey-btn">Know More</button>
        </div>

        <div className="journey-image">
          <img src="/journey1.jpg" alt="Our Journey" />
        </div>

      </section>

      {/* STRENGTHS */}
      <section id="strength" className="strengths-section">

        <h2 className="strengths-title">
          KEY DIFFERENTIATORS AND <br /> STRENGTHS
        </h2>

        <div className="strengths-grid">

          <div className="strength-card">
            <div className="strength-top">
              <FaClock className="strength-icon"/>
              <h3>
                THE ABILITY <br/> TO DELIVER <br/> ON TIME
              </h3>
            </div>

            <p>
              We believe in staying true to our commitments. As a real estate brand,
              we understand the expectations of our customers and ensure that
              we deliver projects before the promised timeline.
            </p>
          </div>

          <div className="strength-card">
            <div className="strength-top">
              <FaShieldAlt className="strength-icon"/>
              <h3>
                THE GUARANTEE <br/> OF FAIR PRACTICES
              </h3>
            </div>

            <p>
              With a clear vision of perfection, we ensure transparency
              and fairness in all our business practices.
            </p>
          </div>

          <div className="strength-card">
            <div className="strength-top">
              <FaCogs className="strength-icon"/>
              <h3>
                THE STAMP OF <br/> UNSHAKEABLE <br/> INTEGRITY
              </h3>
            </div>

            <p>
              Integrity remains a core principle. We follow strict ethical
              standards and maintain strong values across every project.
            </p>
          </div>

          <div className="strength-card">
            <div className="strength-top">
              <FaRocket className="strength-icon"/>
              <h3>
                UNLIMITED <br/> POTENTIAL
              </h3>
            </div>

            <p>
              Our ability to deliver excellence and innovate continuously
              enables us to help our customers achieve the best results.
            </p>
          </div>

        </div>

      </section>

      {/* MOTTO */}
      <section className="motto-section">
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="leadership-section">

        <h2 className="leadership-title">THE LEADERSHIP</h2>

        <div className="leadership-container">

          <div className="leader-card">
            <img src="/rasesh.jpg" alt="Mr Rasesh B Kanakia" className="leader-img"/>
            <h3>Mr. Rasesh B. Kanakia</h3>
            <p className="leader-role">Chairman</p>
            <p className="leader-desc">
              Mr. Rasesh B. Kanakia began his career as a real estate consultant
              and subsequently ventured into real estate development in 1986.
            </p>
          </div>

          <div className="leader-card">
            <img src="/himanshu.jpg" alt="Mr Himanshu B Kanakia" className="leader-img"/>
            <h3>Mr. Himanshu B. Kanakia</h3>
            <p className="leader-role">Managing Director</p>
            <p className="leader-desc">
              Mr. Himanshu B. Kanakia is a Civil Engineer by qualification
              and leads the day-to-day management of SNS Group.
            </p>
          </div>

        </div>

      </section>

      {/* GROUP VENTURES */}
      <section id="ventures" className="ventures-section">

        <h2 className="ventures-title">
          OTHER <br/> GROUP VENTURES
        </h2>

        <div className="ventures-container">

          <div className="venture-item">
            <div className="venture-logo">
              <img src="/kanakia-hospitality.jpg" alt="Kanakia Hospitality"/>
            </div>
            <div className="venture-content">
              <p>
                Kanakia Group is synonymous with premium real estate developments
                and entering the hospitality industry was therefore a natural transition.
              </p>
              <a href="#" className="venture-link">Know More</a>
            </div>
          </div>

          <div className="venture-item">
            <div className="venture-logo">
              <img src="/rbk.jpg" alt="RBK School"/>
            </div>
            <div className="venture-content">
              <p>
                Our vision for children is to develop new learning skills
                driven by our credo ‘knowledge is light’.
              </p>
              <a href="#" className="venture-link">Know More</a>
            </div>
          </div>

          <div className="venture-item">
            <div className="venture-logo">
              <img src="/cineline.jpg" alt="CineLine"/>
            </div>
            <div className="venture-content">
              <p>
                Rexine seats on iron frames. 35 mm screens. Partly air-conditioned halls.
              </p>
              <a href="#" className="venture-link">Know More</a>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Story;