import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-primary: #14213d;
    --color-secondary: #fca311;
    --color-white: #e5e5e5; 
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body, input, button {
    font-family: Helvetica, sans-serif;
    font-size: 1.6rem;
  }
  
  body {
    color: white;
    background-color: var(--color-primary);
  }
`;
