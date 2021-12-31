import React from "react";
import styled from "styled-components";
import "normalize.css";

import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import MenuLinks from "./MenuLinks";
const BodyStyles = styled.div``;

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
