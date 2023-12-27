import "./App.css";

import React from "react";
import Home from "./pages/Home/Home";
import Medicine from "./pages/Medicine/Medicine";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Vizyon from "./pages/Vizyon-Misyon/Vizyon";
import KullaniciSart from "./KullaniciSartlari/KullaniciSart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/drug_detail/:id" element={<Detail />}></Route>
      <Route path="/drug" element={<Medicine />}></Route>
      <Route path="/user-terms" element={<KullaniciSart />}></Route>
      <Route path="/vision-mission" element={<Vizyon />}></Route>
    </Routes>
    //ŞU APP.JS'YE DOKUNMAYIN LÜTFEN YENİ PATH EKLEMEK İSTEDİĞİNİZDE AYNISINI KOPYALAYIP YAPIŞTIRIN
  );
};

export default App;
