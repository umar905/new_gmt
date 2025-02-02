import React, { useState } from "react";
import "./Mapsection.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Mapsection = () => {
  const chat_id = "-4766963135";
  const TOKEN = "7703320009:AAFpq-tq0RUB1APGSnBbqyyt44e9r0ZiXx0";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `
      📝 Новая заявка:
      👤 Имя: ${formData.name}
      📞 Телефон: ${formData.phone}
      📧 Email: ${formData.email}
      ❓ Вопрос: ${formData.question}
    `;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    try {
      const response = await axios.post(url, {
        chat_id,
        text: message,
      });

      if (response.status === 200) {
        alert("Сообщение успешно отправлено!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          question: "",
        });
      } else {
        alert("Ошибка отправки сообщения.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке сообщения.");
    }
  };

  return (
    <>
      <section className="Mapsection">
        <div className="container">
          <div className="mapsectionwrapper">
            <div className="map">
              <iframe
                className="ppp"
                src="https://yandex.uz/map-widget/v1/?ll=37.655154%2C55.838033&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgc4MDYyNjkxEjfQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0YPQu9C40YbQsCDQlNC-0LrRg9C60LjQvdCwIgoNc5wWQhUSW19C&sctx=ZAAAAAgAEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ%2BWcG8YEd1z8RT1yOVyB6xD8iBgABAgMEBSgKOABA31BIAWoCdXqdAc3MzD2gAQCoAQC9Ab1ml%2F%2FCAQQAAAAAggIPVWxpdHNhIERva3VraW5higIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.719638%2C55.840195&sspn=0.150263%2C0.078223&text=Ulitsa%20Dokukina&z=17.68"
                allowFullScreen
                title="Yandex Map"
              />
            </div>
            <div className="mapinfo">
              <h1>Остались вопросы?</h1>
              <p>
                Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте
                свои координаты и наш менеджер перезвонит вам через 10 минут
              </p>
              <Box
                className="form"
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  id="name"
                  label="Ваше имя"
                  variant="standard"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  id="phone"
                  label="Ваш телефон"
                  variant="standard"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  id="email"
                  label="Ваш email"
                  variant="standard"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  id="question"
                  label="Ваш вопрос"
                  multiline
                  rows={4}
                  variant="standard"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                />
                <button type="submit">Отправить</button>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mapsection;
