import React from "react";
import styled from "styled-components";

const ContentStyles = styled.div``;

export default function Main() {
  return (
    <ContentStyles>
      <p className="font-mono">Hi, my name is</p>
      <h1 className="font-name">
        Alex McLean.
        <span>I create experiences on the web.</span>
      </h1>
      <p>
        I am a full-stack software developer in Northamptonshire, UK
        specialising in building beautiful, well crafted designs in React and
        the .NET ecosystem. Currently I am building a CRM in C# with ASP.NET.
      </p>
    </ContentStyles>
  );
}
