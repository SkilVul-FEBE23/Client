import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>BeraniMelawan.Co</h3>

        <p class="footer-links">
          <a href="#">Home</a>|<a href="#">GetHelp</a>|<a href="#">Education</a>
          |<a href="#">Blog</a>
        </p>

        <p class="footer-company-name">
          Copyright © 2021 <strong>BeraniMelawan.Co</strong> All rights reserved
        </p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>Jakarta</span>
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+62-54545-5454</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#">BeraniMelawan@gmail.com</a>
          </p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          <strong>BeraniMelawan.Co</strong> adalah sebuah platform/wadah
          berbasis web yang mana bertujuan untuk membantu para korban bulliying
          menumbuhkan rasa percaya diri dan berani melawan pembully dengan
          diberi beberapa metode yang telah kami buat di website yang telah kami
          buat ini
        </p>
        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
