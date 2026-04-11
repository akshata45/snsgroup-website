import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
    {
      title: "Why SNS Group is a Trusted Name in Real Estate",
      img: "/blog1.jpg",
      content: `
        SNS Group has established itself as a leading real estate developer by consistently delivering high-quality projects. 
        With a strong focus on innovation, sustainability, and customer satisfaction, the company has built a reputation for trust and excellence.

        Their projects are strategically located, offering seamless connectivity, modern amenities, and long-term value appreciation. 
        SNS Group prioritizes transparency and timely delivery, making them a preferred choice among homebuyers and investors.

        Whether it is residential or commercial developments, SNS Group continues to redefine urban living standards.
      `,
    },
    {
      title: "Top Reasons to Invest in SNS Group Projects",
      img: "/blog2.jpg",
      content: `
        Investing in SNS Group projects offers numerous advantages, including prime locations, superior construction quality, and premium amenities.

        The company focuses on creating spaces that blend comfort, convenience, and modern design. Their projects are designed to meet future lifestyle needs while ensuring strong return on investment.

        With increasing demand for quality housing, SNS Group properties are an ideal choice for both end-users and investors.
      `,
    },
    {
      title: "Luxury Living Redefined by SNS Group",
      img: "/blog3.jpg",
      content: `
        SNS Group brings luxury living to a new level with thoughtfully designed spaces and world-class amenities.

        From elegant architecture to premium interiors, every detail is crafted to provide a superior lifestyle experience. 
        Their developments include modern facilities such as landscaped gardens, fitness centers, and smart home features.

        Experience a perfect blend of luxury, comfort, and convenience with SNS Group.
      `,
    },
  ];

  const blog = blogs[id];

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="wrapper">
          <h1>{blog.title}</h1>

          <img src={blog.img} alt={blog.title} />

          <p>{blog.content}</p>
        </div>
      </div>

      <Footer />

      {/* INLINE CSS */}
      <style jsx>{`
        .container {
          padding: 60px 20px 80px;
          background: #f5f1e8;
          display: flex;
          justify-content: center;
        }

        .wrapper {
          max-width: 900px;
          width: 100%;
          color: #000;
        }

        h1 {
          font-size: 32px;
          margin-bottom: 20px;
          color: #b88a2a;
        }

        img {
          width: 100%;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        p {
          font-size: 16px;
          line-height: 1.8;
          white-space: pre-line;
          textAlign: "justify", // ✅ FIX
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 24px;
            textAlign: "justify", // ✅ FIX
          }

          .container {
            padding: 40px 15px 60px;
          }
        }
      `}
      </style>
    </>
  );
};

export default BlogDetail;
