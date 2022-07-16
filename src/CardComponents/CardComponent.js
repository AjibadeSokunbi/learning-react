import React from 'react'
import './CardComponent.css';
import { useState } from "react";

function CardComponent(props) {
    const [toggled, setToggle] = useState(false);
  return (
    <div className="card">
      <div className="title" style={{ background: props.colour }}>
        <h2 className="fs-1">{props.title}</h2>
      </div>

      <div className="description">
        <p>{props.description}</p>
      </div>

      <button
        className="btn-secondary w-50 align-self-end"
        onClick={props.addToCart}
      >
        Add to cart
      </button>

            <button className="App" onClick = {() => setToggle(toggled => !toggled) } > Toggle</button>
       <div> {toggled && <div>Do you seee me?</div>} </div>
    </div>

      
  );
}


export default CardComponent;