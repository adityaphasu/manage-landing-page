import React from "react";
import { Logo2 } from "../../assets/images";
import { Facebook, Instagram, Twitter, Pinterest, Youtube } from "../../assets/icons/icons";
import Button from "../Button/Button";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <form action="#" className="footer__form">
        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder="Updates in your inbox…" />
        </label>
        <Button className="btn btn--noshadow" text="GO" />
      </form>
      <nav aria-label="Second Menu" className="footer__navbar">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              Home
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Pricing
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Products
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              About Us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Community
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer__socials">
        <a href="#" aria-label="facebook">
          <img src={Facebook} alt="" />
        </a>
        <a href="#" aria-label="youtube">
          <img src={Youtube} alt="" />
        </a>
        <a href="#" aria-label="twitter">
          <img src={Twitter} alt="" />
        </a>
        <a href="#" aria-label="pinterest">
          <img src={Pinterest} alt="" />
        </a>
        <a href="#" aria-label="instagram">
          <img src={Instagram} alt="" />
        </a>
      </div>
      <a href="#" className="footer__logo">
        <img src={Logo2} alt="" className="footer__img" aria-label="Manage" />
      </a>
      <p className="footer__copyright">Copyright 2020. All Rights Reserved</p>
    </footer>
  );
}
