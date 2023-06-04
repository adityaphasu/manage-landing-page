import React from "react";

export default function ListItem({ text, className, linkClass }) {
  return (
    <li className={className}>
      <a href="#" className={`${linkClass}__link`}>
        {text}
      </a>
    </li>
  );
}
