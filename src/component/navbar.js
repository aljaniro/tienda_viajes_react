import React, { useContext } from "react";
import "./navbar.css";
import { todos } from "./contexto";
import { NavLink } from "react-router-dom";
function Navbar() {
  const {  total } = useContext(todos);
  return (
    <div>
      <div className="container2">
        
        <NavLink to="/" className="nav-link">
            <h1>Tienda de viajes online</h1>
          </NavLink>
        <div className="detalle">
          <NavLink to="/detalles" className="nav-link">
            <i className="fa-brands fa-shopify"> Ver Detalles</i>
          </NavLink>

          <p>
            Total : {total}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
