import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/Navbar";
import AppWrapper from "./Components/Styles/App.styles";
import About from "./Pages/About";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

const App = () => (
  <AppWrapper>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detalle/:id" element={<Detail />} />
    </Routes>
  </AppWrapper>
);

export default App;
