import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

function Home() {
  const { id } = useParams();
  const url = `https://62b47e4b530b26da4cbfdf12.mockapi.io/api/v1/Ajibade?page=1&limit=10`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({ loading: true, data: null, error: false });
    axios
      .get(url)
      .then((response) => {
        setProducts({ loading: false, data: response.data, error: false });
      })
      .catch(() => {
        setProducts({ loading: false, data: null, error: true });
      });
  }, [url]);

  let content = null;

  if (products.error) {
    content = (
      <div>If you see this error. Please remember to create your own.</div>
    );
  }

  if (products.loading) {
    content = (
      <p className="ob">
        <Loader />
      </p>
    );
  }
  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1>Top Breast Sellers</h1>
      <div>{content}</div>
    </div>
  );
}

export default Home;
