import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const About = () => {
  useEffect(() => {
    document.title = "About - ISTE";
  }, []);
  const path = useLocation();
  return (
    <div className="container">
      <Navbar menu={path.pathname} />
      ABOUT
    </div>
  );
};

export default About;
