import React from "react";
import "./styles/SearchSection.css";
import { FaSearch } from "react-icons/fa";

const SearchSection = () => {
  const aramaYap = () => {
    const input = document.getElementById("searchInput").value;
    console.log("Arama yapılıyor: " + input);
  };

  return (
    <div className="drugs-page">
      <header>
        <h1>DrugBank Online'da 500.000'den Fazla</h1>
        <h2>İlaç ve İlaç Ürününü Arayın...</h2>
      </header>

      <div class="background"></div>

      <div class="input-group mb-3 search_section_input">
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Search"
          id="searchInput"
        />
        <div class="input-group-append">
          <button
            class="btn_search_section btn-outline-success"
            type="button"
            onclick={aramaYap}
          >
            <FaSearch className="search_button_search_section" />
          </button>
        </div>

        <div class="container">
          <button type="button" class="btn btn-primary custom-btn mt-3">
            Moleküler Yapı
          </button>
          <button type="button" class="btn btn-secondary custom-btn mt-3">
            İlaçlar
          </button>
          <button type="button" class="btn btn-success custom-btn mt-3">
            Alerji
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
