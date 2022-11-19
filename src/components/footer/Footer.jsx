import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>BeraniMelawan.Co</h3>

        <p className="footer-links">
          <Link to={"/"}>Home|</Link>
          <Link to={""}>GetHelp|</Link>
          <Link to={""}>Education|</Link>
        </p>

        <p className="footer-company-name">
          Copyright © 2022 <strong>BeraniMelawan.Co</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>DKI Jakarta/Indonesia</span>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+62-5454-5454-889</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#">BeraniMelawan@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>BeraniMelawan.Co</strong> adalah sebuah platform/wadah
          berbasis web yang mana bertujuan untuk membantu para korban bulliying
          menumbuhkan rasa percaya diri dan berani melawan pembully dengan
          diberi beberapa metode yang telah kami buat di website yang telah kami
          buat ini
        </p>
        <div className="footer-icons">
          <Link to={""}>
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to={""}>
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to={""}>
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to={""}>
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to={""}>
            <i className="fa fa-youtube"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
