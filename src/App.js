import "./App.css";

import React from "react";
import Home from "./pages/Home/Home";
import Medicine from "./pages/Medicine/Medicine";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Vizyon from "./pages/VizyonMisyon/Vizyon";
import Kullanici from "./pages/KullaniciHaklari/Kullanici";
import About from "./pages/About/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/drug_detail/:id" element={<Detail />}></Route>
      <Route path="/drug" element={<Medicine />}></Route>
      <Route path="/vision" element={<Vizyon/>}></Route>
      <Route path="/rights" element={<Kullanici/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
};

export default App;
