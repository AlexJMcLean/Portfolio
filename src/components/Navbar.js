import React from "react";
import styled from "styled-components";
import NavbarMobile from "./NavbarMobile";

const NavStyles = styled.nav`
  display: none;
  @media (min-width: 577px) and (min-height: 531px) {
    height: 100vh;
    width: auto;
    position: fixed;
    right: 35px;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      list-style-type: none;
    }

    li {
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

      a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
      }

      .navTitle {
        position: absolute;
        right: 15px;
        top: 0;
        line-height: 50px;
        padding: 0 20px 0 30px;
        z-index: -1;
        border-radius: 25px 0 0 25px;
        background-color: var(--darkNavy);
        text-transform: uppercase;
        font-weight: 600;
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

    span {
      color: var(--white);
    }
  }
`;

export default function Navbar({ menuItems }) {
  return (
    <>
      <NavbarMobile />
      <NavStyles id="nav-menu">
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
      </NavStyles>
    </>
  );
}
