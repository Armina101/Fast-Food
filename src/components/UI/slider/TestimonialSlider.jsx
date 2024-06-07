import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "The variety of delicacies available on FastFood is amazing. 
          I can always find something new to try, and the food quality is top-notch!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jordan Bloomberg</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "FastFood makes it so convenient to order food. The checkout process is quick, 
          and I love being able to save my favorite meals for easy reordering."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Tiffany Hadish</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "The best food delivery app I've ever used! FastFood's selection of restaurants 
          and the overall experience is fantastic. I'm a loyal customer for life"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Muhammad Ali</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;