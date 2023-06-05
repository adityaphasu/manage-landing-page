import React from "react";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import Form from "../Form/Form";
import { Logo2 } from "../../assets/images";
import { Facebook, Instagram, Twitter, Pinterest, Youtube } from "../../assets/icons/icons";
import { fadeInX, fadeInY } from "../../utils/animatedVariants";
import "./Footer.scss";
import ListItem from "../ListItem/ListItem";

const socialMediaData = [
  { label: "facebook", image: Facebook },
  { label: "youtube", image: Youtube },
  { label: "twitter", image: Twitter },
  { label: "pinterest", image: Pinterest },
  { label: "instagram", image: Instagram },
];

const footerLinks = [
  "Home",
  "Pricing",
  "Products",
  "About Us",
  "Careers",
  "Community",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="footer">
      <Form />
      <AnimatedComponent
        tag="nav"
        variants={fadeInY}
        aria-label="Second Menu"
        className="footer__navbar">
        <ul className="footer__list">
          {footerLinks.map((text, index) => (
            <ListItem key={index} text={text} className="footer__item" linkClass="footer" />
          ))}
        </ul>
      </AnimatedComponent>
      <AnimatedComponent tag="div" variants={fadeInX("negative")} className="footer__socials">
        {socialMediaData.map((socialMedia) => (
          <a href="#" aria-label={socialMedia.label} key={socialMedia.label}>
            <img src={socialMedia.image} alt="" />
          </a>
        ))}
      </AnimatedComponent>
      <AnimatedComponent
        tag="a"
        variants={fadeInX("negative")}
        href="#"
        className="footer__logo"
        aria-label="Manage">
        <img src={Logo2} alt="" className="footer__img" role="presentation" />
      </AnimatedComponent>
      <AnimatedComponent tag="p" variants={fadeInX("positive")} className="footer__copyright">
        Copyright 2020. All Rights Reserved
      </AnimatedComponent>
    </footer>
  );
}
