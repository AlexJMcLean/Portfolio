import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const NavStyles = styled.nav`
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

  @media (max-width: 576px) and (max-height: 530px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    &:active {
      left: 0;
    }
  }
`;

const Hamburger = styled.div`
  display: none;

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }

  @media (max-width: 576px) and (max-height: 530px) {
    display: block;
    cursor: pointer;
  }
`;

export default function Navbar({ menuItems }) {
  return (
    <>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
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
