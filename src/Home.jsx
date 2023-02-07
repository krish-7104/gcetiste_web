import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.css";
const Home = () => {
  const path = useLocation();

  return (
    <div className="container">
      <Navbar menu={path.pathname} />
      HOME
    </div>
  );
};

export default Home;
