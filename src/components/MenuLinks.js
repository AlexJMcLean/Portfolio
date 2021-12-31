import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/b-logo-small.png";

import Navbar from "./NavBar";
import SocialLinks from "./SocialLinks";

const HamburgerStyle = styled.div`
  position: fixed;
  top: 35px;
  right: 35px;
  @media (min-width: 577px) {
    display: none;
  }
`;

const LogoStyle = styled.div`
  position: fixed;
  top: 35px;
  left: 35px;
  img {
    height: 60px;
    width: 60px;
  }
`;

export default function MenuLinks() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <LogoStyle>
        <a href="">
          <img src={logo} alt="Logo" />
        </a>
      </LogoStyle>
      <HamburgerStyle>
        <Hamburger
          color="var(--green)"
          toggled={isOpen}
          toggle={setOpen}
          label="Show menu"
          size={35}
        />
      </HamburgerStyle>
      <SocialLinks />
      <Navbar isOpen={isOpen} />
    </>
  );
}
