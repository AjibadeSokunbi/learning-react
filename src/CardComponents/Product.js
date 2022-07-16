import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import "./Component.css";

function Product() {
  const { id } = useParams();
  const url = `https://62b47e4b530b26da4cbfdf12.mockapi.io/api/v1/Ajibade/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  useEffect(() => {
    setProduct({ loading: true, data: null, error: false });
    axios
      .get(url)
      .then((response) => {
        setProduct({ loading: false, data: response.data, error: false });
      })
      .catch(() => {
        setProduct({ loading: false, data: null, error: true });
      });
  }, [url]);

  if (product.error) {
    content = (
      <div>If you see this error. Please remember to create your own.</div>
    );
  }

  if (product.loading) {
    content = (
      <p>
        <Loader />
      </p>
    );
  }
  if (product.data) {
    content = (
      <div className="pm">
        <h1>{product.data.name}</h1>
        <div>
          <img className="pm" src={product.data.images} alt={product.name} />
        </div>
        <div>₿{product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;

// const handleAssets = async () => {
//   let assets;

//   try {
//     const response = await axios.get(url);
//     assets = response.data;
//   } catch (err) {
//     console.log(err);
//   }

//   console.log(assets);
// };

// handleAssets();
