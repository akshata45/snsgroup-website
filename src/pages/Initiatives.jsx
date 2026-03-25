import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import "./initiatives.css";
import Navbar from "../components/Navbar";


function Initiatives() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "CSR",
      subtitle: "Initiatives",
      image: "/csr.jpg",
      path: "/csr",
    },
    {
      title: "K-WORLD",
      subtitle: "Referral Programme",
      image: "/kworld.jpg",
      path: "/kworld",
    },
    {
      title: "EVENTS",
      subtitle: "Organised",
      image: "/events.jpg",
      path: "/events",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="initiatives-section">

      {/* LEFT CONTENT */}
      <div className="left-content">
        <h1>
          WITH A STRONG FOCUS ON INNOVATION,
          WE BUILD THRIVING COMMUNITIES
        </h1>
        <p>Have a look at all our initiatives.</p>
      </div>

      {/* RIGHT SWIPER */}
      <div className="slider-wrapper">

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="card"
                onClick={() => navigate(card.path)}
              >
                <img src={card.image} alt={card.title} />

                <div className="card-overlay">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
    </>
  );
}

export default Initiatives;