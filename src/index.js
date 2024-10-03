import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Routes />
    <GlobalStyle />
  </>
);
