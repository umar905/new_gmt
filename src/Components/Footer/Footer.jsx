import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_wrapper">
            <div className="navigationfooter">
              <h2>Покупателям</h2>
              <div className="footnav">
                <ul>
                  <a href="/about">О компании</a>
                </ul>
                <ul>
                  <a>Оплата</a>
                </ul>
              </div>
            </div>

    
            <div className="navigationfooter">
              <h2>Контакты</h2>
              <div className="footnav">
                <ul>
                  <li>
                    <span>Адрес</span>г.Ташкент, Чиланзарский р-н., <br />
                    ул. Бунедкор шох 1
                  </li>
                  <li>График работы:</li>
                  <li>Пн-Пт с 09:00-19:00, </li>
                  <li>Сб-Вс - выходной</li>
                  <br />
                  <br />
                  <br />
                  <li>+998-99-862-21-22</li>
                  <li>+998-99-829-21-22</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
