import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/tree.png';

function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={one} alt="Slide 1" />
          <div className="carousel-caption">
            <h3>Slide 1</h3>
            <p>This is the first slide.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={two} alt="Slide 2" />
          <div className="carousel-caption">
            <h3>Slide 2</h3>
            <p>This is the second slide.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={three} alt="Slide 3" />
          <div className="carousel-caption">
            <h3>Slide 3</h3>
            <p>This is the third slide.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
  );
};

export default ImageCarousel;
