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
            src="/about.jpeg"
            alt="SNS Group"
            className="about-image"
          />
        </div>

        <div className="left-content">
          <h1>About SNS GROUP</h1>

          <p>
            Founded in 2019, SNS GROUP was established with a vision to redefine the construction landscape by blending traditional industry expertise with modern execution practices.
          </p>

          <p>
           With over 1 million sq. ft. of successfully delivered projects, we specialize in residential, commercial, villa, and hospitality developments.
          </p>

          <p>
            At SNS GROUP, we don’t just build structures — we create long-term value, trust, and meaningful spaces that fulfill dreams.
          </p>
        </div>

      </section>

      {/* JOURNEY */}
      <section className="journey-section">

        <div className="journey-text">
          <h2>OUR JOURNEY</h2>

          <p>
            SNS GROUP was born from a strong foundation of industry knowledge and a passion for excellence.

What started as a vision to transform real estate into a value-driven experience has grown into a trusted name known for quality, transparency, and timely delivery.

Every project reflects our commitment to innovation, precision, and creating spaces that stand the test of time.
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

    {/* Ranjeet Mahatre */}
    <div className="leader-card">
      <img src="/Ranjeet.jpg" alt="Ranjeet Mahatre" className="leader-img"/>
      <h3>Ranjeet Mahatre</h3>
      <p className="leader-role">Architect</p>
      <p className="leader-desc">
        With a strong foundation in architecture and real estate consulting, he bridges design vision with execution excellence, ensuring precision and timely delivery.
      </p>
    </div>

    {/* Amit Shah */}
    <div className="leader-card">
      <img src="/Amit.jpg" alt="Amit Shah" className="leader-img"/>
      <h3>Amit Shah</h3>
      <p className="leader-role">Chief Financial Officer (CFO)</p>
      <p className="leader-desc">
        A seasoned finance leader driving strategic growth, operational excellence, and long-term value creation through strong financial management.
      </p>
    </div>

    {/* Nishant Sanghavi */}
    <div className="leader-card">
      <img src="/Nishant.jpg" alt="Nishant Sanghavi" className="leader-img"/>
      <h3>Nishant Sanghavi</h3>
      <p className="leader-role">Civil Engineer</p>
      <p className="leader-desc">                 
        The force behind day-to-day operations and expansion, managing projects, acquisitions, and execution with energy, innovation, and strategic vision.
      </p>
    </div>

    {/* Suketu Joshi */}
    <div className="leader-card">
      <img src="/Suketu.jpg" alt="Suketu Joshi" className="leader-img"/>
      <h3>Suketu Joshi</h3>
      <p className="leader-role">Chief Business Officer (CBO)</p>
      <p className="leader-desc">
        Leading project acquisitions and investor relations, he ensures sustainable growth while bridging legal compliance with business expansion.
      </p>
    </div>

    {/* Aayush Shah */}
    <div className="leader-card">
      <img src="/Aayush.jpg" alt="Aayush Shah" className="leader-img"/>
      <h3>Aayush Shah</h3>
      <p className="leader-role">Chief Innovation Officer (CIO)</p>
      <p className="leader-desc">
        Driving digital transformation and brand storytelling, he integrates technology and design to elevate project presentation and innovation.
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

    {/* Hospitality */}
    <div className="venture-item">
      <div className="venture-icon">🏨</div>
      <div className="venture-content">
        <p>
          SNS GROUP is expanding into the hospitality sector, creating premium lifestyle experiences that combine comfort and luxury.
        </p>
      </div>
    </div>

    {/* Logistic Warehouse */}
    <div className="venture-item">
      <div className="venture-icon">🚚</div>
      <div className="venture-content">
        <p>
          Our logistics and warehousing solutions support modern supply chains with efficient and scalable infrastructure.
        </p>
      </div>
    </div>

    {/* Financial Services */}
    <div className="venture-item">
      <div className="venture-icon">💼</div>
      <div className="venture-content">
        <p>
          We create value-driven financial solutions that support sustainable growth for partners and stakeholders.
        </p>
      </div>
    </div>

    {/* Educational Institutions */}
    <div className="venture-item">
      <div className="venture-icon">🎓</div>
      <div className="venture-content">
        <p>
          Investing in education to empower future generations through innovation and knowledge-driven environments.
        </p>
      </div>
    </div>

    {/* Townships */}
    <div className="venture-item">
      <div className="venture-icon">🏙️</div>
      <div className="venture-content">
        <p>
          Developing integrated townships that offer modern infrastructure and enhanced lifestyle experiences.
        </p>
      </div>
    </div>

    {/* Technology Parks */}
    <div className="venture-item">
      <div className="venture-icon">💻</div>
      <div className="venture-content">
        <p>
          Building technology parks that foster innovation and support future-ready business ecosystems.
        </p>
      </div>
    </div>

  </div>

</section>

      <Footer />
    </>
  );
}

export default Story;