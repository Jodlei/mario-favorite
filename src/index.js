import React from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "Components/GlobalStyle/GlobalStyle";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />

    <GlobalStyle />
  </React.StrictMode>
);
