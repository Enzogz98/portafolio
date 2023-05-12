import React from "react";
import foto from "../assets/foto.jpg";
import "../css/Header.css";
import { useState } from "react";
import loadingGif from "../assets/loadingGif.gif"
import { useEffect } from "react";

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowImage(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="row">
      <div className="container header-container">
        {isLoading ? (
          <div className="loading-icon">
            <img src={loadingGif} alt="Loading" />
          </div>
        ) : null}
        {showImage && (
          <img
            src={foto}
            alt=""
            loading="lazy"
            className="header-image"
          />
        )}
        <h1>Enzo Gonzalez</h1>
      </div>
    </div>
  );
};

export default Header;
