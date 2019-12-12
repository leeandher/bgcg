import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Jua', 'Helvetica', 'Trebuchet MS', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', sans-serif;
    box-sizing: border-box;
  }
  code {
    font-family: 'Fira Code', 'Ioveska', Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #292929;
    color: #fcdc25;
    font-size: 10px;
  }
  a {
    color: inherit;
  }
  button {
    outline: 0;
    border: 0;
  }

  @media (prefers-color-scheme: light) {
    body {
        background-color: #000;
        color: white;
    }
}
`;

export default GlobalStyles;
