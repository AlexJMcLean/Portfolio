import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";

const NavStyles = styled.nav`
  height: 100vh;
  display: flex;

  // Mobile
  @media (max-width: 576px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    flex-direction: column;

    background: var(--darkNavy);
    width: 100vw;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }
  // Desktop
  @media (min-width: 577px) {
    width: auto;
    position: fixed;
    right: 35px;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    // Mobile
    @media (max-width: 576px) {
      height: 100%;
      max-height: 500px;
      justify-content: space-evenly;
      margin-top: 50px;
    }
    // Desktop
    @media (min-width: 577px) {
      align-items: flex-end;
    }
  }

  a {
    display: flex;
    text-decoration: none;
    // Mobile
    @media (max-width: 576px) {
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    }
    //Desktop
    @media (min-width: 577px) {
      flex-direction: row;
    }
  }

  li {
    span {
      color: var(--white);
    }
    .navTitle {
      text-transform: uppercase;
      font-weight: 600;
      line-height: 50px;
    }
    // Mobile
    @media (max-width: 576px) {
      font-size: 2rem;
      .navTitle {
      }
      .icon {
        height: 50px;
        width: 50px;
      }
      &:hover {
        span {
          color: var(--green);
        }
      }
    }
    // Desktop
    @media (min-width: 577px) {
      text-decoration: none;
      width: 50px;
      height: 50px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
      border-radius: 25px;
      background-color: var(--darkNavy);
      transition: all 0.3s;
      .navTitle {
        position: absolute;
        right: 15px;
        top: 0;

        padding: 0 20px 0 30px;
        z-index: -1;
        border-radius: 25px 0 0 25px;
        background-color: var(--darkNavy);
        opacity: 0;
        transition: all 0.3s;
      }
      &:hover {
        background-color: var(--green);
        span {
          color: var(--darkNavy);
        }
        .navTitle {
          right: 30px;
          opacity: 1;
          background-color: var(--green);
        }
      }
    }
  }
`;
const HamburgerStyle = styled.div`
  position: fixed;
  top: 35px;
  right: 35px;
`;

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <HamburgerStyle>
        <Hamburger color="var(--green)" toggled={isOpen} toggle={setOpen} />
      </HamburgerStyle>
      <NavStyles open={isOpen}>
        <ul>
          <li>
            <a href="">
              <span className="navTitle">Home</span>
              <span className="material-icons icon">home</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">About</span>
              <span className="material-icons icon">person</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">Portfolio</span>
              <span className="material-icons icon">work_outline</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">Blog</span>
              <span className="material-icons icon">rss_feed</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="navTitle">Email</span>
              <span className="material-icons icon">email</span>
            </a>
          </li>
        </ul>
      </NavStyles>
    </>
  );
}
