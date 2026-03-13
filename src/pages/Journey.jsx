import React from "react";
import "./journey.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
  
function Journey() {
  return (
    <>
    <Navbar />
    <div className="journey-page">


      <div className="projects-container">

        {/* LEFT CONTENT */}
        <div className="projects-left">

          <h1>
            BUILDING <br/>
            TODAY, <br/>
            SHAPING <br/>
            TOMORROW.
          </h1>

          <div className="line"></div>

          <p>
            Have a look through our luxury residences and prestigious
            commercial spaces
          </p>

          <div className="project-buttons">
            <button className="active">Residential</button>
            <button>Commercial</button>
          </div>

          <select className="project-dropdown">
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Upcoming</option>
          </select>

        </div>


        {/* RIGHT PROJECT CARDS */}
        <div className="projects-right">

          {/* PROJECT 1 */}
          <div className="project-card">

            <img
              src="/silicon-valley.jpg"
              alt="Silicon Valley"
            />

            <div className="project-info">
              <h2>SILICON VALLEY</h2>
              <p>@Powai</p>
            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="project-card">

            <img
              src="/beverly-heights.jpg"
              alt="Beverly Heights"
            />

            <div className="project-info">
              <h2>BEVERLY HEIGHTS</h2>
              <p>@Mira-Bhayandar</p>
            </div>

          </div>

        </div>

      </div>

    </div>
    </>
  );
}

export default Journey;