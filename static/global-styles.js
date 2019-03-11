import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,body {
    overflow-x: hidden;
}  

html {
    margin-top: 50px; //due to fixed-top navbar
    margin-bottom: 50px; //due to fixed-bottom navbar footer
  }

  body {
    font-family: Arial;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0; //bootstrap 4 bugfix
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

  img {
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
