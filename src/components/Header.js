import React from "react";
import iconlogo  from "../assets/img/iconlogo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand d-flex" href="#">
          <img src={iconlogo} />
          <h1 className="m-3" style={{color:"#66FF00"}}>muzo$hop</h1>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productlisting">Product Listing</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header