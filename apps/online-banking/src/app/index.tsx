import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootEl = document.getElementById("app");
const root = createRoot(rootEl!);
root.render(<App></App>);
