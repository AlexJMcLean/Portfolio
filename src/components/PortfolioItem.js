import React from "react";
import styled from "styled-components";

import githubImg from "../assets/github.png";
import linkTo from "../assets/linkTo.png";

const PortfolioItemStyles = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  position: relative;

  .icon {
    background-color: var(--green);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3em;
    margin-right: 30px;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    align-items: center;

    img {
      width: 100%;
    }
  }
  .date {
    display: inline-block;
    background-color: var(--darkNavy);
    color: var(--slate);
    width: auto;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1px 10px;
  }
  .arrow-right {
    display: inline-block;
    position: relative;
    top: 11px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid var(--darkNavy);
  }
  .links {
    display: flex;
    flex-direction: row;
    a {
      margin-right: 20px;
    }
    .link-icon {
      display: inline-block;
      width: 20px;
      padding-right: 10px;
      margin-bottom: -4px;
    }
    a {
      color: var(--green);
    }
  }
  h3 {
    color: var(--green);
  }
  ::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 20px;
    bottom: 0;
    height: calc(100% - 60px);
    border-left: 1px solid var(--green);
  }
`;

export default function PortfolioItem({
  name,
  extraInfo,
  description,
  image,
  github,
  liveLink,
}) {
  return (
    <PortfolioItemStyles>
      <div className="material-icons icon">apartment</div>
      <div className="container">
        <div>
          {extraInfo && (
            <div>
              <p className="date">{extraInfo}</p>
              <div className="arrow-right"></div>
            </div>
          )}
          {name && <h3>{name}</h3>}
          {description && <p>{description}</p>}
          <div className="links">
            {github && (
              <a href={github} rel="noreferrer noopener" target="_blank">
                <img src={githubImg} alt="Github" className="link-icon" />
                Github
              </a>
            )}
            {liveLink && (
              <>
                <a href={liveLink} rel="noreferrer noopener" target="_blank">
                  <img src={linkTo} alt="link" className="link-icon" />
                  Preview
                </a>
              </>
            )}
          </div>
        </div>
        {image && <img src={image} alt="name" />}
      </div>
    </PortfolioItemStyles>
  );
}
