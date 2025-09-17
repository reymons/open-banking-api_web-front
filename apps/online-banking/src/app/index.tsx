import { createRoot } from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";

const rootEl = document.getElementById("app");
const root = createRoot(rootEl!);

root.render(
    <StrictMode>
        <App></App>
    </StrictMode>
);
