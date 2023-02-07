import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Events = () => {
  const path = useLocation();
  useEffect(() => {
    document.title = "Events - ISTE";
  }, []);
  return (
    <div className="container">
      <Navbar menu={path.pathname} />
      EVENTS
    </div>
  );
};

export default Events;
