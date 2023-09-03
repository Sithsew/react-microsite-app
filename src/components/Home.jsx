import React, { useEffect, useState } from "react";

import "./Home.css";

import NavBar from "./NavBar";
import VerticalCarousel from "./VerticalCarousel ";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Spinner from "./Spinner";

const BASE_URL = "http://localhost:9000";
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/about`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const apiData = await response.json();
      setData(apiData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const cardsTemplate =
    data.length > 0 ? (
      data.map((item, index) => (
        <div key={index}>
          <p>
            <FaQuoteLeft />
            {item.description} <FaQuoteRight />
          </p>
        </div>
      ))
    ) : (
      <p>Something Went Wrong!</p>
    );

  return (
    <div className="home">
      <video
        className="video-bg"
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B3RbGqyLolagm91st/videoblocks-p9850125_beach_4k_rpaaa5f_j__8fa80dde1827a2aa714f38a7fffd2f2c__P360.mp4"
        autoPlay
        loop
        muted
      />
      <div className="bg-overlay"></div>
      <NavBar />
      <div className="home-text">
        <h1>Visit Sri Lanka</h1>
        <p>Come live out your ideal vacation with us</p>
      </div>
      <div className="carouselItem">
        {loading ? (
          <Spinner/>
        ) : (
          <VerticalCarousel
            cardsTemplate={cardsTemplate}
            fade={true}
            isVertical={true}
            slidesToShow={3}
            slidesToScroll={1}
            showDots={false}
            showArrows={false}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
