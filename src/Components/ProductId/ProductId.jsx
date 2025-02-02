import React, { useEffect, useState } from "react";
import "./ProductId.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header/Header/Header";
import Footer from "../Footer/Footer";
import { useCart } from "react-use-cart";
const ProductId = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const { getItem, addItem, removeItem } = useCart();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <section className="itemsection">
        <div className="container">
          <div className="itemsection__wrapper">
            {data ? (
              <>
                <img src={data.image} alt={data.name} />
                <div className="infoitem">
                  <h1>{data.name}</h1>
                  <b>{data.inStock}</b>
                  <h3>{data.price} rub</h3>
                  <p>
                    <h3>О товаре</h3>
                    <br />
                    {data.description}
                  </p>
                  {!getItem(data._id) ? (
                  <button
                    className="addCard"
                    onClick={() =>
                      addItem({
                        id: data._id,
                        name: data.name,
                        price: data.price,
                        image: data.image,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="addCard" onClick={() => removeItem(data._id)}>Remove</button>
                )}
                </div>
                
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductId;
