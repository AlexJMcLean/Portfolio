import { createGlobalStyle } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');
</style>;

const Typography = createGlobalStyle`
    body{
       font-family : 'Nunito', sans-serif;
       color: var(--darkNavy);
    }
`;

export default Typography;
