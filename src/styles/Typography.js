import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Exo+2:wght@100;200;300;400&family=Poppins:wght@700&display=swap');
</style>;

const Typography = createGlobalStyle`
    body{
       font-family : 'Exo 2', sans-serif;
       color: var(--darkNavy);
       font-weight: 200;
    }

    .font-mono {
      font-family: 'Anonymous Pro', monospace;
      color: var(--green);
    }

    .font-name {
      font-family: 'Poppins', sans-serif;
      color: var(--lightSlate);
      font-size: clamp(40px,8vw,80px);
      line-height: 1.1em;
    }

    p {
      color: var(--slate);
      font-size: 1.3rem;
      line-height: 2rem;
    }
`;

export default Typography;
