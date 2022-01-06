import React, { useState } from "react";
import styled from "styled-components";

const ContactFormStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.5fr 2fr;

  input,
  textarea,
  button {
    background-color: var(--darkNavy);
    color: var(--slate);
    border: var(--borderStyle);
    border-radius: var(--borderRadius);
    padding: 15px;
    outline: none;
    box-sizing: border-box;
    transition: all 0.5s;

    &:focus {
      border-color: blue;
    }
  }
  input,
  textarea {
    width: 100%;
  }
  label {
    display: block;
    color: var(--slate);
    margin-bottom: 1rem;
  }
  textarea {
    height: 100%;
  }
  button {
    cursor: pointer;
  }

  .form-container {
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-rows: 1fr 2fr auto;
  }
  .top-row {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export default function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <ContactFormStyles>
      <div>
        <h2>Say hello!</h2>
        <p>
          Feel free to get in touch if you would like to know more about my
          work, I am always open to discussing about new ideas and
          opportunities.
        </p>
        {/* <h3>Email</h3>
        <a>alexmcl@hotmail.co.uk</a>
        <h3>Phone</h3>
        <a>07443 577832</a> */}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="portfolio-contact" />
        <div className="form-container">
          <div className="top-row">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here"
              required
            ></textarea>
          </div>
          <button type="submit">{status}</button>
        </div>
      </form>
    </ContactFormStyles>
  );
}
