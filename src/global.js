import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    user-select: none;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  ul{
    list-style: none;
  }
`;
