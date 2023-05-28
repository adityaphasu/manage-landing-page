import React from "react";
import Button from "../Button/Button";
import "./CtaSection.scss";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <h2 className="cta-section__heading">Simplify how your team works today.</h2>
      <Button className="btn btn--white" text="Get Started" />
    </section>
  );
}
