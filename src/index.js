import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render("Dice CrisHood");
