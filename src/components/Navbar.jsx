import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MedSoft2 from "./images/MedSoft__2_-removebg-preview.png";
import { FaHome, FaList, FaInfo, FaPhone, FaSearch } from "react-icons/fa";
import "./styles/navbar.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("anasayfa");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname.replace("/", ""));
  }, [location.pathname]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    { icon: <FaHome className={`text-white ${isScrolled ? "scrolled" : ""}`} />, label: <span className={`text-white ${isScrolled ? "scrolled" : ""}`}>Anasayfa</span>, target: "anasayfa" },
    { icon: <FaList className={`text-white ${isScrolled ? "scrolled" : ""}`} />, label: <span className={`text-white ${isScrolled ? "scrolled" : ""}`}>İlaçlar</span>, target: "ilac-listesi" },
    { icon: <FaInfo className={`text-white ${isScrolled ? "scrolled" : ""}`} />, label: <span className={`text-white ${isScrolled ? "scrolled" : ""}`}>Hakkımızda</span>, target: "hakkimizda" },
    { icon: <FaPhone className={`text-white ${isScrolled ? "scrolled" : ""}`} />, label: <span className={`text-white ${isScrolled ? "scrolled" : ""}`}>İletişim</span>, target: "iletisim" },
  ];
  
  
  

  const handleSetActive = (target) => {
    setActiveLink(target);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "light-bg" : "navbar-light bg-transparent"}`}>
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
            src={MedSoft2}
            style={{ width: "133px", height: "90px", marginTop: "20px" }}
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
              className={`nav-link ${activeLink === menuItem.target ? "active text-white" : ""}`}
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
            className={`form-control me-2 search ${isScrolled ? "scrolled" : ""}`}
            type="search"
            placeholder="Acenocoumarol"
            aria-label="Search"
            onChange={(e) => setName(e.target.value)}
          />
          <button className={`btn ${isScrolled ? "scrolled" : ""}`} type="submit" onClick={handleSearch}>
            <FaSearch className={`btn_icon_navbar text-white`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
