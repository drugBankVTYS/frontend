import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import MedSoft from "./images/MedSoft.png";
import "./styles/secondarynavbar.css";

const SecondaryNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          <img
            className="drugbank-img rounded"
            alt="DrugBank Logo"
            src={MedSoft}
            style={{ width: "133px", height: "85px", marginTop: "20px" }}
          />
        </Link>

        {/* Ana Sayfa bağlantısı */}
        <div className="ml-auto">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHome} style={{width:"30px", height:"30px", marginTop:"5px" }} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
