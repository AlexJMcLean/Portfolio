import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const ContentStyles = styled.div`
  h1{
    span {
      display: block;
      color: var(--slate);
      font-size: .8em;
    }
  }
  .subtext {
    font-size: 1.3rem;
    line-height: 2rem;
    max-width: 600px;
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
        the .NET ecosystem. Currently I am building a CRM in C# with ASP.NET.
      </p>
      <Button path="/portfolio" text="Check out my work"/>
    </ContentStyles>
  );
}
