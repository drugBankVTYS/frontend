import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MedSoft from "./images/MedSoft.png";
import "./styles/navbar.css";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("anasayfa");

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData(name);
  }, [name]);

  let isFetching = false; // Bu değişken, bir istek yapılırken bir daha istek yapılmamasını sağlar.

  const fetchData = async (name) => {
    try {
      if (isFetching) {
        return;
      }

      isFetching = true;
      console.log(name);
      const response = await fetch(
        `http://localhost:3001/api/showdrug?name=${name}`
      );
      const data = await response.json();
      setData(data.drugs[0]._id);
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
    } finally {
      isFetching = false;
    }
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
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setName(e.target.value)}
          />
          <Link to={`/drug_detail/${data}`}>
            <button
              className="btn"
              type="submit"
              onClick={() => fetchData(name)}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
