import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Team = () => {
  const path = useLocation();
  return (
    <div className="container">
      <Navbar menu={path.pathname} />
      TEAM
    </div>
  );
};

export default Team;
