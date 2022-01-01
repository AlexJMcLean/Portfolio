import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Nunito:wght@300;400;600&family=Poppins:wght@700&display=swap');
</style>;

const Typography = createGlobalStyle`
    body{
       font-family : 'Nunito', sans-serif;
       color: var(--darkNavy);
    }

    .font-mono {
      font-family: 'Anonymous Pro', monospace;
      color: var(--green);
    }

    .font-name {
      font-family: 'Poppins', sans-serif;
      color: var(--lightSlate);
    }
`;

export default Typography;
