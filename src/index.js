import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyle";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
