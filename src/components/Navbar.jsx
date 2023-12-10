import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import drugbank from "./images/drugbank2.png";
import "./styles/navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("anasayfa");

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/" onClick={() => { scrollToTop(); handleLinkClick("anasayfa"); }}>
          <img
            className="drugbank-img rounded"
            alt="DrugBank Logo"
            src={drugbank}
            style={{ width: "200px", height: "40px", margin: "0" }}
          />
        </Link>

        <div className="navbar-nav">
          <ScrollLink
            to="anasayfa"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${activeLink === "anasayfa" ? "active" : ""}`}
            onClick={() => handleLinkClick("anasayfa")}
          >
            Anasayfa
          </ScrollLink>
          <ScrollLink
            to="ilac-listesi"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${activeLink === "ilac-listesi" ? "active" : ""}`}
            onClick={() => handleLinkClick("ilac-listesi")}
          >
            İlaç Listesi
          </ScrollLink>
          <ScrollLink
            to="hakkimizda"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${activeLink === "hakkimizda" ? "active" : ""}`}
            onClick={() => handleLinkClick("hakkimizda")}
          >
            Hakkımızda
          </ScrollLink>
          <ScrollLink
            to="iletisim"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link ${activeLink === "iletisim" ? "active" : ""}`}
            onClick={() => handleLinkClick("iletisim")}
          >
            İletişim
          </ScrollLink>
        </div>

        <div className="d-flex align-items-center  ">
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn " type="submit">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
