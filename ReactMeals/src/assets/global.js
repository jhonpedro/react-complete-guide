import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-pink-lighter: #faf3dd;
    --color-primary: #002855;
    --color-secondary: #00a5cf;
    --color-dark: #5e6472;
    --color-white: #f8f9fa;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
  }
`
