import React, { useRef, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import "./CategoriesSlider.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const CategoriesSlider = () => {
  const sliderRef = useRef(null);
  const [data, setData] = useState([]);
  const { addItem } = useCart();

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    infinite: true, // Отключаем бесконечный цикл, чтобы края слайдов обрезались.
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false, // Отключаем центрирование.
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3.5, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 2.5, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 670, settings: { slidesToShow: 1.5, slidesToScroll: 1 } },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, 
          centerPadding: "20px", 
        },
      },
    ],
  };
  

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="slider-container slides_category">
        <h1>Каталог товаров</h1>
        <br />
        <br />
        {data.length > 0 ? (
          <Slider ref={sliderRef} {...settings} className="slider-wrapper">
            {data.map((el) => (
              <Link to={`/products/${el._id}`} key={el._id} className="slide-category">
                
                <div className="imgslidediv">
                  <img src={el.image} alt={el.name} />
                </div>
                <div className="infolabaratoryslide infolabaratoryslide2">
                  <h3>{el.name}</h3>
                  <p>
                    {el.category}
                    <br />
                    {el.inStock}
                  </p>
                  <h3>{el.price} rub</h3>
                  <button onClick={() => addItem(el)}>Добавить в корзину</button>
                </div>
              </Link>
            ))}
          </Slider>
        ) : (
          <p>Загрузка данных...</p>
        )}
        <div style={{ textAlign: "left" }} className="nextprev">
          <button className="prev" onClick={previous}>
            <img src="./img/prev.svg" alt="Previous" />
          </button>
          <button className="next" onClick={next}>
            <img src="./img/next.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
