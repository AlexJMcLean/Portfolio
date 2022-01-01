import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/b-logo-small.png";

import Navbar from "./Navbar";


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
      <HamburgerStyle>
        <Hamburger
          color="var(--green)"
          toggled={isOpen}
          toggle={setOpen}
          label="Show menu"
          size={35}
        />
      </HamburgerStyle>
      <Navbar isOpen={isOpen} />
    </>
  );
}
