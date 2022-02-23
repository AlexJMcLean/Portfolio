import React from "react";

import PageTitle from "../components/PageTitle";
import PortfolioItem from "../components/PortfolioItem";

import emailServerImg from "../assets/emailServer.png";
import ecomerceArtisansImg from "../assets/ecomerceArtisans.png";

export default function Portfolio(props) {
  return (
    <div>
      <PageTitle text="Portfolio" />

      <section className="container">
        <PortfolioItem
          name="Email Server"
          extraInfo="NodeJS, Express"
          description="This is the code I have developed for use of my contact forms in my Portfolio.
          This application will allow you to send email from a contact form to an email you that you connect via GMAIL utilising 
          the package Nodemailer to assist with the low level functionality of running an email server"
          image={emailServerImg}
          github="https://github.com/AlexJMcLean/emailServer"
          liveLink="/contact"
        />
        <PortfolioItem
          name="Freelance Portfolio"
          extraInfo="HTML, CSS, Javascript, Liquid"
          description="I have successfully ran a freelance web development and desing agency utilising the Shopify platform to create custom websites and 
          impliment aditional features for clients"
          image={ecomerceArtisansImg}
          liveLink="https://www.ecommerceartisans.co.uk/our-work"
        />
      </section>
    </div>
  );
}
