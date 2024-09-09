import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  // Konfiguracja slidera
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-full max-w-4xl mx-auto pt-16'>
      <Slider {...settings}>
        <div>
          <img className='w-full' src="assets/red-car.jfif" alt="Red Car" />
        </div>
        <div>
          <img className='w-full' src="assets/black2.jfif" alt="Black Car" />
        </div>
        <div>
          <img className='w-full' src="assets/audi.jfif" alt="Audi" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
