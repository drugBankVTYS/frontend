import "./App.css";

import React from "react";
import Home from "./pages/Home/Home";
import Medicine from "./components/Medicine";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/drug" element={<Medicine />}></Route>
    </Routes>
    //ŞU APP.JS'YE DOKUNMAYIN LÜTFEN YENİ PATH EKLEMEK İSTEDİĞİNİZDE AYNISINI KOPYALAYIP YAPIŞTIRIN
  );
};

export default App;
