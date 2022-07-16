import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="rr"> Menu</div>
      <div>
        <li>
          <Link className="mm" to="/" onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link className="mm" to="/about" onClick={props.closeMenu}>
            About
          </Link>
        </li>
      </div>
    </div>
  );
}

export default NavigationMenu;
