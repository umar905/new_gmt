import React, { useEffect, useState } from "react";
import axios from "axios"; // Added axios import
import "./InputHeader.css";
import { Link } from "react-router-dom";

const InputHeader = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredDevices =
    search.trim() === ""
      ? []
      : data.filter((device) =>
          device.name.toLowerCase().includes(search.toLowerCase())
        );

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.message || error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск"
        onChange={handleSearchChange}
        value={search}
      />
 
      {filteredDevices.length > 0 ? (
        <div className="filtered-device-grid">
          {filteredDevices.map((el) => (
            <Link to={`/products/${el._id}`} key={el._id} className="filtered-device-card">
              <img
                src={el.image}
                alt={el.name}
                className="filtered-device-img"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
              <h3>{el.name}</h3>
            </Link>
          ))}
        </div>
      ) : search.trim() !== "" ? (
        <div className="no-results">
        </div>
      ) : null}
    </div>
  );
};

export default InputHeader;
