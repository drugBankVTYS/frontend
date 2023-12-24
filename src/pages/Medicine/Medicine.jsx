import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import "../../components/styles.css";
import "./medicine.css";
import SearchSection from "../../components/SearchSection";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import { useLocation, useNavigate } from "react-router-dom";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import resim from "./images/MedSoft__2_-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Medicine(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const drugName = queryParams.get("q");
  const [count, setCount] = useState(0);

  const datasPerPage = 10;
  const pagesToShow = 10;

  useEffect(() => {
    fetchData();
  }, [currentPage, searchData]);

  const fetchData = async () => {
    try {
      if (drugName != null) {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:3001/api/showdrug?name=${drugName}`
        );
        setData(response.data.drugs);
        setCount(response.data.count);
        setTotalPages(Math.ceil(response.data.count / datasPerPage));
      } else {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:3001/api/alldrugs?pageNumber=${currentPage}`
        );
        setData(response.data.drugs);
        setCount(response.data.count);
        setTotalPages(Math.ceil(response.data.count / datasPerPage));
      }
    } catch (error) {
      console.error("Data fetching error:", error.response || error);
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
    <div>
      {isLoading ? (
        // Loading durumu
        <div className="loading-container">
          <LoadingScreen class="loading" />
        </div>
      ) : (
        <>
          <SecondaryNavbar />
          <div className="search_section">
            <SearchSection onDataFetched={setSearchData} />
          </div>
          <div className="content-wrapper">
            {data.length > 0 ? (
              // Veri varsa göster
              <div>
                <div className="row">
                  {data.map((datas) => (
                    <div
                      key={datas.drug_id}
                      className="d-flex justify-content-center col-4 mb-4"
                    >
                      <Link to={`/drug_detail/${datas._id}`}>
                        <div
                          className="card-medicine"
                          style={{ width: "20rem" }}
                          onClick={() => handleCardClick(datas._id)}
                        >
                          <img
                            src={resim}
                            alt={datas.drug_name}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h3 className="card-title">{datas.drug_name}</h3>
                            <p className="card-text3">
                              Daha fazlası için tıklayınız...
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Veri bulunamadı.</p>
            )}
            {/* Pagination Section */}
            <div className="pagination-container">
              <p>
                Sayfa {currentPage} / {totalPages}
              </p>
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" onClick={prePage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Önceki
                  </a>
                </li>
                {getPageNumbers().map((n, i) => (
                  <li
                    className={`page-item ${
                      currentPage === n ? "activep" : ""
                    }`}
                    key={i}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => changePage(n)}
                    >
                      {" "}
                      {n}{" "}
                    </a>
                  </li>
                ))}
                <li className="page-item">
                  <a href="#" className="page-link" onClick={nextPage}>
                    Sonraki
                    <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Medicine;
