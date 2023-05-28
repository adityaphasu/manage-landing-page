import React from "react";
import "./Button.scss";

export default function Button({ className, text }) {
  return (
    <a href="#" className={className}>
      {text}
    </a>
  );
}
