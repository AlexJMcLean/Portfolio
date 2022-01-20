import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";

import Navbar from "./Navbar";

const HamburgerStyle = styled.div`
  position: fixed;
  top: 35px;
  right: 35px;
  z-index: 3;
  @media (min-width: 577px) {
    display: none;
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
      <Navbar isOpen={isOpen} setOpen={setOpen} />
    </>
  );
}
