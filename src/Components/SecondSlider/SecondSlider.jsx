import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./SecondSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SecondSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets in portrait mode
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h1>Комплексное оснащение кабинетов</h1>
      <div className="slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          
          <div key={1} className="SecondSlide">
            <img src="./img/labaratory1.png" alt=""  />
            <div className="infolabaratoryslide">
              <h3>Экспресс лаборатория</h3>
            </div>
          </div>
          <div key={2} className="SecondSlide">
            <img src="./img/labaratory2.png" alt=""  />
            <div className="infolabaratoryslide">
              <h3>Лазерная терапия</h3>
            </div>
          </div>
          <div key={3} className="SecondSlide">
            <img src="./img/labaratory3.png" alt=""  />
            <div className="infolabaratoryslide">
              <h3>Операционный блок</h3>
            </div>
          </div>
          <div key={4} className="SecondSlide">
            <img src="./img/labaratory1.png" alt=""  />
            <div className="infolabaratoryslide">
              <h3>Экспресс лаборатория</h3>
            </div>
          </div>
          <div key={5} className="SecondSlide">
            <img src="./img/labaratory2.png" alt=""  />
            <div className="infolabaratoryslide">
              <h3>Лазерная терапия</h3>
            </div>
          </div>
          <div key={6} className="SecondSlide">
            <img src="./img/labaratory3.png" alt=""  />
            <div className="infolabaratoryslide">
              <h3>Операционный блок</h3>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: "left" }} className="nextprev">
          <button className="prev" onClick={previous}>
            <img src="./img/prev.svg" alt="" />
          </button>
          <button className="next" onClick={next}>
              <img src="./img/next.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSlider;
