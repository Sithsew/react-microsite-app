import React, { useEffect, useState } from "react";
import "./Discover.css";
import NavBar from "./NavBar";
import ResponsiveSlider from "./ResponsiveSlider";
import Spinner from "./Spinner";

// const BASE_URL = "http://localhost:9000";
const BASE_URL = "https://run.mocky.io/v3";

function Article({ data }) {
  const { image, title, description } = data;

  return (
    <figure className="cardSlider">
      <img src={image} alt={title} height={275} />
      <figcaption>
        <h3>{title}</h3>
        <h5>{description}</h5>
      </figcaption>
      <a href="#"></a>
    </figure>
  );
}

function Discover() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundImageLoading, setBackgroundImageLoading] = useState(true);

  useEffect(() => {
    getBackgroundImage();
    getPlaces();
  }, []);

  const getBackgroundImage = async () => {
    try {
      const response = await fetch(`${BASE_URL}/c13b7082-65b6-4baa-a6b8-c8a744ee994b`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBackgroundImage(data.imageUrl);
      setBackgroundImageLoading(false);
    } catch (error) {
      console.error("Error fetching background image:", error);
      setBackgroundImageLoading(false);
    }
  };

  const getPlaces = async () => {
    try {
      const response = await fetch(`${BASE_URL}/ba35c516-af13-4bc0-8a29-fc5a59595461`);

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
      <Article data={item} />
    </div>
  ));

  return (
    <>
      {
      backgroundImageLoading ?<Spinner color={'#42f58d'}/>: (
        <div
          className="responsive-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <NavBar />
          <div className="centered-content">
            <div className="cards">
              <h3>More Places to Visit</h3>
              {loading ? (
                <Spinner color={"#c1e0ce"} />
              ) : data.length > 0 ? (
                <ResponsiveSlider
                  cardsTemplate={cardsTemplate}
                  fade={false}
                  isVertical={false}
                  slidesToShow={3}
                  slidesToScroll={1}
                  showDots={false}
                  showArrows={true}
                />
              ) : (
                <h1>Something Went Wrong!</h1>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Discover;
