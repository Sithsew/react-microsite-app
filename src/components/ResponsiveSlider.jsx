import Slider from "react-slick";

function ResponsiveSlider({
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  return <Slider {...settings}>{cardsTemplate}</Slider>;
}

export default ResponsiveSlider;
