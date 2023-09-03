import React, { useEffect, useState } from "react";
import "./Discover.css";
import NavBar from "./NavBar";
import ResponsiveSlider from "./ResponsiveSlider";
import Spinner from "./Spinner";

const BASE_URL = "http://localhost:9000";

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/places`);

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
    <div className="responsive-background">
      <NavBar />
      <div className="centered-content">
        <div className="cards">
          <h3>More Places to Visit</h3>
          {loading ? (
            <Spinner />
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
  );
}

export default Discover;
