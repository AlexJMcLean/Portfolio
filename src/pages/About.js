import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";

const PageBodyStyles = styled.section`

`;

export default function About(props) {
  return (
    <>
    <PageTitle text="About Me" />
    <PageBodyStyles>
      <div>
        <h2>Who am I?</h2>
        <p>
          Hello! My name is Alex and I love to create things that live on the internet.
          My interests in web development started in 2019 when I tried to build my wife a blog on wordpress -
          I thought it would be easy... I was wrong! 
        </p>
        <p>
          Since that day both my wife and I learnt a lot about web design and development, 
          which led to us starting a freelancing buinsess building websites on the Shopify platform for small businesses.
        </p>
        <p>
          I was always itching to continue my learning, and branched out into learning C#, the .NET environment and how to create server side web applications, 
          which is where I found my passion.
        </p>
      </div>
    </PageBodyStyles>
    </>
  );
}
