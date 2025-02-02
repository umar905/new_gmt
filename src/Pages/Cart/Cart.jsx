import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Header from "../../Components/Header/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useCart } from "react-use-cart";
import './Cart.css';

const Cart = () => {
  const { items, isEmpty, emptyCart, updateItemQuantity } = useCart();
  let total = 0;
  const [data, setData] = useState([]);
  const [name, setName] = useState(""); // State for user's name
  const [phone, setPhone] = useState(""); // State for user's phone number

  const TELEGRAM_BOT_TOKEN = "7703320009:AAFpq-tq0RUB1APGSnBbqyyt44e9r0ZiXx0"; // Replace with your bot token
  const TELEGRAM_CHAT_ID = "-4766963135"; // Replace with your chat ID

  // Fetch products data
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

  // Send message to Telegram
  const sendToTelegram = async () => {
    if (isEmpty) {
      alert("Cart is empty. Cannot send to Telegram.");
      return;
    }

    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = items
      .map((el) => `Product: ${el.name}\nPrice: ${el.price}$\nCount: ${el.quantity}`)
      .join("\n\n");

    const totalMessage = `Total: ${total} $`;
    const userInfo = `Name: ${name}\nPhone: ${phone}`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: `${userInfo}\n\n${message}\n\n${totalMessage}`,
        }
      );
      emptyCart()

      alert("Message sent to Telegram successfully!");
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };

  return (
    <>
      <Header />
      <section className="cart">
        <div className="container">
          <div className="cart__wrapper">
            {isEmpty ? (
              <div className="empty">
                <img
                  className="emptycard"
                  src="./img/empty.png"
                  alt=""
                />
              </div>
            ) : (
              <>
                <button className="trash" onClick={() => emptyCart()}>
                  Delete all
                </button>
                <br />
                <br />
                <div className="wrapper">
                  {items?.map((el) => {
                    const countPrc = el.quantity * el.price;
                    total += countPrc;
                    return (
                      <div className="product card_page" key={el.id}>
                        <img src={el?.image} alt="" />
                        <div className="product_info">
                          <h2>{el?.name}</h2>
                          <h3>{countPrc}$</h3>
                          <div className="triple">
                            <button
                              onClick={() =>
                                updateItemQuantity(el.id, el.quantity + 1)
                              }
                            >
                              +
                            </button>
                            <b>{el.quantity}</b>
                            <button
                              onClick={() =>
                                updateItemQuantity(el.id, el.quantity - 1)
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <h1 className="total">Total: {total} $</h1>
                <div className="user-details">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button className="send-to-telegram" onClick={sendToTelegram}>
                  Send to Telegram
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
