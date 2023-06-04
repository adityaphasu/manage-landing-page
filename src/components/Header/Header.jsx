import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import { fadeInY } from "../../utils/animatedVariants";
import "./Header.scss";
import ListItem from "../ListItem/ListItem";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerLinks = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <>
      <div className={`overlay ${isMenuOpen ? "overlay--visible" : ""}`} />
      <AnimatedComponent tag="header" variants={fadeInY} className="header">
        <nav className="header__navbar" aria-label="menu">
          <a href="#" aria-label="Manage">
            <img src={Logo} alt="Manage" className="header__logo" />
          </a>
          <button
            className={`header__hamburger ${isMenuOpen ? "header__hamburger--active" : ""}`}
            aria-label="Menu Button"
            onClick={handleMenuClick}>
            <span className="header__span"></span>
            <span className="header__span"></span>
            <span className="header__span"></span>
          </button>
          <ul className={`header__list ${isMenuOpen ? "header__list--open" : ""}`}>
            {headerLinks.map((text, index) => (
              <ListItem key={index} text={text} className="header__item" linkClass="header" />
            ))}
          </ul>
          <Button className="btn btn--hidden" text="Get Started" />
        </nav>
      </AnimatedComponent>
    </>
  );
}
