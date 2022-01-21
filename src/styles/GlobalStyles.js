import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #64ffda;
    --navy: #0a192f;
    --darkNavy: #020c1b;
    --white: #e6f1ff;
    --slate: #A0A5C0;
    --lightSlate: #ccd6f6;
    --grey: #efefef;
    --danger: #bb2124;

    --borderRadius: 5px;
    --borderStyle: solid 1px var(--green);
  }

  html {
    font-size: 100%;
  }
  body {
    background-color: var(--navy);
  }

  h1,h2,h3,p {
    margin: 0 0 30px 0;
  }

  h2 {
    font-size: 3rem;
    color: white;
  }
`;

export default GlobalStyles;
