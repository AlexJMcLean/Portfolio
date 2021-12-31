import React from "react";
import styled from "styled-components";
import "normalize.css";

import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const BodyStyles = styled.div``;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Navbar />
      <SocialLinks />
      <BodyStyles>{children}</BodyStyles>
    </>
  );
}
