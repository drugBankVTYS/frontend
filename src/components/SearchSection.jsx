import React, { useState, useEffect } from "react";
import "./styles/SearchSection.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchSection = ({ onDataFetched }) => {
  const [searchText, setSearchText] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const typewriterTexts = ["Ara...", "İlaçlar...", "Moleküller Yapılar...", "Alerjiler..."];
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [data,setData] = useState([]);

  const secenekSec = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterIndex((prevIndex) => (prevIndex + 1) % typewriterTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [typewriterTexts.length]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentText = typewriterTexts[typewriterIndex];
      setPlaceholderText((prevText) => {
        if (prevText === currentText) {
          clearInterval(typingInterval);
          setTimeout(() => setPlaceholderText(""), 1000);
        } else {
          return currentText.substring(0, prevText.length + 1);
        }
        return prevText;
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, [typewriterIndex, typewriterTexts]);

  const handleSearch = () => {
  };
  const navigate = useNavigate();

  const aramaYap = async() => {
    //console.log("Arama yapılıyor: " + searchText);
    //console.log("Seçilen seçenek: " + selectedOption);
    navigate(`/drug?q=${searchText}&selectedOption=${selectedOption}`);
    window.location.reload();

  };

  return (
    <div className="drugs-page">
      <header>
        <h1>MedSoft'da 10.000 ilaçtan</h1>
        <h3>Dilediğinizi arayın...</h3>
      </header>

      <div className="background"></div>

      <div className="search-box">
        <input
          id="searchInput"
          type="text"
          className="search-input"
          placeholder={typewriterTexts[typewriterIndex]}
          aria-label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="search-icon" onClick={aramaYap}>
          <FaSearch />
        </div>
      </div>

      <div className="options">
        <button
          className={`option ${selectedOption === "ilaç" ? "selected" : ""}`}
          onClick={() => secenekSec("ilaç")}
        >
          İlaç
        </button>
        <button
          className={`option ${selectedOption === "molekül" ? "selected" : ""}`}
          onClick={() => secenekSec("molekül")}
        >
          Molekül
        </button>
        <button
          className={`option ${selectedOption === "alerji" ? "selected" : ""}`}
          onClick={() => secenekSec("alerji")}
        >
          Alerji
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
