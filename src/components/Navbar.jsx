import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MedSoft from "./images/MedSoft.png";
import { FaHome, FaList, FaInfo, FaPhone, FaSearch } from "react-icons/fa";
import "./styles/navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("anasayfa");

  useEffect(() => {
    setActiveLink(location.pathname.replace("/", ""));
  }, [location.pathname]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/drug?q=${name}`);
  };

  const menuItems = [
    { icon: <FaHome />, label: "Anasayfa", target: "anasayfa" },
    { icon: <FaList />, label: "İlaçlar", target: "ilac-listesi" },
    { icon: <FaInfo />, label: "Hakkımızda", target: "hakkimizda" },
    { icon: <FaPhone />, label: "İletişim", target: "iletisim" },
  ];

  const handleSetActive = (target) => {
    setActiveLink(target);
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
          {menuItems.map((menuItem) => (
            <ScrollLink
              key={menuItem.target}
              to={menuItem.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${activeLink === menuItem.target ? "active" : ""}`}
              onClick={() => handleLinkClick(menuItem.target)}
              onSetActive={(target) => handleSetActive(target)}
            >
              {menuItem.icon}
              <span className="menu-item-label">{activeLink === menuItem.target && menuItem.label}</span>
            </ScrollLink>
          ))}
        </div>

        <div className="d-flex align-items-center">
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Acenocoumarol"
            aria-label="Search"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" type="submit" onClick={handleSearch}>
            <FaSearch className="btn_icon_navbar" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
