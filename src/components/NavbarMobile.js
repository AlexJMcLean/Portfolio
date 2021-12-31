import React from "react";
import  { Squash as Hamburger }  from 'hamburger-react';
import { useState } from "react";
import styled from "styled-components";

const NavbarMobile = styled.div`

`;



export default function NavbarMobile() {
  const [isOpen, setOpen] = useState(false)
    return (
      <>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} color="var(--green)"/>
        </div>
        <NavMenuMobile>
        <ul>
          <li>
            <a href="">
              <span className="navTitle">Home</span>
              <span className="material-icons">home</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">About</span>
              <span className="material-icons">person</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">Portfolio</span>
              <span className="material-icons">work_outline</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">Blog</span>
              <span className="material-icons">rss_feed</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">Email</span>
              <span className="material-icons">email</span>
            </a>
          </li>
        </ul>
        </NavMenuMobile>
        <></>
      </>
    )
}