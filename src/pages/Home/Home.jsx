import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import Footer from "../../components/Footer";
import Info from "../../components/Info";
import { Link as ScrollLink, Element } from "react-scroll";
import CardDesign from "../../components/CardDesign";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  const [isCardSectionVisible, setIsCardSectionVisible] = useState(false);

  const handleType = (count) => {};

  const handleDone = () => {
    console.log("Finish!");
  };
  useEffect(() => {
    const handleScroll = () => {
      const cardSection = document.querySelector(".card-section");
      const rect = cardSection.getBoundingClientRect();
      const isCardVisible = rect.top <= window.innerHeight * 0.75;

      if (isCardVisible) {
        setIsCardSectionVisible(true);
      }
    };

    const handleMouseMove = (e) => {
      const heroSection = document.querySelector(".hero-section");
      const parallaxLayer = document.querySelector(".parallax-layer");
      const moveX = (e.clientX * -1) / 40;
      const moveY = (e.clientY * -1) / 40;
      parallaxLayer.style.transform =
        "translate(" + moveX + "px," + moveY + "px)";
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="page-content">
      <Navbar />
      <Element name="anasayfa" className="element">
        <div class="parallax-container">
          <div class="parallax-layer"></div>
          <div class="content">
            <div
              className="hero-section"
              style={{ marginBottom: "50px", position: "relative" }}
            >
              <div className="d-flex w-100 flex justify-content-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="fs-1-container">
                    <div className="fs-1">
                      <span
                        className="text-colorful"
                        style={{ color: "white" }}
                      >
                        <Typewriter
                          words={["DRUGBANK"]}
                          loop={Infinity}
                          cursor
                          cursorStyle=""
                          cursorColor="pink"
                          typeSpeed={100}
                          deleteSpeed={100}
                          delaySpeed={2000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                      <br />
                      <span className="text2">
                        İlaçların Etkilyeci Dünyasına Hoşgeldiniz
                      </span>
                    </div>
                  </div>
                  <button className="my-button">
                    <Link to="/drug">Hadi bu dünyayı keşfedelim</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="ilac-listesi" className="element">
        <div className="card-section" id="ilaclar">
          <CardDesign />
        </div>
      </Element>

      <Element name="hakkimizda" className="element info-section">
        <Info />
      </Element>

      <Element name="iletisim" className="element">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
