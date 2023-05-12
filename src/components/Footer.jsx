import React from "react";
import Button from "react-bootstrap/Button";
import "../css/Footer.css"
import { TfiFacebook, TfiInstagram, TfiGithub,TfiYoutube,TfiTwitterAlt } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className="container" align-content="center">
      <h2 className="texto">Redes sociales para contacto:</h2>
      <div className="button-container row d-flex justify-content-center">
      <div className="btn-group btn-group-sm">
          <Button
            href="https://www.facebook.com/enzo.gonzalez.5891"
            target="blank"
            className="btn"
          >
            <TfiFacebook size="1.5em" />
          </Button>

          <Button
            href="https://www.instagram.com/enzoogonzalez98/"
            target="blank"
            className="btn instagram-button"
          >
            <TfiInstagram size="1.5em" />
          </Button>

          <Button
            href="https://github.com/Enzogz98"
            target="blank"
            className="btn github-button"
          >
            <TfiGithub size="1.5em" />
          </Button>

          <Button
            href="https://www.youtube.com/channel/UCol7nkrJUilQ1T9UGuEQ11A"
            target="blank"
            className="btn youtube-button"
          >
            <TfiYoutube size="1.5em" />
          </Button>

          <Button
            href="https://twitter.com/EnzoJaviGonz"
            target="blank"
            className="btn twitter-button"
          >
            <TfiTwitterAlt size="1.5em" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer
