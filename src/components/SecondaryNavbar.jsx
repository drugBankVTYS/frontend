import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import MedSoft from "./images/MedSoft__2_-removebg-preview.png";
import "./styles/secondarynavbar.css";

const SecondaryNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "light-bg" : "navbar-light bg-transparent"}`}>
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
            <FontAwesomeIcon icon={faHome} style={{width:"30px", height:"30px", marginTop:"5px",  color:"white"}} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
