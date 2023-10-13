import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import GlobalStyle from "./styles/globalStyles";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
