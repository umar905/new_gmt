import React from 'react'
import Header from '../../Components/Header/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Mapsection from '../../Components/Mapsection/Mapsection'
import './Contact.css'
const Contact = () => {
  return (
    <>
      <Header/>
      <section className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <h1>Контакты</h1>
            <ul className="contact__wrapper__info">
              <li>
                <b>Реквизиты компании</b>
                <p>ООО "Labhim Products"</p>
              </li>
              <li>
                <b>Режим работы:</b>
                <p>Пн-Пт с 09:00-19:00 <br />Сб-Вс - выходной</p>
              </li>
              <li>
                <b>Адрес</b>
                <p>г.Ташкент, Чиланзарский р-н., <br />ул. Бунедкор шох 1 </p>
              </li>
              <li>
                <b>Телефон</b>
                <p>+998998622122 <br /> +998998292122</p>
              </li>
              <li>

              </li>
            </ul>
          </div>
        </div>
      </section>
      <Mapsection/>
      <Footer/>
    </>
  )
}

export default Contact
