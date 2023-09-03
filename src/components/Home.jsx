import React from "react";

import "./Home.css";

import NavBar from "./NavBar";
import VerticalCarousel from "./VerticalCarousel ";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Home = () => {
  const data = [
    {
      title: "Cultural Gem",

      description:
        "Steeped in history and tradition, Sri Lanka boasts a rich cultural heritage that entices history buffs and cultural enthusiasts alike. Explore the ancient city of Polonnaruwa, home to centuries-old temples and royal ruins, or marvel at the architectural marvel that is the Sigiriya Rock Fortress. As you journey through this land, you'll discover a tapestry of customs and festivals that reflect the island's diverse religious and ethnic influences. Sri Lanka's vibrant cultural tapestry invites visitors to immerse themselves in its storied past.",
    },
    {
      title: "Nature's Playground",
      description:
        "Sri Lanka, often referred to as the \"Emerald Isle,\" beckons adventurers with its breathtaking natural beauty. From the misty heights of Ella's lush tea plantations to the untouched wilderness of Yala National Park, this island paradise offers a diverse range of outdoor experiences. Whether you're trekking through dense rainforests, encountering majestic elephants on safari, or simply basking on golden beaches, Sri Lanka's pristine landscapes cater to every traveler's longing for adventure.",
    },

    {
      title: "Warmth of the People",

      description:
        "Beyond its stunning landscapes and historical wonders, it's the warm-hearted Sri Lankan people who truly make this destination special. Locals welcome tourists with open arms, eager to share their traditions, stories, and flavorsome cuisine. From sipping freshly brewed Ceylon tea in a local home to partaking in traditional dance performances, visitors can engage in immersive cultural experiences that foster connections and create lasting memories.",
    },
  ];
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
        <VerticalCarousel
          cardsTemplate={cardsTemplate}
          fade={true}
          isVertical={true}
          slidesToShow={3}
          slidesToScroll={1}
          showDots={false}
          showArrows={false}
        />
      </div>
    </div>
  );
};

export default Home;
