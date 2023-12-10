import React from "react";
import InformationCard from "./InformationCard";
import { faCapsules, faTablets, faHandDots} from "@fortawesome/free-solid-svg-icons";
import "./styles/info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Biz Ne Yapıyoruz?</span>
        </h3>
        <p className="info-description">
          İlaçlar büyük bir dünyadır ve bu dünya içinde meraklarınızı gidermek, istediklerinizi öğrenmeniz ve alerjik reaksiyonlar için 
          bilgi edinmek amacıyla kurulmuş bir platformuz.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="İlaçlar"
          description="Büyük veritabanımız ve yetkin yazılımızla sizlere ilaçlar dünyasına giriş yapma ve
          içinde gezinme imkanı sağlıyoruz"
          icon={faTablets}
        />

        <InformationCard
          title="İlaç-İlaç etkileşimi"
          description="İçtiğiniz ilaçların diğer ilaçlar üzerinde arttırıcı veya azaltıcı gibi etkileşimlerini öğrenebileceğiniz ve
          yapay zeka desteğiyle daha fazla bilgiye ulaşabileceğiniz sistem"
          icon={faCapsules}
        />

        <InformationCard
          title="Alerji ve Besin etkileşimi"
          description="İlaçların sizlerde oluşturması olası alerjik reaksiyonları öğrenebilmeniz ve yediğinz bir besin ile etkileşimini 
          incelemenizi sağlarız. Böylece daha bilinçli bir ilaç tüketme gerçekleşir
          "
          icon={faHandDots}
        />
      </div>
    </div>
  );
}

export default Info;