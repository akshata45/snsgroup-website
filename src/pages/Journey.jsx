import React, { useState } from "react";
import "./journey.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Journey() {

  // ✅ FILTER STATE
  const [selectedType, setSelectedType] = useState("Ongoing");

  // ✅ PROJECT DATA
  const projectsData = {
    Completed: [
      { img: "/estoria.jpg", name: "ESTORIA HEIGHTS", loc: "Malad" },
      { img: "/dev-darshan.jpg", name: "DEV DARSHAN", loc: "Bhandup" },
      { img: "/arham-arcade.jpg", name: "ARHAM ARCADE", loc: "Kharghar" },
      { img: "/chandan-pride.jpg", name: "CHANDAN PRIDE", loc: "Ghatkopar East" },
      { img: "/lake-marvel.jpg", name: "LAKE MARVEL PAWNA", loc: "Lonavala" },
      { img: "/dev-ashish.jpg", name: "DEV ASHISH", loc: "Bhandup" },
      { img: "/prem-ashish.jpg", name: "PREM ASHISH", loc: "Ghatkopar West" },
      { img: "/prem-kunj.jpg", name: "PREM KUNJ", loc: "Ghatkopar West" },
      { img: "/aashirwad.jpg", name: "AASHIRWAD RESIDENCY", loc: "Borivali" }
    ],

    Ongoing: [
      { img: "/sk-paradie.jpg", name: "S K PARADISE", loc: "Alibaug" },
      { img: "/amby-valley.jpg", name: "AMBY VALLEY", loc: "Lonavala" },
      { img: "/warehouse.jpg", name: "LOGISTIC WAREHOUSE", loc: "Wada" },
      { img: "/villa.jpg", name: "VILLA PROJECT", loc: "Karjat" }
    ],

    Upcoming: [
      { img: "/chembur.jpg", name: "CHEMBUR", loc: "Mumbai" },
      { img: "/bhandup.jpg", name: "BHANDUP", loc: "Mumbai" },
      { img: "/karjat.jpg", name: "KARJAT", loc: "Mumbai" }
    ]
  };

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
              Explore our landmark residential and commercial developments crafted with precision and trust.
            </p>

            <div className="project-buttons">
              <button className="active">Residential</button>
              <button>Commercial</button>
            </div>

            {/* ✅ DROPDOWN WORKING */}
            <select
              className="project-dropdown"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
            </select>

          </div>

          {/* RIGHT SWIPER */}
          <div className="projects-right">

<Swiper
  modules={[Navigation]}
  navigation
  centeredSlides={false}   // 👈 show 3 cards initially
  loop={true}
  spaceBetween={30}
  slidesPerView={3}        // 👈 3 cards visible
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>

              {/* ✅ DYNAMIC PROJECTS */}
              {projectsData[selectedType].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="project-card">
                    <img src={item.img} alt={item.name}/>
                    <div className="project-info">
                      <h2>{item.name}</h2>
                      <p>@{item.loc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Journey;