import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Tahoma', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};

  .pagination {
    margin-left: 15%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: center;

    .page-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: #000000de;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &:hover {
      background-color: #00000014;
      cursor: pointer;
    }

    &.active {
      background-color: #00000014;
    }

    &.disabled {
      pointer-events: none;

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }

    }

    .page-link {
      text-decoration: none;
      color: black;
    }

  }

  .main {
    margin-left: 15%
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .grid {
    display: grid;
    grid-template-columns: 800px 500px;
    grid-column-gap: 40px;
  }

  .content {
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 60px;
  }
`;
