import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ContentStyles = styled.div`
  margin-top: 100px;

  h1 {
    span {
      display: block;
      color: var(--slate);
      font-size: 0.8em;
    }
  }
  .subtext {
    font-size: 1.3rem;
    line-height: 2rem;
    max-width: 600px;
    a {
      color: var(--green);
    }
  }
`;

export default function Main() {
  return (
    <ContentStyles>
      <p className="font-mono">Hi, my name is</p>
      <h1 className="font-name">
        Alex McLean.
        <span>I create experiences on the web.</span>
      </h1>
      <p className="subtext">
        I am a full-stack software developer in Northamptonshire, UK
        specialising in building beautiful, well crafted designs in React and
        NodeJS. Currently I am building a CMS within this website found{" "}
        <Link to="/admin">here.</Link>
      </p>
      <Button path="/portfolio" text="Check out my work" />
    </ContentStyles>
  );
}
