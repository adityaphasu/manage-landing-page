import React, { useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
    } else if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
    return false;
  }

  return (
    <form action="#" className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__container">
        <label htmlFor="email">
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            value={email}
            title={error ? error : ""}
            placeholder="Updates in your inbox…"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
        </label>
        {error && <p className="form__error">{error}</p>}
      </div>
      <button className="form__button" type="submit">
        Go
      </button>
    </form>
  );
}
