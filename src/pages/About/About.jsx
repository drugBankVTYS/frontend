import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import samet from "./images/samet2.jpg";
import yildiz from "./images/yildiz2.jpg";
import ozkan from "./images/ozkan2.jpg";
import beyza from "./images/beyza2.jpg";
import SecondaryNavbar from "../../components/SecondaryNavbar";

const About = () => {
  return (
    <div className="hakkimizda-sayfasi">
        <div>
            <h3 className="title-about">Büyük işleri yapan mini ekibimiz</h3>
        </div>
      <header>
        <div className="container">
          <SecondaryNavbar />
        </div>
      </header>
      <main>
        <div className="kartlar">
          <div className="kart kart-1">
            <div>
              <img
                src={samet}
                alt="Resim"
                className="kart-img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="kart-yazi">
              <h2>MUHAMMED SAMET AKGÜL</h2>
              <p>
                Fırat üniversitesi yazılım mühendisliği 3.sınıf öğrencisiyim.
                Güncel olarak Java Spring Boot, Mikroservisler, Cloud, NodeJS ve
                React gibi teknolojilerle uğraşmaktayım. 1.5 yıl Android üzerine
                kendimi geliştirdikten sonra son 6 aydır backend üstüne
                geliştirmekteyim. MongoDB, MySQL, MSSQL, Postman, Docker,
                Git/Github gibi toolları kullandım, ve kendimi geliştirmeye
                devam etmekteyim.
              </p>
              <div className="social-media social-media2">
                <a
                  href="https://www.linkedin.com/in/muhammedsametakgul"
                  className="linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/muhammedsametakgul"
                  className="github"
                >
                  <FaGithub />
                </a>
                <a href="mailto:msametakgul@gmail.com" className="mail">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <div className="kart kart-2">
            <div className="resim-sagda">
              <img
                src={yildiz}
                alt="Resim"
                className="kart-img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="kart-yazi">
              <h2>YILDIZ ALTIPARMAK</h2>
              <p>
                Fırat Üniversitesi Yazılım mühendisliği 3.sınıf öğrencisiyim.
                Yapay zeka teknolojilerine büyük bir merakım var ve bu alanda
                kendimi geliştirmek için sürekli olarak yeni bilgiler edinmeye
                çalışıyorum. Frontend teknolojilerine olan ilgim ve yeteneklerim
                sayesinde, kullanıcı dostu ve etkileyici kullanıcı arayüzleri
                oluşturmak konusunda deneyim kazandım
              </p>
              <div className="social-media social-media2">
                <a
                  href="https://www.linkedin.com/in/y%C4%B1ld%C4%B1z-alt%C4%B1parmak-922721269/?originalSubdomain=tr"
                  className="linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/yildizaltiparmak"
                  className="github"
                >
                  <FaGithub />
                </a>
                <a href="mailto:yildizaltiparmak524@gmail.com" className="mail">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <div className="kart kart-3">
            <div className="resim-solda">
              <img
                src={ozkan}
                alt="Resim"
                className="kart-img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="kart-yazi">
              <div className="kart-yazi">
                <h2>ÖZKAN TUNCEL</h2>
                <p>
                  Fırat Üniversitesi Yazılım mühendisliği 3.sınıf öğrencisiyim.
                  Son 2,5 yıldır Kotlin ve Flutter gibi teknolojilerle mobil
                  uygulama geliştirmekle ilgileniyorum. Bu süre içinde birçok
                  projede yer aldım ve uygulamaların tasarımından
                  geliştirilmesine kadar birçok aşamada aktif rol aldım. Aynı
                  zamanda, Doğuş teknolojide android developer olarak
                  çalışmaktayım.
                </p>
                <div className="social-media social-media2">
                  <a
                    href="https://www.linkedin.com/in/ozkantuncel/?originalSubdomain=tr"
                    className="linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/ozkantuncel" className="github">
                    <FaGithub />
                  </a>
                  <a href="mailto:ozkantuncel2016@gmail.com" className="mail">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="kart kart-4">
            <div className="resim-sagda">
              <img
                src={beyza}
                alt="Resim"
                className="kart-img"
                style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="kart-yazi">
              <h2>ELİF BEYZA SAĞLAM</h2>
              <p>
                Yazılım Mühendisliği 3. sınıf öğrencisi Elif Beyza Sağlam. Şu
                anda Swift ve Front-End alanlarında kendimi geliştiriyorum. Aynı
                zamanda Python üzerinde eğitmenlik yaparak öğrencilere kodlama
                konusundaki bilgi ve deneyimimi paylaşıyorum. Teknoloji
                dünyasında sürekli olarak yeni bilgiler öğrenmeyi ve bu
                bilgileri uygulamayı seven birisiyim.
              </p>
              <div className="social-media social-media2">
                <a
                  href="https://www.linkedin.com/in/elifbeyzasaglam/"
                  className="linkedin"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/elifbeyzasaglam" className="github">
                  <FaGithub />
                </a>
                <a href="mailto:saglame99@gmail.com" className="mail">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
