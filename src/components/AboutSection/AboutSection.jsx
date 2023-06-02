import React from "react";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import "./AboutSection.scss";
import { fadeInX, stagger } from "../../utils/animatedVariants";

const features = [
  {
    id: 1,
    number: "01",
    name: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    number: "02",
    name: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports  you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    number: "03",
    name: "Everything you need in one place",
    description:
      " Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <AnimatedComponent tag="div" variants={stagger("positive")}>
          <h2 className="about-section__heading">What’s different about Manage?</h2>
          <AnimatedComponent tag="p" variants={fadeInX("positive")}>
            Manage provides all the functionality your team needs, without the complexity. Our software
            is tailor-made for modern digital product teams.{" "}
          </AnimatedComponent>
        </AnimatedComponent>
      </div>
      <div className="about-section__features">
        {features.map((feature) => (
          <AnimatedComponent
            tag="div"
            variants={stagger("negative")}
            className="about-section__feature"
            key={feature.id}>
            <h3 className="about-section__heading2">
              <span>{feature.number}</span>
              {feature.name}
            </h3>
            <AnimatedComponent tag="p" variants={fadeInX("negative")}>
              {feature.description}
            </AnimatedComponent>
          </AnimatedComponent>
        ))}
      </div>
    </section>
  );
}
