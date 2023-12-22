import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MedSoft from "./images/MedSoft.png";
import "./styles/navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("anasayfa");

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Medicine sayfasına yönlendir
    navigate(`/drug?q=${name}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link
          className="navbar-brand logo"
          to="/"
          onClick={() => {
            scrollToTop();
            handleLinkClick("anasayfa");
          }}
        >
          <img
            className="drugbank-img rounded"
            alt="DrugBank Logo"
            src={MedSoft}
            style={{ width: "133px", height: "85px", marginTop: "20px" }}
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
            className={`nav-link ${
              activeLink === "ilac-listesi" ? "active" : ""
            }`}
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
            className={`nav-link ${
              activeLink === "hakkimizda" ? "active" : ""
            }`}
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
            placeholder="Acenocoumarol"
            aria-label="Search"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" type="submit" onClick={handleSearch}>
          <FaSearch  className="btn_icon_navbar"/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
