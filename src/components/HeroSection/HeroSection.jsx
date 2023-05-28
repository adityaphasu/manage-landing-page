import React from "react";
import Button from "../Button/Button";
import { Illustration } from "../../assets/images";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <img className="hero-section__illustration" src={Illustration} alt="" />
      </div>
      <div>
        <h1 className="hero-section__heading">Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
          team goals in view.
        </p>
        <Button className="btn" text="Get Started" />
      </div>
    </section>
  );
}
