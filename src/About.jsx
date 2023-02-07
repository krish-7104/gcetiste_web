import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const About = () => {
  const path = useLocation();
  return (
    <div className="container">
      <Navbar menu={path.pathname} />
      ABOUT
    </div>
  );
};

export default About;
