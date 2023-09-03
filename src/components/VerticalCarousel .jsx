import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalCarousel.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function VerticalCarousel({
  cardsTemplate,
  fade,
  isVertical,
  slidesToShow,
  slidesToScroll,
  showDots,
  showArrows,
}) {

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    vertical: isVertical,
    fade: fade,
    dots: showDots,
    arrows: showArrows,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleMouseScroll = (e) => {
    if (sliderRef.current) {
      if (e.deltaY > 0) {
        // Scroll down
        sliderRef.current.slickNext();
      } else if (e.deltaY < 0) {
        // Scroll up
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <div className="vertical-carousel-container">
      <button className="carousel-button prev-button" onClick={handlePrevClick}>
        <FaAngleUp />
      </button>
      <div  className="slider-container" onWheel={handleMouseScroll}>
        <Slider {...settings} ref={sliderRef}>
          {cardsTemplate}
        </Slider>
      </div>
      <button className="carousel-button next-button" onClick={handleNextClick}>
        <FaAngleDown />
      </button>
    </div>
  );
}

export default VerticalCarousel;
