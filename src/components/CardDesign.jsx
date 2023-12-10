import React from "react";
import "./styles/cardDesign.css";
import { FaLink } from "react-icons/fa";

const CardDesign = () => {
  return (
    <div
      className="cards-section w-100 flex flex-column align-items-center portfolio"
      id="portfolio"
    >
      <h1>İlaçlar Hakkında Bütün Bilmeniz Gerekenler</h1>
      <div className="portfolio-container d-flex justify-content-center">
        
        <div className="portfolio-box card" style={{ width: "20rem" }}>
          <img
            src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Web Design 1"
          />
          <div className="portfolio-layer">
            <h4>İlaçlar</h4>
            <p>İlaçlar ve etken maddeleri</p>
            <div className="circle-icon">
              <FaLink  /> 
            </div>
          </div>
        </div>

   
        <div className="portfolio-box card" style={{ width: "20rem" }}>
          <img
            src="https://cdn.ima.org.uk/wp/wp-content/uploads/2016/01/medicine-molecule.jpg"
            alt="Web Design 1"
          />
          <div className="portfolio-layer">
            <h4>Moleküler Yapı</h4>
            <p>Moleküler yapı</p>
            <div className="circle-icon">
              <FaLink /> 
            </div>
          </div>
        </div>

      
        <div className="portfolio-box card" style={{ width: "20rem" }}>
          <img
            src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
            alt="Web Design 1"
          />
          <div className="portfolio-layer">
            <h4>Alerji</h4>
            <p>Alerjik reaksiyonlar</p>
            <div className="circle-icon">
              <FaLink  /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
