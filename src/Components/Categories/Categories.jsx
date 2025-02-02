import React from "react";
import "./Categories.css";
import Img1 from '../../images/CategorySectionImg/img1.png';
import Img2 from '../../images/CategorySectionImg/img2.png'
import Img3 from '../../images/CategorySectionImg/imag3.png'

const Categories = () => {
  return (
    <>
      <div className="section-category">
        <div className="container">
          <div className="category-section-wrapper">
            <h1>Популярные категории</h1>
            <div class="category-lists">
              <div class="area2 area" >
                  <img src={Img2} alt="" width={"200px"} />
                  <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
              <div class="area1 area" >
                  <img src={Img1} alt="" width={"200px"}/>
                  <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
              <div class="area3 area" >
                  <img src={Img3} alt="" width={"200px"}/>
                  <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
              <div class="area4 area" >
                  <img src="./img/img4.png" alt="" width={"200px"}/>
                  <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
              <div class="area5 area" >
                  <img src="./img/img5.png" alt="" width={"200px"}/>
                  <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
              <div class="area6 area" >
                  <img src="./img/img6.png" alt="" width={"200px"}/>
                  <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
              <div class="area7 area" >
                    <img src="./img/img7.png" alt="" width={"200px"}/>
                    <div className="category-info">
                      <h2>Дерматологическое оборудование</h2>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
