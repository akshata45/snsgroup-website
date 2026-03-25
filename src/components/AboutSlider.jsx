import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import "./slider.css";

function AboutSlider() {
  const navigate = useNavigate();

  // Dynamic Card Data
  const cards = [
    {
      title: "STORY",
      image: "/story.jpg",
      path: "/story",
    },
    {
      title: "LEADERSHIP",
      image: "/leadership.jpg",
      path: "/story#leadership",
    },
    {
      title: "PROJECTS",
      image: "/journey.jpg",
      path: "/journey",
    },
    {
      title: "STRENGTH",
      image: "/strength.jpg",
      path: "/story#strength",   // updated
    },
    {
      title: "GROUP VENTURES",
      image: "/group.jpg",
      path: "/group-ventures",
    },
  ];

  return (
    <div className="about-section">

      {/* LEFT STATIC CONTENT */}
      <div className="left-content">
        <h1>Building More Than Spaces We Build Futures.</h1>
        <p>SNS GROUP is a modern real estate and construction company committed to delivering high-quality developments with precision, trust, and innovation.</p>
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
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >

          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="card"
                onClick={() => navigate(card.path)}
              >
                <img src={card.image} alt={card.title} />
                <div className="label">{card.title}</div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  );
}

export default AboutSlider;