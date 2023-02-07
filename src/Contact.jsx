import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Contact = () => {
  const path = useLocation();
  return (
    <div className="container">
      <Navbar menu={path.pathname} />
      CONTACT
    </div>
  );
};

export default Contact;
