import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Exo+2:wght@100;200;300;400&family=Poppins:wght@700&display=swap');
</style>;

const Typography = createGlobalStyle`
    :root {
      --title-font: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
      --mono-font: 'Anonymous Pro', monospace;
      --body-font:'Exo 2', sans-serif;
    }
    body{
       font-family : var(--body-font);
       color: var(--darkNavy);
       font-weight: 200;
    }

    .font-mono {
      font-family: var(--mono-font);
      color: var(--green);
    }

    .font-name {
      font-family: var(--title-font);
      color: var(--lightSlate);
      font-size: clamp(40px,8vw,80px);
      line-height: 1.1em;
    }

    .font-title {
      font-family: var(--title-font);
      color: var(--white);
      font-size: 5rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0px;
      span {
        color:var(--green);
      }
    }

    p {
      color: var(--slate);
      font-size: 1.3rem;
      line-height: 2rem;
    }
`;

export default Typography;
