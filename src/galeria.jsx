import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Gallery.css";

import Gallery from "./Gallery";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Gallery />
  </StrictMode>
);