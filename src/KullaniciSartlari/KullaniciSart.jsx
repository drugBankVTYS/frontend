import React from 'react';
import Navbar from '../components/Navbar';
import SecondaryNavbar from '../components/SecondaryNavbar';
import './KullaniciSart.css';
const KullaniciSart = () => {
  return (
    <div className='container'>
    <SecondaryNavbar/>
      <div className='user-terms-page-content'>
        <div className="kullanici" style={{ width: '75rem'  }}>
           <img src="https://res.cloudinary.com/dvovzmoip/image/upload/v1703589625/kullaniciSartlari_spse5l.png" className="card-img-top" alt="..." />
           </div>
          <div className="card-body">
            <p className="card-text"> 
            Doğru ve Güncel Bilgi Kullanımı:

Kullanıcılarımızdan, projemizin sunmuş olduğu bilgileri doğru ve güncel bir şekilde kullanmalarını bekleriz. Yanlış veya eski bilgilerin kullanımından kaynaklanan sorumluluk tamamen kullanıcıya aittir.
Hesap Güvenliği:

Kullanıcılar, projemizdeki hesaplarına güvenli bir şekilde erişim sağlamak ve bilgilerini korumakla sorumludur. Güçlü şifreler kullanmak, hesapları paylaşmamak ve oturum açma bilgilerini güvende tutmak kullanıcıların sorumluluğundadır.
Kurallara Uygunluk:

Projemizin kullanımında, yerel ve ulusal yasalara uygun olmayan eylemlerden kaçınılmalıdır. Yasalara aykırı içerik paylaşımı, projenin kullanıcı şartlarını ihlal eder.
İzinsiz Kullanım:

Projemizin içeriğini izinsiz kullanmak, çoğaltmak veya dağıtmak kesinlikle yasaktır. Tüm içerikler projeye özeldir ve izin alınmadan kullanılamaz.
İletişim Kuralları:

Kullanıcılar, projemizin iletişim araçlarını saygılı bir şekilde kullanmalı ve diğer kullanıcılara karşı olumlu bir deneyim sağlamak için katkıda bulunmalıdır. Tehditkar, ayrımcı veya saldırgan dil kullanımı yasaktır.
Gizlilik Politikası:

Kullanıcılar, projemizin gizlilik politikasını anlamalı ve kabul etmelidir. Kullanıcı verileri, gizlilik politikamıza uygun olarak işlenir ve korunur.
İhlal Durumları:

Kullanıcılar, bu şartlara uymadıkları takdirde hesaplarının askıya alınabileceğini veya kapatılabileceğini kabul ederler. Ayrıca, yasal yaptırımlarla karşılaşabilirler.
Değişiklikler ve Güncellemeler:

Projemiz, kullanıcı şartlarını zaman zaman güncelleme hakkını saklı tutar. Güncellemeler kullanıcılara bildirilecek ve yürürlük tarihinden itibaren geçerli olacaktır.
Bu kullanıcı şartları, projenin güvenli, saygılı ve etkili bir ortamda kullanılmasını sağlamak amacıyla belirlenmiştir. Kullanıcılar, bu şartları dikkatlice okumalı ve kabul etmelidir.
</p>
          </div>
        </div>
      

      
    </div>
  );
}

export default KullaniciSart;
