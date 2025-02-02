import React from "react";
import Header from "../../Components/Header/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Mapsection from "../../Components/Mapsection/Mapsection";
import './About.css'
const About = () => {
  return (
    <>
      <Header />
      <section className="aboutpage">
        <div className="container">
          <div className="aboutpage__wrapper">
            <img src="./img/about.png" alt=""  />
            <div className="aboutpage__wrapper__info">
              <h1>Глобал медикал трейд</h1>
              <p>
                Учитывая стремительное развитие мировых медицинских технологий,
                врачи в Российской Федерации и соседних странах столкнулись
                с вызовом, требующим обновления приборов в различных
                направлениях, от установок компьютерной томографии
                до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью
                цифровую платформу при диагностике и лечении заболеваний
                также стал серьёзным испытанием для большинства больниц
                и частных клиник.
                <br />
                <br />
                Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
                специалистам всю необходимую помощь в деле поставок медицинского
                оборудования. Наш каталог включает передовое оборудование
                от лучших производителей России, Европы, Азии и США.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Mapsection />
      <Footer />
    </>
  );
};

export default About;
