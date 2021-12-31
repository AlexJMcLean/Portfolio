import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #64ffda;
    --navy: #0a192f;
    --darkNavy: #020c1b;
    --white: #e6f1ff;
    --slate: #8892b0;
    --grey: #efefef;
  }

  body {
    background-color: var(--navy);
  }

  h2 {
    font-size: 3rem;
    color: white;
  }
  
`;

export default GlobalStyles;
