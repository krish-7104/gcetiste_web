import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Team from "./Team";
import Contact from "./Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
