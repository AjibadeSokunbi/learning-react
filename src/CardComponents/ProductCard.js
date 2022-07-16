import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="homeP">
      <Link to={`/product/${props.product.id}`}>
        <div>
          <img
            className="pm"
            src={props.product.images}
            alt={props.product.name}
          />
        </div>
      </Link>
      <div>
        <h3>
          <Link to={`/product/${props.product.id}`}>{props.product.name}</Link>
        </h3>
        <div>$ {props.product.price}</div>
        <div>{props.product.description}</div>
        <Link to={`/product/${props.product.id}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductCard;
