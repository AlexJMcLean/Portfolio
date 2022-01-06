import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
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
      max-height: 350px;
      justify-content: space-evenly;
      margin-top: 50px;
      padding: 0;
      width: 60%;
      margin: 150px auto 50px;
      display: flex;
      align-items: baseline;
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
      width: 100%;
      height: 100%;
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
      font-size: 1.5rem;
      line-height: 35px;

      .navTitle {
      }
      .icon {
        height: 35px;
        width: 35px;
        position: relative;
        top: 3px;
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
      .icon {
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
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

export default function Navbar({ isOpen, setOpen }) {
  return (
    <NavStyles open={isOpen}>
      <ul>
        <li>
          <Link to="/" onClick={() => setOpen(!isOpen)}>
            <span className="navTitle">Home</span>
            <span className="material-icons icon">home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(!isOpen)}>
            <span className="navTitle">About</span>
            <span className="material-icons icon">person</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={() => setOpen(!isOpen)}>
            <span className="navTitle">Portfolio</span>
            <span className="material-icons icon">work_outline</span>
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setOpen(!isOpen)}>
            <span className="navTitle">Blog</span>
            <span className="material-icons icon">rss_feed</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(!isOpen)}>
            <span className="navTitle">Email</span>
            <span className="material-icons icon">email</span>
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
