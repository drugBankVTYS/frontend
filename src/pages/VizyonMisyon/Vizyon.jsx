import React from "react";
import Navbar from "../../components/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import "./Vizyon.css";

const Vizyon = () => {
  return (
    <div className="custom-vision-page">
      <SecondaryNavbar />
      <div className="custom-vision-container">
        {/* Sol Menü */}
        <div className="custom-left-menu">
          <img
            src="https://res.cloudinary.com/dvovzmoip/image/upload/v1703535889/fft1f5ecfvaahhex0euk.png"
            alt="Açıklama"
          />
        </div>

        <div className="custom-right-menu">
          <div>
            <h2 className="custom-misyon-header">MİSYON</h2>
            <p className="custom-misyon-content">
              ilaç etken maddeleri konusunda doğru ve şeffaf bilgi sunarak,
              bireylerin sağlıklı kararlar almasına destek olmaktır. Bilimsel
              doğruluk ilkesiyle hareket eder, kullanıcı ihtiyaçlarına
              duyarlılıkla yaklaşır ve toplumsal sorumluluk bilinciyle hareket
              ederiz.
            </p>
          </div>

          {/* Vizyon Bölümü */}
          <div>
            <h2 className="custom-vizyon-header">VİZYON</h2>
            <p className="custom-vizyon-content">
              ilaç etken maddeleri üzerine odaklanarak, toplumun sağlık
              anlayışını dönüştürmek ve her bireyin ilaç kullanımı konusunda
              bilinçli kararlar almasını sağlamak. İlaç etken maddeleriyle
              ilgili doğru ve güvenilir bilgi akışını güçlendirmek, bireylerin
              kendi sağlıkları üzerinde kontrol sahibi olmalarına yardımcı
              olmak.
            </p>
          </div>

          {/* Değerler Bölümü */}
          <div>
            <h2 className="custom-degerler-header">DEĞERLER</h2>
            <p className="custom-degerler-content">
              Bilimsel Doğruluk, Şeffaflık, Empati, Toplumsal Sorumluluk, Eğitim
              ve Bilinçlendirme, Gizlilik ve Güvenlik, Sürdürülebilirlik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vizyon;
