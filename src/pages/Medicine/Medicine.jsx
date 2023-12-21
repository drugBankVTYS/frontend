import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import "../../components/styles.css";
import "./medicine.css";
import SearchSection from "../../components/SearchSection";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import LoadingScreen from "../../components/LoadingScreen";

function Medicine() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const datasPerPage = 10;
  const pagesToShow = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/alldrugs?pageNumber=${currentPage}`
      );
      setData(response.data.drugs);
      setTotalPages(Math.ceil(response.data.count / datasPerPage));
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (drugId) => {
    console.log(`Card clicked with drugId: ${drugId}`);
  };

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div >
      <Navbar />

      {isLoading ? (
        // Loading durumu
        <div className="loading-container">
          <LoadingScreen class="loading" />
        </div>
      ) : (
        <>
          <div className="serach_section">
            <SearchSection />
          </div>
          <div className="content-wrapper">
            {data.length > 0 ? (
              // Veri varsa göster
              <div className="row">
                {data.map((datas) => (
                  <div
                    key={datas.drug_id}
                    className="d-flex justify-content-center col-4"
                  >
                    <Link to={`/drug_detail/${datas._id}`}>
                      <div
                        className="card-medicine"
                        style={{ width: "30rem" }}
                        onClick={() => handleCardClick(datas._id)}
                      >
                        <div>{datas.drug_name}</div>
                        <h2>{datas.drug_name}</h2>
                        <p>Drug ID: {datas.drug_id}</p>
                        <p>Drug State: {datas.drug_state}</p>
                        <h3>Target Information</h3>
                        <p>Target Name: {datas.target_name}</p>
                        <p>Target UniProt: {datas.target_uniprot}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              // Veri yoksa mesaj göster
              <p>No data available.</p>
            )}
            {/* Pagination */}
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  Önceki
                </a>
              </li>
              {getPageNumbers().map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "activep" : ""}`}
                  key={i}
                >
                  <a href="#" className="page-link" onClick={() => changePage(n)}>
                    {" "}
                    {n}{" "}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Sonraki
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Medicine;
