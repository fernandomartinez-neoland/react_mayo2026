import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Hijo from "./components/hijo.component";
import Hermano from "./components/hermano.component";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children: [
      {
        path: "/hijo",
        Component: Hijo,
      },
      {
        path: "/hermano",
        Component: Hermano,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
