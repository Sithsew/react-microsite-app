import React from "react";
import "./Discover.css";
import NavBar from "./NavBar";
import ResponsiveSlider from "./ResponsiveSlider";

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
  const data = [
    {
      image: "https://www.holidify.com/images/bgImages/ARUGAM-BAY.jpg",
      title: "Arugam Bay Beach",
      description:
        "The Sri Lankan coastal town of Arugam Bay lies on the Indian Ocean, 320 kilometres from the capital city Colombo. With several surfing spots scattered across the area, for both beginners as well as skilled surfers, Arugam Bay is often called a surfer’s paradise. ",
    },
    {
      image: "https://www.holidify.com/images/bgImages/GALLE.jpg",
      title: "Galle Fort",
      description:
        "Primarily known for the famous Galle Fort, a UNESCO World Heritage Site, the city has played a significant role in the country’s lengthy colonial history.",
    },
    {
      image: "https://www.holidify.com/images/bgImages/ADAMS-PEAK.jpg",
      title: "Adam’s Peak",
      description:
        "As one of the most famous pilgrimage sites in the Indian subcontinent, Adam’s Peak is a 7,359 feet tall mountain in Sri Lanka, frequently visited by people of almost all major religions.",
    },
    {
      image: "https://www.holidify.com/images/bgImages/YALA-NATIONAL-PARK.jpg",
      title: "Yala National Park",
      description:
        "Yala National Park was originally a hunters arena during British colonial rule but now has the highest population of leopards on earth.",
    },
    {
      image: "https://www.holidify.com/images/bgImages/KANDY.jpg",
      title: "Temple Of The Sacred Tooth Relic",
      description:
        "Kandy is a beautiful place in Sri Lanka found precisely in the middle of the country. A city of both historical as well as religious importance, Kandy is renowned for being the site of the Temple Of The Sacred Tooth Relic, unarguably the most famous among all the temples of Sri Lanka. ",
    },
    {
      image: "https://www.holidify.com/images/bgImages/POLONNARUWA.jpg",
      title: "The Royal Palace of King Parakramabahu ",
      description:
        "This beautiful place in Sri Lanka once served as the capital of the Kingdom of Polonnaruwa under the Chola Empire in the 10th century.",
    },
  ];

  const cardsTemplate =
    data.length > 0 ? (
      data.map((item, index) => (
        <div key={index}>
          <Article data={item} />
        </div>
      ))
    ) : (
      <p>Something Went Wrong!</p>
    );

  return (
    <div className="responsive-background">
      <NavBar />
      <div className="centered-content">
        <div className="cards">
          <h3>More Places to Visit</h3>
          <ResponsiveSlider
            cardsTemplate={cardsTemplate}
            fade={false}
            isVertical={false}
            slidesToShow={3}
            slidesToScroll={1}
            showDots={false}
            showArrows={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Discover;
