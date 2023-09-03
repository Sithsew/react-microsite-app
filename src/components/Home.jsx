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
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [backgroundVideoLoading, setBackgroundVideoLoading] = useState(true);

  useEffect(() => {
    getBackgroundVideo();
    getDescription();
  }, []);
  const getBackgroundVideo = async () => {
    try {
      const response = await fetch(`${BASE_URL}/background-video`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBackgroundVideo(data.videoUrl);
      setBackgroundVideoLoading(false);
    } catch (error) {
      console.error("Error fetching background video:", error);
      setBackgroundVideoLoading(false);
    }
  };

  const getDescription = async () => {
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

  const cardsTemplate = data.map((item, index) => (
    <div key={index}>
      <p>
        <FaQuoteLeft />
        {item.description} <FaQuoteRight />
      </p>
    </div>
  ));

  return (
    <>
      {backgroundVideoLoading ? (
        <Spinner color={'#42f58d'}/>
      ) : (
        <div className="home">
          <video
            className="video-bg"
            src={backgroundVideo}
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
        <Spinner color={'#c1e0ce'}/>
        ) : data.length > 0 ? (
              <VerticalCarousel
                cardsTemplate={cardsTemplate}
                fade={true}
                isVertical={true}
                slidesToShow={3}
                slidesToScroll={1}
                showDots={false}
                showArrows={false}
              />
            ) : (
              <h1>Something Went Wrong!</h1>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
