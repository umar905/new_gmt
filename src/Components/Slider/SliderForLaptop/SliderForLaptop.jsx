import React from 'react'
import './SliderForLaptop.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../../../images/HeroSectionImages/Banner.png'
import Slider from 'react-slick';
const SliderForLaptop = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
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
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className="container">
        <div className="slider-container">
        <div className='slidecontainer'>
         <div className="slideinfo">
            <h1>Заголовок баннерав пару строк</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <div className="sliderbuttons">
                <button>
                    Запросить цену
                </button>
                <button>
                    В каталог
                </button>
            </div>
         </div>
          <img className='banner' src={Banner} alt="" />
        </div>
       
       
     
      
    </div>
        </div>
    </>
  )
}

export default SliderForLaptop
