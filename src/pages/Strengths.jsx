import React from "react";
import "./strengths.css";

function Strengths() {
  return (
    <div className="strengths-page">

      {/* HERO IMAGE */}
      <section className="ventures-hero">
        <img src="/hospitality-banner.jpg" alt="Kanakia Hospitality" />
      </section>

      {/* HOSPITALITY SECTION */}
      <section className="venture-section">

        <h2 className="venture-title">KANAKIA HOSPITALITY</h2>

        <p className="venture-desc">
          Kanakia Group is synonymous with premium real estate developments and
          entering the Hospitality industry was therefore a natural transition
          for us. It allowed us to explore new opportunities as well as giving
          us a platform to diversify our expertise.
        </p>

        <div className="hotel-grid">

          <div className="hotel-card">
            <img src="/courtyard-logo.png" alt="Courtyard Marriott"/>
            <p>
              The Courtyard by Marriott located in Andheri East near the
              International Airport is a 4-star project by Kanakia Group.
            </p>
          </div>

          <div className="hotel-card">
            <img src="/hyatt-logo.png" alt="Hyatt Centric Goa"/>
            <p>
              Located in the heart of Goa, the Hyatt Centric offers a vibrant
              and comfortable stay experience with luxurious interiors.
            </p>
          </div>

          <div className="hotel-card">
            <img src="/novotel-logo.png" alt="Novotel Ahmedabad"/>
            <p>
              Situated close to major locations of Ahmedabad city, Novotel
              offers business and family trips with luxury amenities.
            </p>
          </div>

        </div>

      </section>

      {/* RBK SECTION */}
      <section className="venture-image-section">

        <img src="/rbk-building.jpg" alt="RBK International Academy"/>

        <div className="venture-text">

          <h2>RBK</h2>

          <p>
            Our vision for children is to develop new learning skills, driven by
            our credo, ‘knowledge is light’, and help them overcome the stress
            of competition. The primary goal of the school is to create a
            balanced atmosphere for learning, discipline and development of
            character.
          </p>

          <img
            src="/rbk-logo.png"
            alt="RBK Logo"
            className="venture-logo"
          />

        </div>

      </section>

      {/* CINELINE */}
      <section className="venture-section cine-section">

        <img src="/cineline1.jpg" alt="CineLine" className="cine-banner"/>

        <h2>
          <span className="cine-red">CINE</span>LINE
          <span className="cine-grey"> (FORMERLY KNOWN AS Moviemax)</span>
        </h2>

        <p>
          Rexine seats on iron frames. 35 mm screens. Partly air-conditioned
          halls. This was the typical single screen for many years, before the
          arrival of a revolution that changed the movie-watching experience
          completely.
        </p>

        <p>
          Cineline was the original name conceptualized way back in 2002 before
          it became Cinemax. What Cinemax offered was unparalleled, never
          experienced before – latest technology, comfortable seating,
          international ambience, enhanced sound and the best of food and
          beverages.
        </p>

      </section>

    </div>
  );
}

export default Strengths;