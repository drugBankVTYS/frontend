import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import resim from "./images/ilac.png";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import HeartPulseMonitor from "../../components/HeartPulseMonitor";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";
import CardDesign from "../../components/CardDesign";

const Home = () => {
  const [isCardSectionVisible, setIsCardSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardSection = document.querySelector(".card-section");
      const rect = cardSection.getBoundingClientRect();
      const isCardVisible = rect.top <= window.innerHeight * 0.75;

      if (isCardVisible) {
        setIsCardSectionVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-content">
      <Navbar />
      <Element name="anasayfa" className="element">
        <div
          className="hero-section"
          style={{ marginBottom: "50px", position: "relative" }}
        >
          <div className="d-flex w-100 flex justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="fs-1-container">
                <div className="fs-1">
                  <span></span>
                  <span className="text-colorful">SAĞLIĞINIZ</span>
                  <span>için</span>
                  <span>en</span>
                  <span>doğru</span>
                  <span>adresdesiniz</span>
                </div>
              </div>
              <button className="my-button">Daha Fazla Bilgi</button>
            </div>
            <img className="medicine-img" alt="a" src={resim} />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "180px",
              left: "20%",
              transform: "translateX(-50%)",
            }}
            className="heart1"
          >
            <HeartPulseMonitor />
            <HeartPulseMonitor />
          </div>
        </div>
      </Element>

      <Element name="ilac-listesi" className="element">
        <div className="card-section" id="ilaclar">
          <CardDesign />
        </div>
      </Element>

      <Element name="hakkimizda" className="element">
        <Info />
      </Element>

      <Element name="iletisim" className="element">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
