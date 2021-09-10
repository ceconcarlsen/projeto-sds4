import React from "react";

import ImgDsDark from "../../assets/img/ds-dark.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex flex-columnfl p-1 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-4 my-md-0 mr-md-3">
          <Link to="/">
            <img src={ImgDsDark} alt="DevSuperior" width="120" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
