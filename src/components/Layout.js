import React from "react";
import styled from "styled-components";
import "normalize.css";

import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import MenuLinks from "./MenuLinks";

const BodyStyles = styled.div`
  display: inline-block;
  min-width: 400px;
  width: 80%;
  max-width: 1000px;
  margin: 300px 0 100px 50px;

  // Center the container on larger screens
  @media (min-width: 1300px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <MenuLinks />

      <BodyStyles>{children}</BodyStyles>
    </>
  );
}
