import React from "react";
import styled from "styled-components";

import WorkExperience from "../components/WorkExperience";
import PageTitle from "../components/PageTitle";
import IconList from "../components/IconList";
import data from "../data/languages";

const PageBodyStyles = styled.section`
  h2 {
    span {
      color: var(--green);
    }
  }
  .box-border {
    max-width: 250px;
    border: solid 1px var(--green);
    border-radius: var(--borderRadius);
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    h3 {
      margin-bottom: 30px;
      color: var(--green);
      padding-top: 30px;
      text-align: center;
    }
    h4 {
      margin: 0 0 10px 0;
      color: var(--green);
    }
  }

  button {
    display: inline-block;
    font-family: var(--mono-font);
    border: var(--borderStyle);
    border-radius: var(--borderRadius);
    background-color: transparent;
    color: var(--green);
    padding: 15px;
    cursor: pointer;
    transition: all 0.5s;
    line-height: 18px;
    span {
      padding-left: 10px;
      position: relative;
      top: 5px;
      font-size: 20px !important;
    }
    &:hover {
      color: var(--navy);
      background-color: var(--green);
    }
  }

  .experience-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .info-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 300px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    margin-bottom: 100px;
  }
`;

export default function About(props) {
  const languages = data.icons;
  return (
    <>
      <PageTitle text="About Me" />
      <PageBodyStyles>
        <div className="info-container">
          <div>
            <h2>
              Who am I<span>?</span>
            </h2>
            <p>
              Hello! My name is Alex and I love to create things that live on
              the internet. My interests in web development started in 2019 when
              I tried to build my wife a blog on wordpress - I thought it would
              be easy... I was wrong!
            </p>
            <p>
              Since that day both my wife and I learnt a lot about web design
              and development, which led to us starting a freelancing buinsess
              building websites on the Shopify platform for small businesses.
            </p>
            <p>
              I was always itching to continue my learning, and branched out
              into learning C#, the .NET environment and how to create server
              side web applications, which is where I found my passion, and now
              want to pursue software engineering as a career.
            </p>
            <button href="../assets/b-logo-small.png" download>
              Download Cv
              <span className="material-icons">file_download</span>
            </button>
          </div>
          <div className="box-border">
            <h3>Information</h3>
            <h4>Name:</h4>
            <p>Alex McLean</p>
            <h4>Location:</h4>
            <p>Northamptonshire, UK</p>
            <h4>Phone:</h4>
            <p>07443577832</p>
            <h4>Email:</h4>
            <p>alexmcl@hotmail.co.uk</p>
          </div>
        </div>
        <h2>Experience & Education</h2>
        <div className="experience-container">
          <WorkExperience
            date="2019 - Present"
            name="E-commerce Artisans - Freelance"
            description="Created themes and custom development of features on the Shopify platform"
          />
          <WorkExperience
            date="2018 - 2019"
            name="Rectory Nusesry - Deputy Manager"
            description="Managed a team of 6 within the nursery setting and assisted in overall management of the nursery"
          />
          <WorkExperience
            date="2017 - 2020"
            name="Univerity of Hertfordshire - Bachelor of Arts"
            description="BA in Early Childhood and Education, I completed this while working full time."
          />
          <WorkExperience
            date="2012 - 2018"
            name="Various Roles within the Early years Sector"
            description="I undertook a number of roles within the early years sector helping develop high quality teaching and learning experiences"
          />
        </div>
        <IconList languages={languages} />
      </PageBodyStyles>
    </>
  );
}
