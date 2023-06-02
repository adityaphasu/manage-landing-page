import React from "react";
import Button from "../Button/Button";
import "./CtaSection.scss";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import { fadeInX } from "../../utils/animatedVariants";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <AnimatedComponent tag="h2" variants={fadeInX("positive")} className="cta-section__heading">
        Simplify how your team works today.
      </AnimatedComponent>
      <AnimatedComponent tag="div" variants={fadeInX("negative")}>
        <Button className="btn btn--white" text="Get Started" />
      </AnimatedComponent>
    </section>
  );
}
