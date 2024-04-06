import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./Products.scss";

const Products = () => {
  const [desc, setDesc] = useState("");
  const [price, SetPrice] = useState()
  const url = document.location.href.at(-1);

  useEffect(() => {
    axios.get("https://65f99361df151452461201d9.mockapi.io/skirt/skirts")
      .then(function (response) {
        setDesc(response.data[url - 1].desc);
        SetPrice(response.data[url - 1].price);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url]);
  const ImageUrl = `/img/skirt/${url}.jpeg`;

  return (
    <>
      <div className="flex flex-row mt-40">
        <div className="product">
          <img src={ImageUrl} alt="skirt" className="cart-img" />
        </div>
        <div className="desc ml-30">
          <h3>{desc}</h3>
        </div>
      </div>
      <div className="price">
        <h3 className="ml-10">Цена: {price} тг.</h3>
      </div>
    </>
  );
};

export default Products;
