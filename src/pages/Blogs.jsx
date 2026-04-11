import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Blogs = () => {
  const blogs = [
    {
      title: "Why SNS Group is a Trusted Name in Real Estate",
      desc: "SNS Group has emerged as a reliable and innovative real estate developer known for delivering high-quality residential and commercial projects. With a focus on modern design, sustainability, and customer satisfaction, SNS Group continues to redefine urban living.",
      img: "/blog1.jpg",
    },
    {
      title: "Top Reasons to Invest in SNS Group Projects",
      desc: "Investing in SNS Group properties ensures long-term value appreciation, strategic locations, and premium amenities. Their projects are designed to meet the evolving needs of modern homebuyers while offering excellent connectivity and lifestyle benefits.",
      img: "/blog2.jpg",
    },
    {
      title: "Luxury Living Redefined by SNS Group",
      desc: "SNS Group offers a new standard of luxury living with thoughtfully designed spaces, world-class amenities, and elegant architecture. Each project reflects a perfect blend of comfort, convenience, and sophistication.",
      img: "/blog3.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="wrapper">
          <h1 className="heading">SNS GROUP</h1>

          {blogs.map((blog, index) => (
            <div className="blog" key={index}>
              <img src={blog.img} alt={blog.title} />

              <div className="content">
                <h2>{blog.title}</h2>
                <p>{blog.desc}</p>
                <Link to={`/blog/${index}`}>
  <button>Read More</button>
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* 🔥 INLINE CSS */}
      <style jsx>{`
        .container {
          padding: 60px 20px 80px;
          background: #f5f1e8;
          display: flex;
          justify-content: center;
          textAlign: "justify", // ✅ FIX
        }

        .wrapper {
          width: 100%;
          max-width: 1100px;
        }

        .heading {
          font-size: 36px;
          font-weight: 700;
          color: #b88a2a;
          margin-bottom: 50px;
        }

        .blog {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 70px;
        }

        .blog img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 12px;
          transition: 0.4s ease;
        }

        .blog img:hover {
          transform: scale(1.03); /* 🔥 subtle premium hover */
        }

        .content {
          color: #201d1d;
          max-width: 500px;
          
        }

        .content h2 {
          font-size: 24px;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .content p {
          font-size: 17.5px;
          line-height: 1.6;
          margin-bottom: 18px;
          color: #333;
          text-align: justify; /* ✅ FIX */
        }

        .content button {
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid #b88a2a;
          background: transparent;
          color: #b88a2a;
          cursor: pointer;
          transition: 0.3s;
        }

        .content button:hover {
          background: #b88a2a;
          color: #fff;
        }

        /* 🔥 ALTERNATE LAYOUT */
        .blog:nth-child(even) {
          direction: rtl;
        }

        .blog:nth-child(even) .content {
          direction: ltr;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .blog {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .blog:nth-child(even) {
            direction: ltr;
          }

          .heading {
            text-align: center;
            font-size: 28px;
          }

          .container {
            padding: 40px 15px 60px;
          }
        }
      `}</style>
    </>
  );
};

export default Blogs;
