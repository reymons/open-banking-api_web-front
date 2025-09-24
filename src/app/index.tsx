import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootEl = document.getElementById("app");
const root = createRoot(rootEl!);

root.render(
    <StrictMode>
        <h1>Hello World</h1>
    </StrictMode>
);
