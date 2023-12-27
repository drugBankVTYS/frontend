import React from 'react';
import Navbar from '../../components/Navbar';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import './Vizyon.css';



const Vizyon = () => {
  return (
<div className='vision-page-content'><SecondaryNavbar/>
    <div className='container'>
    
      {/* Sol Menü */}

      
         <div className='left-menu'>
        <img
          src="https://res.cloudinary.com/dvovzmoip/image/upload/v1703535889/fft1f5ecfvaahhex0euk.png"
          alt="Açıklama"
        />
         </div>

      <div className='right-menu'>


        <div>
         <h2>MİSYON</h2> 
          <p>
          ilaç etken maddeleri konusunda doğru ve şeffaf bilgi sunarak,
           bireylerin sağlıklı kararlar almasına destek olmaktır. Bilimsel 
           doğruluk ilkesiyle hareket eder,kullanıcı ihtiyaçlarına duyarlılıkla 
           yaklaşır ve toplumsal sorumluluk bilinciyle hareket ederiz.
          </p>
        </div>
        


        {/* Vizyon Bölümü */}
        <div>
          <h2>VİZYON</h2>
          <p>
          ilaç etken maddeleri üzerine odaklanarak, toplumun sağlık anlayışını 
          dönüştürmek ve her bireyin ilaç kullanımı konusunda bilinçli kararlar 
          almasını sağlamak. İlaç etken maddeleriyle ilgili doğru ve güvenilir bilgi 
          akışını güçlendirmek, bireylerin kendi sağlıkları üzerinde kontrol sahibi 
          olmalarına yardımcı olmak.
          </p>
        </div>


        {/* Vizyon Bölümü */}
        <div>
          <h2>DEĞERLER</h2>
          <p>
          Bilimsel Doğruluk,
          Şeffaflık,
          Empati,
          Toplumsal Sorumluluk,
          Eğitim ve Bilinçlendirme,
          Gizlilik ve Güvenlik,
          Sürdürülebilirlik
          </p>
        </div>




      </div>
      </div>
     
    </div>
  );
};

export default Vizyon;
