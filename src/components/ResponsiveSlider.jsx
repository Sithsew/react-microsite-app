import Slider from "react-slick";
import "./ResponsiveSlider.css";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function ResponsiveSlider({
  cardsTemplate,
  fade = false,
  isVertical,
  slidesToShow = 1,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  return (
    <>
      <button className="slider-button prev-button" onClick={handlePrevClick}>
        <FaAngleLeft />
      </button>
      <Slider {...settings}  ref={sliderRef}>{cardsTemplate}</Slider>;
      <button className="slider-button next-button" onClick={handleNextClick}>
        <FaAngleRight />
      </button>
    </>
  );
}

export default ResponsiveSlider;
